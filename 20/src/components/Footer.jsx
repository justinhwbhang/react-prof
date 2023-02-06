import React from "react";
import { contactLinks } from "../data";

function Footer() {
    return (
        <footer>
            <nav id= "contact-nav " >
                <ul class= "flex-center ">
                    {
                        contactLinks.map( el => 
                            <a 
                            id={el.platform}
                            class= "footerLink-icon box" 
                            href={el.href} 
                            target="_blank"> 
                                {el.icon}
                            </a>
                        )
                    }
                </ul>
            </nav>
        </footer>
    )
}


export default Footer;