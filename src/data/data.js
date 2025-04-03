import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import myfpic from '../images/captura-myf.webp'
import amandapic from '../images/captura-web-amanda-weslyn.webp'


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
        image: myfpic,
        url: "https://myf-agency.netlify.app/",
        alt: "captura enlace de proyecto de agencia de marketing",
    },
    {
        id: 2,
        name: "Amanda Weslyn Artista",
        image: amandapic,
        url: "https://amandaweslyn.com/",
        alt: "captura enlace a web de cantante Amanda Weslyn",
    }
]

export const engprojects = [
    {
        id: 1,
        name: "Marketing Agency",
        image: myfpic,
        url: "https://myf-agency.netlify.app/",
        alt: "captura enlace de proyecto de agencia de marketing",
    },
    {
        id: 2,
        name: "Artist Amanda Weslyn",
        image: amandapic,
        url: "https://amandaweslyn.com/",
        alt: "captura enlace a web de cantante Amanda Weslyn",
    }
]