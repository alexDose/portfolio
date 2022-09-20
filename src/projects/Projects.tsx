import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title text={"Project"}/>
                <div className={s.projects}>
                    <Project name={'Todolist'} description={'asmd a egnfg sdpgo sd dfFSAF f'}/>
                    <Project name={'Social Network'} description={'asmd a egnfg sdpgo sd dfFSAF f'}/>
                </div>
            </div>
        </div>
    )
}