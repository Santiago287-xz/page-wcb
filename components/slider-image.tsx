import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import { Image } from "@nextui-org/react";

export default function SliderImage({ images }: { images: string[] }) {
  return (
    <div className="rounded-lg w-auto m-auto col-start-1 col-end-1 md:row-start-1 md:row-end-3">
      <Splide
        options={{
          type: "loop",
          perMove: 1,
          loop: true,
          autoplay: true,
          interval: 5000,
          drag: true,
          updateOnMove: true,
          pagination: false,
          arrowPath:
            "M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z",
        }}
        aria-label="Products"
      >
        {images.map((url, index) => (
          <SplideSlide key={index} className="flex justify-center px-4">
            <Image
              removeWrapper
              alt={url}
              src={url}
              className="z-0 object-cover w-auto max-h-[30rem]"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
