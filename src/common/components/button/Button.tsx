import s from "./Button.module.scss";

type ButtonType = {
    href: string;
    title: string;
};

export const Button = (props: ButtonType) => {
    return (
        <div className={s.button}>
            <a href={props.href}>{props.title}</a>
        </div>
    );
};
