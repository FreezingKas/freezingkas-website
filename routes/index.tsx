import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import MyHead from "../components/MyHead.tsx";

export default function Home() {
  return (
    <>
      <MyHead title="FreezingKas"></MyHead>
      <Header active={"/"}></Header>
      <div class="p-4 mx-auto max-w-screen-md">
        <Hero/>
      </div>
    </>
  );
}
