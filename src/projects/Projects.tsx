import s from './Projects.module.scss'
import sContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todolistImg from "./../assets/image/todolist.jpeg"
import socialImg from "./../assets/image/social.webp"

export const Projects = () => {

    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }
    const social = {
        backgroundImage: `url(${socialImg})`
    }

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title text={"Projects"}/>
                <div className={s.projects}>
                    <Project name={'Todolist'} description={'asmd a egnfg sdpgo sd dfFSAF f asdafpeif anspfn anweaj nsdasjnf jafano dna na '} style={todolist}/>
                    <Project name={'Social Network'} description={'asmd a egnfg sdpgo sd dfFSAF f lflfal fkekf fiwhfsanv ahasdn ahf klhahf ad'} style={social}/>
                </div>
            </div>
        </div>
    )
}