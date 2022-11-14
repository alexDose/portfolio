import React from "react";
import s from "./Nav.module.scss";
import { Link } from "react-scroll";

function Nav() {
    return (
        <div className={s.nav}>
            <Link
                activeClass={s.active}
                to="main"
                smooth={true}
                spy={true}
                offset={50}
                duration={500}
            >
                Main
            </Link>
            <Link
                activeClass={s.active}
                to="skills"
                smooth={true}
                spy={true}
                offset={0}
                duration={500}
            >
                Skills
            </Link>
            <Link
                activeClass={s.active}
                to="projects"
                smooth={true}
                spy={true}
                offset={0}
                duration={500}
            >
                Projects
            </Link>
            <Link
                activeClass={s.active}
                to="contacts"
                smooth={true}
                spy={true}
                offset={0}
                duration={500}
            >
                Contacts
            </Link>
        </div>
    );
}

export default Nav;
