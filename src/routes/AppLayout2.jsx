import About from "../components/About";
import Contact from "../components/Contact";
import FixedNav from "../components/FixedNav";
import Home from "../components/Home";

function AppLayout2() {
  return (
    <main className=" flex flex-col text-white bg-red-900">
      <FixedNav />
      <Home />
      <About />
      <section className="text-center h-screen bg-blue-900 text-white">
        <h1 className="text-6xl mt-[10dvh]  font-bold">Projects</h1>
      </section>
      <Contact />
    </main>
  );
}

export default AppLayout2;
