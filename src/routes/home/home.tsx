import "./home.scss";
import {BetterExperience} from "./better-experience/better-experience";
import {Features} from "./features/features";
import {About} from "./about/about";

export const Home = () => {
    return (
        <div className={"sc-home"}>
            <BetterExperience/>
            <Features/>
            <About />
        </div>
    )
}