import React from 'react';
import s from './Main.module.scss';
import sContainer from '../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am Alexei Yalovski</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}