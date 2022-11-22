import s from "./Contacts.module.scss";
import { Title } from "../common/components/title/Title";
import Fade from "react-awesome-reveal";
import {useFormik} from "formik";
import axios from "axios";

type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        enableReinitialize: true,
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.name) {
                errors.name = "Required"
            }
            if (!values.message) {
                errors.message = "Required"
            }

            return errors;
        },
        onSubmit: (values) => {
            axios.post('https://gmail-smtp-nine.vercel.app/sendMessage', values)
            formik.resetForm()
            alert('Your message has been sent')
        }
    })

    return (
        <div id={"contacts"} className={s.contactsBlock}>
            <div className={s.container}>
                <Title text={"Contacts"} />
                <Fade>
                    <form onSubmit={formik.handleSubmit} className={s.formContainer}>
                        <input className={s.inputForm} placeholder={"Name"} {...formik.getFieldProps('name')}/>
                        {formik.touched.name && formik.errors.name && (
                            <div style={{ color: "red" }}>{formik.errors.name}</div>
                        )}
                        <input className={s.inputForm} placeholder={"Email"} {...formik.getFieldProps('email')}/>
                        {formik.touched.email && formik.errors.email && (
                            <div style={{ color: "red" }}>{formik.errors.email}</div>
                        )}
                        <textarea className={s.textareaForm} placeholder={"Message"} {...formik.getFieldProps('message')}/>
                        {formik.touched.message && formik.errors.message && (
                            <div style={{ color: "red" }}>{formik.errors.message}</div>
                        )}
                            <button className={s.buttonStyle} type={'submit'}>Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};
