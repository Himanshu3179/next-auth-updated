import authOption from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOption)


  if (!session) {
    return (
      <div>
        Not logged in
      </div>
    )
  }

  return (

    <div>

      <p>{session?.user?.id}</p>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>

    </div>


  );
}
