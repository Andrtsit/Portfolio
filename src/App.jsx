import AppLayout from "./routes/AppLayout";
import AppLayout2 from "./routes/AppLayout2";

function App() {
  return <AppLayout2 />;
}

export default App;

// GRID WITH SKILLSET

<div className="grid p-8 justify-center items-center grid-cols-3  w-[50%]">
  <div className="h-40 w-40 flex flex-col ">
    <img src="svgs/tailwind.svg" alt="Tailwind Icon" className="h-32 " />
    <p className="text-xl text-black font-semibold">Tailwind CSS</p>
  </div>
  <div className="h-40 w-40 flex flex-col ">
    <img src="svgs/react.svg" alt="React Icon" className="h-32 " />
    <p className="text-xl text-black font-semibold">React</p>
  </div>
  <div className="h-40 w-40 flex flex-col ">
    <img src="svgs/javascript.svg" alt="Javascript icon" className="h-32 " />
    <p className="text-xl text-black font-semibold">Javascript</p>
  </div>
  <div className="h-40 w-40 flex flex-col ">
    <img src="svgs/css.svg" alt="" className="h-32 " />
    <p className="text-xl text-black font-semibold">CSS</p>
  </div>
  <div className="h-40 w-40 flex flex-col ">
    <img src="svgs/html.svg" alt="" className="h-32 " />
    <p className="text-xl text-black font-semibold">HTML</p>
  </div>
  <div className="h-40 w-40 flex flex-col ">
    <img src="svgs/git.svg" alt="" className="h-32 " />
    <p className="text-xl text-black font-semibold">GIT</p>
  </div>
</div>;

//
// FOOTER

<footer className="flex h-[10%] gap-4 bg-gray-400 items-center justify-center w-screen ">
  <img
    className=" hover:scale-120 h-10 cursor-pointer"
    src="svgs/github.png"
    alt=""
  />
  <img
    className="hover:scale-120 h-10 cursor-pointer"
    src="svgs/linkedin.png"
    alt=""
  />
</footer>;

// grid
