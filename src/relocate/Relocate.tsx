import s from './Relocate.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const Relocate = () => {
    return (
        <div className={s.relocateBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title text={"Relocate"}/>
                <div className={s.button}>
                    <a href="">Post me</a>
                </div>
            </div>
        </div>
    )
}