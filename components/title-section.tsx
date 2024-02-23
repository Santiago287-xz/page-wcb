import { Button, Link } from "@nextui-org/react";
import { ArrowDown } from "@/components/icons";

const App = () => {
  return (
    <section className="h-screen bg-black mt-[-3rem] relative">
      {/* <Particles className="absolute h-full w-full" /> */}
      <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center animate-fade-up z-20">
        {/* <Image
          alt="Logo"
          src={siteConfig.images.principalLogo}
          className="scale-[2.7] rounded-none z-0 object-cover h-24 w-auto sm:h-24 sm:w-auto md:h-32 md:w-auto lg:h-40 lg:w-auto xl:h-48 xl:w-auto"
        /> */}
        <div className="flex justify-center">
          <span
            className="text-center text-8xl block whitespace-nowrap border-b-4 border-transparent
          w-[17ch] animate-typewriter overflow-hidden"
          >
            Webcodebuilders
          </span>
        </div>

        <Button
          href="/tienda/magic-control"
          as={Link}
          className="mx-auto mt-8 z-20 px-8 bg-transparent text-white text-md border rounded-[3rem]"
        >
          See more
          <ArrowDown />
        </Button>
      </div>
    </section>
  );
};

export default App;
