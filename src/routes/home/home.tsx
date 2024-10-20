import "./home.scss";
import {BetterExperience} from "./better-experience/better-experience";
import {Features} from "./features/features";
import {About} from "./about/about";

export const Home = () => {
    return (
        <div className={"sc-home"}>
            <a href={"https://pmxv2.viral-team.com/"} target={"_blank"}>Go To PMXV2 Blank</a>
            <BetterExperience/>
            <Features/>
            <About/>
        </div>
    )
}