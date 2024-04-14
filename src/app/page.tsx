import Nav from "./component/layout/Nav";
import Hero from "./component/layout/Hero";
import Projects from "./component/layout/Projects";
import About from "./component/layout/About";
import LiveWebsite from "./component/layout/LiveWebsite";
import Contact from "./component/layout/Contact";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Projects />
      <LiveWebsite />
      <About />
      <Contact />
    </div>
  );
}
