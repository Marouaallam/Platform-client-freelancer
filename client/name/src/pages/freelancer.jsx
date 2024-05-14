import {Navbar} from "../components/navbar"
import BannerImageFree from '../components/BannerImageFree'
import Categories from "../components/Categories"
import Projects from "../components/Projects"
import Profils from "../components/Profils"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"
import  {NavbarFree} from "../components/NavbarFree"

export const Freelancer =() =>{
    return (
        <div>
        <NavbarFree />
        <BannerImageFree />
        <Categories />
        <Projects />
        <Profils />
        <AboutUs />
        <Footer />
        </div>
    )    
}