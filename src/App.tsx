import React from "react";
import "./App.scss";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Relocate } from "./relocate/Relocate";
import { Contacts } from "./contacts/Contacts";
import { Footer } from "./footer/Footer";
import { Particle } from "./common/components/Particle/Particle";

export const App = () => {
    return (
        <div className="App">
            <Particle />
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Relocate />
            <Contacts />
            <Footer />
        </div>
    );
};
