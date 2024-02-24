import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import CategoryTitle from "./title";

export default function Services() {
  const list = [
    {
      title: "Lastest",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1184650957057962074/image.png?ex=658cbf2d&is=657a4a2d&hm=a4584022118e2a483b2af46a23995ee6b4b27f41890bc8c5f5ddcb617366db91&=&format=webp&quality=lossless&width=950&height=473",
      bio: "Ecommerce echo en react que esta basado en caca.",
    },
    {
      title: "ArgenReps",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1184650957057962074/image.png?ex=658cbf2d&is=657a4a2d&hm=a4584022118e2a483b2af46a23995ee6b4b27f41890bc8c5f5ddcb617366db91&=&format=webp&quality=lossless&width=950&height=473",
      bio: "Un blogger donde lleva informacion privada de santiago fama para hackear.",
    },
    {
      title: "Punto de venta",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1184650957057962074/image.png?ex=658cbf2d&is=657a4a2d&hm=a4584022118e2a483b2af46a23995ee6b4b27f41890bc8c5f5ddcb617366db91&=&format=webp&quality=lossless&width=950&height=473",
      bio: "Un punto de venta echo en python donde podras filtrar los productos de excel mediante el codigo de barras.",
    },
    {
      title: "Punto de venta",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1184650957057962074/image.png?ex=658cbf2d&is=657a4a2d&hm=a4584022118e2a483b2af46a23995ee6b4b27f41890bc8c5f5ddcb617366db91&=&format=webp&quality=lossless&width=950&height=473",
      bio: "Un punto de venta echo en python donde podras filtrar los productos de excel mediante el codigo de barras.",
    },
    {
      title: "Punto de venta",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1184650957057962074/image.png?ex=658cbf2d&is=657a4a2d&hm=a4584022118e2a483b2af46a23995ee6b4b27f41890bc8c5f5ddcb617366db91&=&format=webp&quality=lossless&width=950&height=473",
      bio: "Un punto de venta echo en python donde podras filtrar los productos de excel mediante el codigo de barras.",
    },
    {
      title: "Punto de venta",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1210727904414273556/Sin_titulo.png?ex=65eb9d3a&is=65d9283a&hm=61f91b24f976f1f004366fb30abdde04e3c1234e6b6477d1b4ce91dbfaddb5b5&=&format=webp&quality=lossless",
      bio: "Un punto de venta echo en python donde podras filtrar los productos de excel mediante el codigo de barras.",
    },
  ];

  return (
<main className="pb-16 flex justify-center items-center bg-no-repeat bg-cover bg-center abg-[url(https://media.discordapp.net/attachments/1019381524149305426/1184631889328349235/z9C80iCFgwKFQAAAABJRU5ErkJggg.png?format=webp&quality=lossless&width=945&height=591)]">
  <section className="flex flex-wrap justify-center gap-4 w-4/5">
    <CategoryTitle text="Explore Beautiful Templates" description="Choose one of styles or cutomize easily your site following your ideas."/>
    <div className="flex flex-wrap justify-center gap-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          style={{ width: "395px", height: "268px", position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 1,
            }}
          />
          <CardBody className="overflow-visible p-4 relative z-20">
            <div>
              <b className="text-start text-white">{item.title}</b>
              <p className="text-default-500">{item.bio}</p>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-between z-10 relative">
            <b>
              <Button>Ver más</Button>
            </b>
          </CardFooter>
        </Card>
      ))}
    </div>
  </section>
</main>

  );
}