const App = () => {
  return (
    <section className="h-[100svh] transition-all relative">
      <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center z-20">
        <div className="flex content-center justify-center flex-wrap flex-col text-2xl sm:text-4xl md:text-6xl w-auto font-light animate-fade-down text-foreground">
          <div className="m-auto">
            <span>Trabajemos juntos</span>
            <span className="pl-3 text-effect text-transparent font-medium hover:text-foreground hover:cursor-pointer transition-all">
            ahora
            </span>
          </div>
          <div className="m-auto">
            <span>Ponte en</span>
            <span className="pl-3 text-effect text-foreground hover:text-transparent hover:font-medium hover:cursor-pointer transition-all font-bold">contacto</span>
          </div>
          <div className="m-auto">
            <span>con nosotros</span>
          </div>
        </div>
        <p className="w-1/3 mx-auto text-center mt-4 animate-fade-up text-foreground/80 hidden sm:block">
          <span>
          Dedícate a tu negocio mientras nos encargamos de
          </span>
          <span> crear y mantener tu sitio web.</span>
        </p>
      </div>
    </section>
  );
};

export default App;
