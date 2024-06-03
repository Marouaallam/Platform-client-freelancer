import {NavbarFree} from "../components/NavbarFree";
import Footer from "../components/Footer";
import {ProjetCat} from "../components/ProjetCat";
import { Navbar } from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";


export const Projectfree =() =>{
    const { id } = useParams();
    const userID = window.localStorage.getItem("userID");
   
    return (
        <div>
        {userID ? (
                <>
                    <NavbarFree />
                    <ProjetCat id={id}/>
                    <Footer />
                   
                </>
            ) : (
                <>
                    <Navbar />
                    <ProjetCat id={id}/>
                    <Footer />
                </>
            )}
        
        </div>
    )
}