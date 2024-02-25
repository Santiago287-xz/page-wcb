import SliderImage from "./slider-image";
import CategoryTitle from "./title";

export default function ProjectSection() {
  const images: string[] = [
    "https://imgur.com/3NvItvi.png",
    "https://imgur.com/ghDZ0YO.png",
  ];
  return (
    <main className="bg-no-repeat bg-cover bg-center py-4 flex justify-center items-center">
      <section className="flex flex-wrap justify-center gap-4 w-4/5">
        <CategoryTitle
          text="Explore Beautiful Templates"
          description="Choose one of styles or cutomize easily your site following your ideas."
        />
        <div className="flex flex-wrap justify-center gap-4 w-3/4">
          <SliderImage images={images}></SliderImage>
        </div>
      </section>
    </main>
  );
}
