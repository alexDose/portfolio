import s from './Contakts.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Contakts = () => {
    return (
        <div className={s.relocateBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={s.item}>Relocate</h2>
                <div>
                    <button>Post me</button>
                </div>
            </div>
        </div>
    )
}