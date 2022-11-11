import s from './Contacts.module.scss'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import Fade from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <Title text={"Contacts"}/>
                <Fade>
                    <form className={s.formContainer}>
                        <input className={s.inputForm} placeholder={"Name"}/>
                        <input className={s.inputForm} placeholder={"e-mail"}/>
                        <textarea className={s.textareaForm} placeholder={"Message"}/>
                    </form>
                    <Button href={""} title={"Send"}/>
                </Fade>
            </div>
        </div>
    )
}