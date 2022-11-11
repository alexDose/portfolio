import s from './Footer.module.scss'
import sContainer from '../common/styles/Container.module.css'
import {ImgBox} from "./imgBox/ImgBox";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s.container} ${sContainer.container}`}>
                <h3 className={s.item}>Alexei Yalovski</h3>
                <div className={s.box}>
                    <ImgBox/>
                    <ImgBox/>
                    <ImgBox/>
                    <ImgBox/>
                </div>
                <span>© 2022, Inc.</span>
            </div>
        </div>
    )
}