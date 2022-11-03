import React from 'react';
import s from './Main.module.scss';
import sContainer from '../common/styles/Container.module.css';
import {Particle} from "../common/components/Particle/Particle";

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <Particle/>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <p className={s.title}>
                        I am
                        <span className={s.name}>
                            &nbsp; Alexei Yalovski
                        </span>
                    </p>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}