function About() {
  return (
    <section className="overflow-hidden text-center h-screen bg-red-900 text-white flex flex-col items-center gap-16">
      <h1 className="text-6xl mt-[10dvh] font-bold">About</h1>
      <main className=" flex justify-center items-center  h-[80%] w-screen">
        <div className="w-[50%] h-[70%] bg-amber-50"></div>
        <div className="grid  justify-center items-center grid-cols-3 h-[70%] gap-16  w-[50%]">
          <div className="h-40 w-40 flex flex-col ">
            <img
              src="svgs/tailwind.svg"
              alt="Tailwind Icon"
              className="h-32 stroke-red"
            />
            <p className="text-xl text-black font-semibold">Tailwind CSS</p>
          </div>
          <div className="h-40 w-40 flex flex-col ">
            <img src="svgs/react.svg" alt="React Icon" className="h-32 " />
            <p className="text-xl text-black font-semibold">React</p>
          </div>
          <div className="h-40 w-40 flex flex-col ">
            <img
              src="svgs/javascript.svg"
              alt="Javascript icon"
              className="h-32 "
            />
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
        </div>
        ;
      </main>
    </section>
  );
}

export default About;
