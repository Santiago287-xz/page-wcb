
import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'How to create an account?',
            answer: 'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
            open: true
        },
        {
            question: 'How can I make payment using Paypal?',
            answer: 'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
            open: false
        },
        {
            question: 'Can I cancel my plan?',
            answer: 'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
            open: false
        },
        {
            question: 'How can I reach to support?',
            answer: 'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
            open: false
        }
    ]);

    const toggleFaq = (index: number) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }
            return item;
        }));
    }

    return (
        <section className="py-10 sm:py-16 lg:py-24 bg-white dark:bg-black dark:text-white text-gray-900">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">Preguntas Frecuentes</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-foreground">FAQ'S</p>
                </div>
                <div className="max-w-3xl mx-auto mt-4 space-y-4 md:mt-12">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 rounded-md border border-gray-800 cursor-pointer borded">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6 text-foreground" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-foreground"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">¿No encontraste la respuesta que buscas?<a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> Contacte con nuestro soporte</a></p>
            </div>
        </section>
    );
}

export default Faq;