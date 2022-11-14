import React from "react";
import s from "./Skill.module.scss";

type SkillType = {
    title: string;
    style: any;
};

export const Skill = (props: SkillType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>
            <h3>{props.title}</h3>
        </div>
    );
};
