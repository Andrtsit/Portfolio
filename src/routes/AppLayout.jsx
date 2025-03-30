import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";

function AppLayout() {
  return (
    <div className="h-[370dvh]  overflow-hidden bg-gray-900">
      <nav className="fixed flex justify-end mr-4 gap-8 text-3xl items-center top-0 left-0 w-full h-[10dvh] bg-blue-50 opacity-75 z-50 shadow">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">About</div>
        <div className="cursor-pointer">Projects</div>
        <div className=" cursor-pointer mr-15">Contact </div>
      </nav>
      <main className="pt-[10dvh] pb-[10dvh] snap">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default AppLayout;
