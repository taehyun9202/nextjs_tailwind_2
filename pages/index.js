import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>World Rank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => router.push("/create")}>Create New Item</button>
    </div>
  );
}
