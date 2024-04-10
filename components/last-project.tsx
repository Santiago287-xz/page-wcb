import React, { useState, useEffect } from 'react';
import StarRating from './stars';
import { Button, Image, Link } from "@nextui-org/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

const lightLogoURL = "https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png";
const darkLogoURL = "https://media.discordapp.net/attachments/1019381524149305426/1224877593514213418/background-patternDARKMODE.png?ex=661f1727&is=660ca227&hm=d3f0fb7eb98f07e2c9f18722d8c0281a1f6c93d006adcbf74202b2418c93a4a8&=&format=webp&quality=lossless&width=2434&height=1188";

export default function PuntoVenta() {
    const [imageUrl, setImageUrl] = useState("");
    const { theme } = useTheme();
    const project = siteConfig.projects.content[siteConfig.projects.content.length - 1]

    useEffect(() => {
        const imageUrl = theme === "light" ? lightLogoURL : darkLogoURL;
        setImageUrl(imageUrl);
    }, [theme]);
    return (
        <section>
            <section className="relative py-12 sm:py-16 lg:pb-36 dark:text-white ">
                <div className="absolute bottom-0 right-0 overflow-hidden">
                    <Image
                        className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
                        src={imageUrl}
                        alt="Imagen projecto" />
                </div>

                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                        <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight text-start">{project.title}</h1>
                            <p className="mt-2 text-lg text-foreground sm:mt-6 font-inter text-start">{project.short_description}</p>
                            <div className='w-full flex justify-start'>
                                <Button
                                    endContent={<ArrowRightIcon className="h-full p-1 text-foreground" />}
                                    className="gap-0 my-4 rounded-sm w-fit"
                                    as={Link}
                                    href={"/projects/" + project.id}>
                                    Ver Mas
                                </Button>
                            </div>
                            <div className="mt-8 sm:mt-16">
                                <div className="flex items-center justify-start">
                                    <StarRating />
                                </div>

                                <blockquote className="mt-6">
                                    <p className="text-lg font-bold text-foreground text-start">Proyecto Inmobiliaria</p>
                                    <p className="mt-3 text-base leading-7 text-foreground text-start">Este proyecto implicó la actualización de una página existente. El cliente contaba con un sitio web en Jumbla y nos propuso mejorar su velocidad y estética. Decidimos utilizar WordPress para lograr una actualización más rápida y visualmente atractiva.</p>
                                </blockquote>

                                <div className="flex items-center mt-3 justify-start">
                                    <Image className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_loffFbIVSZNKSNzEQfiJyXoc1j-AK-rOpMN7KCfMw&s" alt="" />
                                    <p className="ml-2 text-base font-bold text-foreground text-start">{project.title}</p>
                                </div>
                            </div>
                        </div>

                        <div className="xl:col-span-1 w-auto h-auto">
                            <Image src="https://media.discordapp.net/attachments/1019381524149305426/1225593930888904715/Frame_85_10.png?ex=6621b24b&is=660f3d4b&hm=dd7f1a72436651a0927a108f309f2cdf176b3b2506345d4232c5f86f96ebd615&=&format=webp&quality=lossless&width=588&height=648" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </section >
    );
}
