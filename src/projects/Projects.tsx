import s from "./Projects.module.scss";
import sContainer from "../common/styles/Container.module.css";
import { Project } from "./project/Project";
import { Title } from "../common/components/title/Title";
import todolistImg from "./../assets/image/todolist.jpeg";
import socialImg from "./../assets/image/social.webp";
import packsCardsImg from "./../assets/image/packsCards.jpeg";
import Fade from "react-awesome-reveal";

export const Projects = () => {
    const todolist = {
        backgroundImage: `url(${todolistImg})`,
    };
    const social = {
        backgroundImage: `url(${socialImg})`,
    };
    const packsCards = {
        backgroundImage: `url(${packsCardsImg})`,
    };

    return (
        <div id={"projects"} className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title text={"Projects"} />
                <div className={s.projects}>
                    <Fade>
                        <Project
                            name={"Todolist"}
                            description={
                                "Educational project. Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Material-UI. Using TypeScript for better code control. Covering code with unit tests, bug fixing, refactoring, deploying."
                            }
                            style={todolist}
                        />
                        <Project
                            name={"Social Network"}
                            description={
                                "Self-education project, Part time. Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Redux-form, Ant Design, Reselect. Using TypeScript for better code control, ESLint, Prettier for the best code style. Creating unit tests, bug fixing, refactoring, deploying. Organizing correct app architecture."
                            }
                            style={social}
                        />
                        <Project
                            name={"Packs Cards"}
                            description={
                                "Start-up project, Part time. Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Formik, Material-UI. Using TypeScript for better code control, ESLint, Prettier for the best code style. Organizing correct app architecture. Team development: bug fixing, refactoring, deploying. "
                            }
                            style={packsCards}
                        />
                    </Fade>
                </div>
            </div>
        </div>
    );
};
