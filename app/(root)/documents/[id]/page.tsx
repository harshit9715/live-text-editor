import CollborativeRoom from "@/components/CollborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Document = async ({ params }: SearchParamProps) => {
  const clerkuser = await currentUser();
  if (!clerkuser) {
    redirect("/sign-in");
  }
  const document = await getDocument({
    roomId: params.id,
    userId: clerkuser.emailAddresses[0].emailAddress,
  });
  if (!document) redirect("/");

  const userIds = Object.keys(document.usersAccesses);
  const users = await getClerkUsers({ userIds });

  const usersData = users.map((user: User) => ({
    ...user,
    userType: document.usersAccesses[user.email]?.includes(
      "room:write" as never,
    )
      ? "editor"
      : "viewer",
  }));
  const currentUserType = document.usersAccesses[
    clerkuser.emailAddresses[0].emailAddress
  ]?.includes("room:write")
    ? "editor"
    : "viewer";
  return (
    <main className="flex w-full flex-col items-center">
      <CollborativeRoom
        roomId={params.id}
        roomMetadata={document.metadata}
        users={usersData}
        currentUserType={currentUserType}
      />
    </main>
  );
};

export default Document;
