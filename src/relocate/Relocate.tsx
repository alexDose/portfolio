import s from './Relocate.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Relocate = () => {
    return (
        <div className={s.relocateBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={s.item}>Relocate</h2>
                <div className={s.button}>
                    <a href="">Post me</a>
                </div>
            </div>
        </div>
    )
}