import s from "./Project.module.scss";
import {Button} from "../../common/components/button/Button";

type ProjectType = {
    name: string;
    description: string;
    style: any;
    href: string
};

export const Project = (props: ProjectType) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <Button href={props.href} title={"Seen"}/>
            </div>
            <div className={s.text}>
                <div className={s.title}>{props.name}</div>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
};
