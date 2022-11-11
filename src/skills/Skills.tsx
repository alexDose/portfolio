import React from 'react';
import s from './Skills.module.scss';
import sContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import Fade from "react-awesome-reveal";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text={"Skills"}/>
                <Fade>
                    <div className={s.skills}>
                        <Skill title={'Js'} description={'Lorem ipsium sit emet'}/>
                        <Skill title={'React'} description={'Lorem ipsium sit emet'}/>
                        <Skill title={'Css'} description={'Lorem ipsium sit emet'}/>
                        <Skill title={'Css'} description={'Lorem ipsium sit emet'}/>
                        <Skill title={'Css'} description={'Lorem ipsium sit emet'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}