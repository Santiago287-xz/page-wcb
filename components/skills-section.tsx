import React from "react";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import CategoryTitle from "./title";

export default function SkillsSection() {
  const list = [
    {
      title: "Lastest",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1210747257213947914/Sin_titulo222.png?ex=65ebaf40&is=65d93a40&hm=b88d73233a83ddcd9c83758a3e7002c6194af46886bb4d7ea4d345a66b830ee1&=&format=webp&quality=lossless",
      bio: "Ecommerce echo en react que esta basado en caca.",
    },
    {
      title: "ArgenReps",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1210747257213947914/Sin_titulo222.png?ex=65ebaf40&is=65d93a40&hm=b88d73233a83ddcd9c83758a3e7002c6194af46886bb4d7ea4d345a66b830ee1&=&format=webp&quality=lossless",
      bio: "Un blogger donde lleva informacion privada de santiago fama para hackear.",
    },
    {
      title: "Punto de venta",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1210747257213947914/Sin_titulo222.png?ex=65ebaf40&is=65d93a40&hm=b88d73233a83ddcd9c83758a3e7002c6194af46886bb4d7ea4d345a66b830ee1&=&format=webp&quality=lossless",
      bio: "Un punto de venta echo en python donde podras filtrar los productos de excel mediante el codigo de barras.",
    },
    {
      title: "Punto de venta",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1210747257213947914/Sin_titulo222.png?ex=65ebaf40&is=65d93a40&hm=b88d73233a83ddcd9c83758a3e7002c6194af46886bb4d7ea4d345a66b830ee1&=&format=webp&quality=lossless",
      bio: "Un punto de venta echo en python donde podras filtrar los productos de excel mediante el codigo de barras.",
    },
    {
      title: "Punto de venta",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1210747257213947914/Sin_titulo222.png?ex=65ebaf40&is=65d93a40&hm=b88d73233a83ddcd9c83758a3e7002c6194af46886bb4d7ea4d345a66b830ee1&=&format=webp&quality=lossless",
      bio: "Un punto de venta echo en python donde podras filtrar los productos de excel mediante el codigo de barras.",
    },
    {
      title: "Punto de venta",
      img: "https://media.discordapp.net/attachments/1019381524149305426/1210727904414273556/Sin_titulo.png?ex=65eb9d3a&is=65d9283a&hm=61f91b24f976f1f004366fb30abdde04e3c1234e6b6477d1b4ce91dbfaddb5b5&=&format=webp&quality=lossless",
      bio: "Un punto de venta echo en python donde podras filtrar los productos de excel mediante el codigo de barras.",
    },
  ];

  return (
<main className="pb-16 flex justify-center items-center bg-no-repeat bg-cover bg-center abg-[url(https://media.discordapp.net/attachments/1019381524149305426/1184631889328349235/z9C80iCFgwKFQAAAABJRU5ErkJggg.png?format=webp&quality=lossless&width=945&height=591)]" id="skills">
  <section className="flex flex-wrap justify-center gap-4 w-4/5">
    <CategoryTitle text="Skills" description="Choose one of styles or cutomize easily your site following your ideas."/>
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
                  opacity: 0.1,
                }}
              />
              <CardBody className="overflow-visible p-4 relative z-10">
                <div className="flex items-center mb-2">
                  <b className="text-start mr-2 text-2xl mt-4">{item.title}</b> 
                </div>
                <p className="text-default-500 mb-4 mt-4 text-lg"> 
                  {item.bio}
                </p>
              </CardBody>
              <CardFooter className="text-small justify-between z-2 relative">
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