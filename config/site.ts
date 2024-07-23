export type SiteConfig = typeof siteConfig;
export type Project = (typeof siteConfig.projects.content)[0];

export const siteConfig = {
	lenguage: "es",
	name: "WebCodeBuilders",
	description:
		"Somos WebCodeBuilders, una empresa de desarrollo web y aplicaciones. Contáctanos para mas información",
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
				link: "www.magicbyzeko.com",
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
				link: "",
				image: {
					principal_image: {
						link: "https://i.imgur.com/OLDbThD.png",
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
							"Creamos un programa en Python capaz de buscar la información completa de productos a partir de un código en un archivo de Excel, agilizando considerablemente el proceso de búsqueda.",
					},
					second: {
						title: "",
						subtitle: "",
						paragraph: "",
					},
				},
			},
			{
				id: "dropsbahia",
				name: "Proyecto Drops Bahia",
				title: "Drops Bahia",
				short_description: "En este proyecto, desarrollamos una página web personalizada y funcional para DropsBahia, proporcionando un catálogo en línea bien organizado, navegación intuitiva, disponibilidad de productos en tiempo real.",
				date: "23/10/2011",
				link: "www.dropsbahia.com",
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
						link: "https://imgur.com/qpxwDHv.png",
						alt: "a",
					},
					second_image: {
						link: "https://imgur.com/6VN6YyO.png",
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
						subtitle: "Drops Bahia",
						paragraph:
							"DropsBahia, una tienda de sneakers, enfrentaba el problema de no tener una página web para mostrar su stock. Dependían de historias en Instagram para exhibir sus productos, pero la cantidad excesiva de historias diarias saturaba a los seguidores y hacía que muchos clientes potenciales perdieran oportunidades de compra, resultando en ventas perdidas y frustración.",
					},
					second: {
						title: "Solución",
						subtitle: "Drops Bahia",
						paragraph:
							"WebcodeBuilders desarrolló una página web personalizada y funcional para DropsBahia, proporcionando un catálogo en línea bien organizado, navegación intuitiva, disponibilidad de productos en tiempo real, un proceso de compra simplificado, y estrategias de SEO y marketing digital. Esto mejoró significativamente la experiencia del cliente, incrementó las venta, transformando la manera en que DropsBahia presentaba y vendía sus productos.",
					},
				},
			},
			{
				id: "blum",
				name: "Blum",
				title: "Inmobiliaria Blum",
				short_description: "Este proyecto implicó la actualización de una página existente. El cliente contaba con un sitio web en Jumbla y nos propuso mejorar su velocidad y estética. Decidimos utilizar WordPress para lograr una actualización más rápida y visualmente atractiva.",
				date: "23/10/2011",
				link: "inmobiliariablum.com.ar",
				image: {
					principal_image: {
						link: "https://i.imgur.com/cMAfqpI.png",
						alt: "a",
					},
					principal_image_phone: {
						link: "",
						alt: "",
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
