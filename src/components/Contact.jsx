function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="overflow-hidden text-center h-screen bg-gray-900 text-white flex flex-col items-center gap-16">
      <h1 className="text-6xl mt-[10dvh] font-bold">Contact</h1>
      <div className="text-3xl font-semibold">
        Have a question or want to work together?
        <br></br>Leave your details below and I'll get back to you as soon as
        possible.
      </div>
      <form className=" text-black flex flex-col gap-4">
        <input
          className="bg-white p-2 rounded-sm w-120"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-white p-2 rounded-sm w-120"
          type="e-mail"
          placeholder="Email"
        />
        <input
          className="bg-white py-4 px-2 rounded-sm w-120"
          type="text"
          placeholder="Message"
        />
        <div className="flex justify-end">
          <button
            className="bg-black hover:scale-110 px-4 py-2  text-white hover:text-gray-200 rounded-md "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      <footer className="bg-white gap-4 mt-auto flex w-screen items-center py-4  justify-center ">
        <img
          className=" hover:scale-120 h-8 cursor-pointer"
          src="svgs/github.png"
          alt=""
        />
        <img
          className="hover:scale-120 h-8 cursor-pointer"
          src="svgs/linkedin.png"
          alt=""
        />
      </footer>
    </section>
  );
}

export default Contact;
