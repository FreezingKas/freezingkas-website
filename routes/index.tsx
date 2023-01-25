import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>FreezingKas</title>
      </Head>
      <Header active={"/"}></Header>
      <div class="p-4 mx-auto max-w-screen-md">
        <Hero/>
      </div>
    </>
  );
}
