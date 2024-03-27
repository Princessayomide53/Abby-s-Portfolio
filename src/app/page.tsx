import Image from "next/image";
import Nav from "./component/layout/Nav";
import Hero from "./component/layout/Hero";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      /> */}
    </div>
  );
}
