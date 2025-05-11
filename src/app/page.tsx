import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  console.log(user);
  return (
    <div className="flex items-center justify-center h-screen">
      <UserButton />
      <span className="ml-10">
        {user?.firstName} {user?.lastName} ( {user?.username} )
      </span>
    </div>
  );
}
