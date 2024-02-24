import { Button, Link } from "@nextui-org/react";
import { ArrowDown } from "@/components/icons";

const App = () => {
  return (
    <section className="h-screen bg-black mt-[-3rem] relative">
      {/* <Particles className="absolute h-full w-full" /> */}
      <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center z-20">
        {/* <Image
          alt="Logo"
          src={siteConfig.images.principalLogo}
          className="scale-[2.7] rounded-none z-0 object-cover h-24 w-auto sm:h-24 sm:w-auto md:h-32 md:w-auto lg:h-40 lg:w-auto xl:h-48 xl:w-auto"
        /> */}
        <div className="flex content-center justify-center flex-wrap flex-col text-6xl w-1/2 font-light animate-fade-down">
          <div className="m-auto">
            <span>Let’s work</span>
            <span className="pl-3 text-effect text-transparent font-medium">
              Together
            </span>
          </div>
          <div className="m-auto">
            <span>Get in</span>
            <span className="pl-3 font-bold">touch</span>
          </div>
          <div className="m-auto">
            <span>with us</span>
          </div>
        </div>
        <p className="w-1/3 mx-auto text-center mt-4 animate-fade-up">
          <span>A Showcase of Professionalism and Innovation. Power your creative</span>
          <span>ideas with cutting-edge technology.</span>
        </p>

      </div>
    </section>
  );
};

export default App;
