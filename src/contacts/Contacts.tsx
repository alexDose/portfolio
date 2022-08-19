import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h2 className={s.item}>Contacts</h2>
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