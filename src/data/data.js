import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import myfpic from '../images/captura-myf.webp'
import amandapic from '../images/captura-web-amanda-weslyn.webp'
import myfvideo from '../images/myfvideo.mp4'
import amandavideo from '../images/amandavideo.mp4'


export const skills = [
    {
        id: 1,
        name: "Web",
        description: "[Front-End,    Back-End,    Wordpress,   Ecommerce]",
        experience: "Experiencia 4 años",
        icon:  faCode 
    },
    {
        id: 2,
        name: "Marketing",
        description: "Copywriting       Redes Sociales",
        experience: "Experiencia 6 años",
        icon:  faLightbulb 
    },
    {
        id: 3,
        name: "Idiomas",
        description: "Español - Nativo",
        experience: "Inglés - C1",
        icon: faComments
    }
]

export const engskills = [
    {
        id: 1,
        name: "Web",
        description: "[Front-End,    Back-End,    Wordpress,   Ecommerce]",
        experience: "4 year experience",
        icon:  faCode 
    },
    {
        id: 2,
        name: "Marketing",
        description: "Copywriting       Social Media",
        experience: "6 year experience",
        icon: faLightbulb 
    },
    {
        id: 3,
        name: "Languages",
        description: "Spanish - Native",
        experience: "English - C1",
        icon: faComments
    }
]

export const projects = [
    {
        id: 1,
        name: "Agencia Marketing MYF",
        engname: "Marketing Agency",
        image: myfpic,
        url: "https://myf-agency.netlify.app/",
        alt: "captura enlace de proyecto de agencia de marketing",
        video: myfvideo,
        description: "Esta web fue desarrollada con React, Node, Express y MongoDB.",
        engdescription: "This website was developed using React, Node, Express and MongoDB."
    },
    {
        id: 2,
        name: "Amanda Weslyn Artista",
        engname: "Marketing Agency",
        image: amandapic,
        url: "https://amandaweslyn.com/",
        alt: "captura enlace a web de cantante Amanda Weslyn",
        video: amandavideo,
        description: "Esta web se desarrolló con Wordpress, utilizando Elementor como editor y Woocommerce como plugin para la tienda online. Por decisión personal de la clienta, ésta página web permanecerá en modo mantenimiento por un tiempo limitado. Sin embargo ha concedido permiso para desactivar este modo y mostrar así su contenido de forma momentánea y bajo mi supervisión.",
        engdescription: "This website was developed using Wordpress as CMS, Elementor as editor, and Woocommerce to manage the e-commerce. Due to the client's personal decision, this website will remain in maintenance mode for a limited time. However, she has granted permission to temporarily disable this mode and display its content for a short period under my supervision."
    },
    
]

