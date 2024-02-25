const App = () => {
  return (
    <section className="h-screen bg-black mt-[-3rem] relative">
      <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center z-20">
        <div className="flex content-center justify-center flex-wrap flex-col text-6xl w-1/2 font-light animate-fade-down text-white">
          <div className="m-auto">
            <span>Let's work</span>
            <span className="pl-3 text-effect text-transparent font-medium hover:text-white hover:cursor-pointer transition-all">
              Together
            </span>
          </div>
          <div className="m-auto">
            <span>Get in</span>
            <span className="pl-3 text-effect text-white hover:text-transparent hover:font-medium hover:cursor-pointer transition-all font-bold">touch</span>
          </div>
          <div className="m-auto">
            <span>with us</span>
          </div>
        </div>
        <p className="w-1/3 mx-auto text-center mt-4 animate-fade-up text-white/80">
          <span>
            A Showcase of Professionalism and Innovation. Power your creative
          </span>
          <span>ideas with cutting-edge technology.</span>
        </p>
      </div>
    </section>
  );
};

export default App;
