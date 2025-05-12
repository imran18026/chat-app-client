import { getCurrentUserFromMongoDB } from "@/server-actions/users";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const user = await getCurrentUserFromMongoDB();
  console.log(user);
  return (
    <div className="flex items-center justify-center h-screen">
      <UserButton />
      <span className="ml-10">
        {user?.name} ( {user?.userName} )
      </span>
    </div>
  );
}
