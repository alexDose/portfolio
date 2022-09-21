import s from './Contacts.module.css'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <Title text={"Contacts"}/>
                <form className={s.formContainer}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <div className={s.button}>
                    <a href="">Send</a>
                </div>
            </div>
        </div>
    )
}