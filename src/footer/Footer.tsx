import s from "./Footer.module.scss";
import sContainer from "../common/styles/Container.module.css";
import { ImgBox } from "./imgBox/ImgBox";
import imgTelegram from "../assets/footer/icons8-telegram-app-96.png";
import imgFacebook from "../assets/footer/icons8-facebook-96.png";
import imgLinkedIn from "../assets/footer/icons8-linkedin-circled-96.png";
import imgInstagram from "../assets/footer/icons8-instagram-96.png";

export const Footer = () => {
    const telegram = {
        backgroundImage: `url(${imgTelegram})`,
    };
    const facebook = {
        backgroundImage: `url(${imgFacebook})`,
    };
    const linkedIn = {
        backgroundImage: `url(${imgLinkedIn})`,
    };
    const instagram = {
        backgroundImage: `url(${imgInstagram})`,
    };

    return (
        <div className={s.footerBlock}>
            <div className={`${s.container} ${sContainer.container}`}>
                <h3 className={s.item}>Alexei Yalovski</h3>
                <div className={s.box}>
                    <ImgBox href={"https://t.me/alexeiDose"} style={telegram} />
                    <ImgBox
                        href={"https://www.facebook.com/profile.php?id=100080301283680"}
                        style={facebook}
                    />
                    <ImgBox
                        href={"http://linkedin.com/in/alexei-yalovski-58bbb4238"}
                        style={linkedIn}
                    />
                    <ImgBox href={"https://www.instagram.com/alexeiyalovsky"} style={instagram} />
                </div>
                <span>© 2022, All Right Reserved.</span>
            </div>
        </div>
    );
};
