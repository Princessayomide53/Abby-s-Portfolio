import Nav from "./component/layout/Nav";
import Hero from "./component/layout/Hero";
import Projects from "./component/layout/Projects";
import About from "./component/layout/About";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
