import { Navbar } from "../components/navbar"
import BannerImage from '../components/BannerImage'
import Categories from "../components/Categories"
import Projects from "../components/Projects"
import Profils from "../components/Profils"
import Footer from "../components/Footer"

export const Home =() =>{
    return (
        <div>
        <Navbar />
        <BannerImage />
        <Categories />
        <Projects />
        <Profils />
        <Footer />
        </div>
    )    
}