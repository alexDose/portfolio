import React from 'react';
import s from './Skills.module.css';
import sContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'Js'} description={'Lorem ipsium sit emet'}/>
                    <Skill title={'React'} description={'Lorem ipsium sit emet'}/>
                    <Skill title={'Css'} description={'Lorem ipsium sit emet'}/>
                    <Skill title={'Css'} description={'Lorem ipsium sit emet'}/>
                    <Skill title={'Css'} description={'Lorem ipsium sit emet'}/>
                </div>
            </div>
        </div>
    );
}