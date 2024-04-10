export type SiteConfig = typeof siteConfig;
export type Project = (typeof siteConfig.projects.content)[0];

export const siteConfig = {
	lenguage: "es",
	name: "WebCodeBuilders",
	description:
		"Nos encontramos enfocados al máximo en crear y construir mousepads orientados al deporte competitivo profesional en sus diferentes entregas.",
	domain: "http://localhost:3000/",
	text: {
		contact: {
			h4: "Contacto",
			p: "Estamos buscando nuevos proyectos en los que trabajar. Si eres un emprendedor con una idea en mente, contáctanos para que podamos ayudarte a darle vida.",
		},
	},
	navItems: [
		{
			label: "Fases",
			href: "/#phases",
		},
		{
			label: "Projectos",
			href: "/#projects",
		},
		{
			label: "Services",
			href: "/#services",
		},
		{
			label: "FAQ'S",
			href: "/#faq",
		},
		{
			label: "Contact us",
			href: "/#contact",
		},
	],
	images: {},
	videos: {},
	question_section: [
		{
			title: "¿Cuánto tiempo lleva desarrollar un sitio web o software desde el inicio hasta la entrega final?",
			content:
				"Depende del proyecto, pero entre 2 y 5 meses ",
		},
		{
			title: "¿Qué tipo de sitios web y software desarrollan?",
			content:
				"Desarrollamos sitios web y software a medida, lo que necesites",
		},
		{
			title: "¿Ofrecen opciones de financiamiento o planes de pago flexibles?",
			content:
				"Si podemos llegar a un acuerdo de financiamiento o planes de pago",
		},
		{
			title: "¿Ofrecen servicios de alojamiento web y gestión de servidores?",
			content:
				"Si, nosotros manejamos nuestra propia máquina alojada en Buenos Aires",
		},
		{
			title: "¿Qué tecnologías y plataformas utilizan para el desarrollo?",
			content:
				"Depende del proyecto, pero podemos utilizar y adaptarnos a cualquier tecnología",
		},
	],
	projects: {
		content: [
			{
				id: "magic_by_zeko",
				name: "Magic by zEko",
				title: "Magic by zEko",
				short_description:
					"En este proyecto, creamos un sitio web ecommerce para la venta de periféricos del streamer <span class='text-indigo-400'> Zeko</span>.",
				date: "07/09/2023",
				link: "https://www.magicbyzeko.com/",
				image: {
					principal_image: {
						link: "https://i.imgur.com/5UwKnVK.png",
						alt: "a",
					},
					principal_image_phone: {
						link: "https://i.imgur.com/iqAh5Ay.png",
						alt: "a",
					},
					first_image: {
						link: "https://i.imgur.com/37GMkI5.png",
						alt: "a",
					},
					second_image: {
						link: "https://i.imgur.com/Gy1TrDs.png",
						alt: "a",
					},
				},
				color: {
					first: {
						h4: "text-[#0070f0]",
						gradient: "bg-[radial-gradient(#121ca61f_0%,#0f2a8500_60%)]",
						image: "bg-[#0c0b3a29] hover:bg-[#16155d29]",
					},
					second: {
						h4: "text-[#0a5dbc]",
						gradient: "bg-[radial-gradient(#1d56bb1c_0%,#0f2a8500_70%)]",
						image: "bg-[#0c0b3a29] hover:bg-[#16155d29]",
					},
				},
				text: {
					first: {
						title: "Objetivos del Proyecto",
						subtitle: "Magic by zEko",
						paragraph:
							"Nos encontramos con la problematica de renovar este sitio web. La idea era actualizar completamente el diseño y las funcionalidades de la página, ofreciendo una mejor experiencia de usuario fluida.",
					},
					second: {
						title: "Solución efectuada",
						subtitle: "Tecnologías utilizadas",
						paragraph:
							"Optamos por utilizar React y Next.js, aprovechando su potencia y flexibilidad para construir una aplicación web dinámica y receptiva. Además, implementamos Tailwind CSS para facilitar el diseño y la personalización, permitiéndonos crear una interfaz de usuario atractiva y fácil de navegar.",
					},
				},
			},
			{
				id: "puntodeventa",
				name: "El rincon del pescador",
				title: "Punto de venta",
				short_description:
					"El Rincón del Pescador nos solicitó crear un programa capaz de buscar productos con el fin de solicitar información específica, obteniendo datos de productos de manera más ágil y simple.",
				date: "23/09/2023",
				link: "https://www.magicbyzeko.com/",
				image: {
					principal_image: {
						link: "https://media.discordapp.net/attachments/1019381524149305426/1225586360883216394/image.png?ex=6621ab3e&is=660f363e&hm=5999e87fcc83893c4bb0570b1806f3672ff31b2a74b70708e9bac1dd07b0f212&=&format=webp&quality=lossless&width=1207&height=668",
						alt: "El Rincón del Pescador",
					},
					principal_image_phone: {
						link: "https://i.imgur.com/F4ya5S5.png",
						alt: "El Rincón del Pescador",
					},
					first_image: {
						link: "https://i.imgur.com/bYO2DKl.png",
						alt: "El Rincón del Pescador",
					},
					second_image: {
						link: "",
						alt: "",
					},
				},
				color: {
					first: {
						h4: "text-[#10984d]",
						gradient: "bg-[radial-gradient(#0e4b0217_0%,#24932600_60%)]",
						image: "bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]",
					},
					second: {
						h4: "",
						gradient: "bg-[radial-gradient(#1883401c_0%,#05210c00_70%)]",
						image: "",
					},
				},
				text: {
					first: {
						title: "Punto de venta",
						subtitle: "El rincon del pescador",
						paragraph:
							"Creamos un programa en Python capaz de buscas la información completa de productos a partir de un código partiendo de un archivo de excel, agilizando considerablemente el proceso de búsqueda.",
					},
					second: {
						title: "",
						subtitle: "",
						paragraph: "",
					},
				},
			},
			{
				id: "argenreps",
				name: "Proyecto argen Reps",
				title: "ArgenReps",
				short_description: "En este proyecto, Argen Reps nos encargó el desarrollo de una página web con el objetivo de mejorar su organización interna y expandir su alcance hacia un público más amplio.",
				date: "23/10/2011",
				link: "https://www.magicbyzeko.com/",
				image: {
					principal_image: {
						link: "https://prod.spline.design/3oQ8OFb0mwYFMZ-p/scene.splinecode",
						alt: "a",
					},
					principal_image_phone: {
						link: "https://i.imgur.com/AXa2Exa.png",
						alt: "a",
					},
					first_image: {
						link: "https://i.imgur.com/SYzGiLq.png",
						alt: "a",
					},
					second_image: {
						link: "",
						alt: "a",
					},
				},
				color: {
					first: {
						h4: "text-[#9857D3]",
						gradient: "bg-[radial-gradient(#7a21cd17_0%,#320F8500_60%)]",
						image: "bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]",
					},
					second: {
						h4: "text-[#6d45c4]",
						gradient: "bg-[radial-gradient(#3a12c11c_0%,#320F8500_70%)]",
						image: "bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]",
					},
				},
				text: {
					first: {
						title: "Problematica",
						subtitle: "Argen Reps",
						paragraph:
							"La problemática que enfrentaban se derivaba de que se manejaban a través de Discord, lo que generaba confusión debido a la cantidad de información acumulada. Con el propósito de mejorar la legibilidad y accesibilidad de la información, decidimos iniciar el desarrollo de una página web. Como solución, creamos una documentación detallada paso a paso. Además, integramos canales similares a los que utilizaban en Discord para garantizar una mejor organización.",
					},
					second: {
						title: "",
						subtitle: "",
						paragraph:
							"",
					},
				},
			},
			{
				id: "blum",
				name: "Blum",
				title: "Inmobiliaria Blum",
				short_description: "Esta pagina ",
				date: "23/10/2011",
				link: "https://www.magicbyzeko.com/",
				image: {
					principal_image: {
						link: "https://prod.spline.design/3oQ8OFb0mwYFMZ-p/scene.splinecode",
						alt: "a",
					},
					principal_image_phone: {
						link: "https://media.discordapp.net/attachments/1019381524149305426/1221621103923826698/image.png?ex=66133e4f&is=6600c94f&hm=46a5af5e72fd036a6cbc112a6822ef3f0a449596f10f46f65fa424f2ab5b0b9a&=&format=webp&quality=lossless&width=547&height=670",
						alt: "a",
					},
					first_image: {
						link: "https://i.imgur.com/SUnXg5X.png",
						alt: "a",
					},
					second_image: {
						link: "https://i.imgur.com/YTjF2JU.png",
						alt: "a",
					},
				},
				color: {
					first: {
						h4: "text-[#10984d]",
						gradient: "bg-[radial-gradient(#0e4b0217_0%,#24932600_60%)]",
						image: "bg-[rgba(30,11,58,0.16)] hover:bg-[#200b3a42]",
					},
					second: {
						h4: "text-[#10984d]",
						gradient: "bg-[radial-gradient(#1883401c_0%,#05210c00_70%)]",
						image: "",
					},
				},
				text: {
					first: {
						title: "Inmobiliaria Blum",
						subtitle: "Problematica",
						paragraph:
							"La inmobiliaria poseía un sitio web desactualizado, poco funcional y con un diseño poco usual y poco atractivo. El objetivo era crear una página web totalmente optimizada, con imágenes de alta calidad y una interfaz completamente renovada.",
					},
					second: {
						title: "Solucion planteada",
						subtitle: "WordPress",
						paragraph:
							"Para realizar esta propuesta, seleccionamos WordPress como plataforma ideal por su flexibilidad, escalabilidad y amplia comunidad de desarrolladores. Aprovechamos las herramientas y plugins disponibles para crear una solución que se ajustara a las necesidades  del proyecto.",
					},
				},
			},
		],
	},
	links: {
		instagram: "https://www.instagram.com/webcode__/",
		discord: "https://discord.gg/8qdhPtY4nm",
		tiktok: "https://www.tiktok.com/@webcodebuilders",
		page: "https://webcodebuilders.vercel.app/",
	},
	contact: {
		gmail: "web.code.build.accout@gmail.com",
	},
};
