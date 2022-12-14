import React from "react";
import s from "./Main.module.scss";
import sContainer from "../common/styles/Container.module.css";
import photo from "../assets/photo/photo.jpeg";
import Fade from "react-awesome-reveal";

export const Main = () => {
    const myPhoto = {
        backgroundImage: `url(${photo})`,
    };

    return (
        <div id={"main"} className={s.mainBlock}>
            <Fade>
                <div className={sContainer.container}>
                    <div className={s.text}>
                        <span>Hi there</span>
                        <p className={s.title}>
                            I am
                            <span className={s.name}>&nbsp; Alexei Yalovski</span>
                        </p>
                        <p>Frontend Developer</p>
                    </div>
                    <div className={s.mainPhoto}>
                        <div className={s.photo} style={myPhoto}></div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};
