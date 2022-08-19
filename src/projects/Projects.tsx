import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project name={'Todolist'} description={'asmd a egnfg sdpgo sd dfFSAF f'}/>
                    <Project name={'Social Network'} description={'asmd a egnfg sdpgo sd dfFSAF f'}/>
                </div>
            </div>
        </div>
    )
}