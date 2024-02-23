import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import CategoryTitle from "./title";

export default function Services() {
  const list = [
    {
      title: "MagicByZeko",
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
  ];

  return (
    <main className="pb-16 flex justify-center items-center bg-no-repeat bg-cover bg-center abg-[url(https://media.discordapp.net/attachments/1019381524149305426/1184631889328349235/z9C80iCFgwKFQAAAABJRU5ErkJggg.png?format=webp&quality=lossless&width=945&height=591)]">
      <section className="flex flex-wrap justify-center gap-4 w-4/5">
        <CategoryTitle text='Services'/>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="none"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[250px]" 
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <div>
                  <b className="text-start">{item.title}</b>
                  <p className="text-default-500">{item.bio}</p>
                </div>
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
