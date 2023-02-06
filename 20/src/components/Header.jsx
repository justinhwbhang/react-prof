import { useState } from "react"
export default function Header(props) {
    const [ headerLink, setHeaderLink ] = useState('aboutMe');

    const navLinks = [
        {
            title: 'About Me',
            id: 'aboutMe'
        },
        {
            title: 'Projects',
            id: 'projects'
        },
        {
            title: 'Resume',
            id: 'resume'
        },
        {
            title: 'Contact Me',
            id: 'contactMe'
        },
    ]

    return(
        <header>
            <h1 id="bigName" className="aboutMe-bigName" href='#aboutMe'>Clayton Miller</h1>
            <ul className="navLinks-unordered-list box">
                {navLinks.map(el =>
                    <a className="navLink-anchorTag box color-main" href={'#' + el.id}>{el.title}</a>
                )}
            </ul>
        </header>
    )
}

// {navLinks.map(el =>
//     <li className="aboutMe-li  ">
//         {/* <div className="fade-element " ></div> */}
//         {/* <a className="navLink-anchorTag " href={'#' + el.id}>{el.title}</a> */}
//         <a className="navLink-anchorTag box" onClick={() => console.log(el.id)} href={'#' + el.id}>{el.title}</a>
//         {/* <a className="navLink-anchorTag " onClick={setHeaderLink(el.id)} href={'#' + el.id}>{el.title}</a> */}
//     </li>    
// )}
