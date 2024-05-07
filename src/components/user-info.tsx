import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export async function UserInfo() {
  const session = await getServerAuthSession();
  return (
    <div>
      <p>{session && <span>Logged in as {session.user?.name}</span>}</p>
      <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
}
