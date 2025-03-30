function FixedNav() {
  return (
    <nav className="fixed flex justify-end mr-4 gap-8 text-2xl opacity-50 bg-white text-black items-center top-0 left-0 w-full h-[10dvh] z-50 shadow-2xl">
      <div className="cursor-pointer hover:underline ">Home</div>
      <div className="cursor-pointer hover:underline ">About</div>
      <div className="cursor-pointer hover:underline ">Projects</div>
      <div className=" cursor-pointer mr-15 hover:underline ">Contact </div>
    </nav>
  );
}

export default FixedNav;
