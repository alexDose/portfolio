import s from "../Footer.module.scss";

type ImgBoxType = {
    style: any;
    href: string;
};

export const ImgBox = (props: ImgBoxType) => {
    return <a href={props.href} className={s.imgBox} style={props.style}></a>;
};
