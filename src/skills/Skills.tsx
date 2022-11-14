import React from "react";
import s from "./Skills.module.scss";
import sContainer from "../common/styles/Container.module.css";
import { Skill } from "./skill/Skill";
import { Title } from "../common/components/title/Title";
import Fade from "react-awesome-reveal";
import imgJs from "../assets/skills/icons8-javascript-96.png";
import imgTs from "../assets/skills/icons8-typescript-96.png";
import imgReact from "../assets/skills/icons8-react-a-javascript-library-for-building-user-interfaces-96.png";
import imgRedux from "../assets/skills/icons8-redux-96.png";
import imgGit from "../assets/skills/icons8-github-96.png";
import imgHtml from "../assets/skills/icons8-html-5-96.png";
import imgCss from "../assets/skills/icons8-css3-96.png";

export const Skills = () => {
    const styleJs = {
        backgroundImage: `url(${imgJs})`,
    };
    const styleTs = {
        backgroundImage: `url(${imgTs})`,
    };
    const styleReact = {
        backgroundImage: `url(${imgReact})`,
    };
    const styleRedux = {
        backgroundImage: `url(${imgRedux})`,
    };
    const styleGit = {
        backgroundImage: `url(${imgGit})`,
    };
    const styleHtml = {
        backgroundImage: `url(${imgHtml})`,
    };
    const styleCss = {
        backgroundImage: `url(${imgCss})`,
    };

    return (
        <div id={"skills"} className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text={"Skills"} />
                <Fade>
                    <div className={s.skills}>
                        <Skill title={"JS"} style={styleJs} />
                        <Skill title={"TS"} style={styleTs} />
                        <Skill title={"REACT"} style={styleReact} />
                        <Skill title={"REDUX"} style={styleRedux} />
                        <Skill title={"GIT"} style={styleGit} />
                        <Skill title={"HTML"} style={styleHtml} />
                        <Skill title={"CSS"} style={styleCss} />
                    </div>
                </Fade>
            </div>
        </div>
    );
};
