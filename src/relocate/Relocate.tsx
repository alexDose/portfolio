import s from "./Relocate.module.scss";
import sContainer from "../common/styles/Container.module.css";
import { Title } from "../common/components/title/Title";
import { Button } from "../common/components/button/Button";
import Fade from "react-awesome-reveal";

export const Relocate = () => {
    return (
        <div className={s.relocateBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title text={"I am available for freelance"} />
                <Fade>
                    <div style={{ marginTop: "25px" }}>
                        <Button href={""} title={"Hire me"} />
                    </div>
                </Fade>
            </div>
        </div>
    );
};
