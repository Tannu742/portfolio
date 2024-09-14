import { faCode, faEarthAmerica, faFileCode, faLaptop, faMapLocation, faPaperPlane, faPhone, faTerminal } from "@fortawesome/free-solid-svg-icons"

import imagePaths from '../assets/img/imgpath';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";


export const card = [
    { id: 1, title: 'Matric 10th', year: '2019-2020', para: 'Passed out from Central Board of Secondary Education in Aakash public sr. sec. School.' },
    { id: 2, title: 'Intermediate 12th', year: '2021-2022', para: 'Passed out from Central Board of Secondary Education in Aakash public sr. sec. School.' },
    { id: 3, title: 'Bachelor of Commerce', year: '2022-Present', para: 'Pursuing higher education form Delhi University.' },
]
export const about = [
    { id: 1, title: 'Name :', about: 'Tanisha' },
    { id: 2, title: 'Address :', about: 'Najafgarh, New Delhi-43 India' },
    { id: 3, title: 'Email :', about: 'tanisharajput9575@gmail.com' },
    { id: 4, title: 'Phone :', about: '+91 7042429575' },
]
export const testimonalCard = [
    { id: 1, icon: faLaptopCode, title: 'Website Design and Development', para: 'Custom website design and Responsive web design and User Interface (UI) design and User Experience (UX) design' },
    { id: 2, icon: faCode, title: 'Version controls', para: 'Using Git for version control and Managing code repositories on platforms like GitHub or GitLab' },
    { id: 3, icon: faFileCode, title: 'Interactive Features', para: 'Custom animations and transitions and Interactive elements (e.g., forms, sliders, modals)' },
    { id: 4, icon: faLaptop, title: 'Maintenance and Support', para: 'Ongoing website maintenance and Bug fixing and updates' },
    { id: 5, icon: faFreeCodeCamp, title: 'SEO Optimization', para: 'On-page SEO best practices and Implementation of SEO-friendly design elements' },
    { id: 6, icon: faTerminal, title: 'Performance Optimization', para: 'Pursuing higher education form Delhi University.' },
]
export const Progress = [
    { id: 1, title: 'HTML', label: '95%', now: '95' },
    { id: 2, title: 'REACT', label: '85%', now: '85' },
    { id: 3, title: 'CSS', label: '95%', now: '95' },
    { id: 4, title: 'JAVASCRIPT', label: '75%', now: '75' },
    { id: 5, title: 'REDUX', label: '80%', now: '80' },
    { id: 6, title: 'REACT BOOTSTRAP', label: '85%', now: '85' }
]
export const projects = [
    { id: 1, img: imagePaths.aa, title: 'GLINT SITE', link: 'https://glintsite.netlify.app/' },
    { id: 2, img: imagePaths.bb, title: 'INSTA SITE', link: 'https://instu.netlify.app/' },
    { id: 3, img: imagePaths.cc, title: 'VIMEO SITE', link: 'https://spontaneous-cheesecake-604a3d.netlify.app/' },
    { id: 4, img: imagePaths.dd, title: 'BURGER SITE', link: 'https://burgerfast.netlify.app/' },
    { id: 5, img: imagePaths.ee, title: 'SHOPPING SITE', link: 'https://shoppingshirt.netlify.app/' }
]
export const contact = [
    { id: 1, title: 'ADDRESS', para: 'Najafgarh, New Delhi', icon: faMapLocation, link: '' },
    { id: 2, title: 'CONTACT NUMBER', para: '+91 7042429575', icon: faPhone, link: 'tel:+91 7042429575' },
    { id: 3, title: 'EMAIL ADDRESS', para: 'tanisharajput@gmail.com', icon: faPaperPlane, link: 'mailto:tanisharajput9575@gmail.com' },
    { id: 4, title: 'WEBSITE', para: 'My Portfolio', icon: faEarthAmerica, link: 'https://my-portfolio098.netlify.app' },
]
export const Links = [
    { id: 1, path: '#home', link: 'Home' },
    { id: 2, path: '#about', link: 'About' },
    { id: 3, path: '#resume', link: 'Resume' },
    { id: 4, path: '#services', link: 'Services' },
    { id: 5, path: '#skills', link: 'Skills' },
    { id: 6, path: '#projects', link: 'Projects' },
    { id: 7, path: '#contact', link: 'Contact' }
]