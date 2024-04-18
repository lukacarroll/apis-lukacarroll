import Link from "next/link";
import styles from "~/app/index.module.css";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
export async function User() {
  const session = await getServerAuthSession();
  const hello = await api.post.hello({ text: "from Sydney" });

  return (
    <div className={styles.authContainer}>
      <p className={styles.showcaseText}>
        {session && <span>Logged in as {session.user?.name}</span>}
      </p>
      {hello.greeting}
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className={styles.loginButton}
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
}
