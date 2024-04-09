import { siteConfig } from '@/config/site';
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
    return (
        <section className="py-10 sm:py-16 lg:py-24 bg-white dark:bg-black dark:text-white text-gray-900" id='faq'>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">Preguntas Frecuentes</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-foreground">FAQ'S</p>
                </div>
                <div className="max-w-3xl mx-auto mt-4 space-y-4 md:mt-12 ">
                    <Accordion variant="splitted"  className='border-gray-800 bg-transparent'>
                        {siteConfig.question_section.map((question, index) =>
                            <AccordionItem key={index} aria-label={question.title} title={question.title} className='border border-gray-800 bg-[transparent_!important]'>
                                {question.content}
                            </AccordionItem>
                        )}
                    </Accordion>
                </div>
                <p className="text-center text-gray-600 textbase mt-9">¿No encontraste la respuesta que buscas?<a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> Contacte con nuestro soporte</a></p>
            </div>
        </section>
    );
}