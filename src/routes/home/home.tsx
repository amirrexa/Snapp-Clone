import "./home.scss";
import {BetterExperience} from "./better-experience/better-experience";
import {Features} from "./features/features";
import {About} from "./about/about";

export const Home = () => {
    return (
        <div className={"sc-home"}>
            <a href={'http://localhost:3000'} target={'_blank'}>
                Go To LocalHost
            </a>
            <a href={"https://pmxv2.viral-team.com/"} target={"_blank"}>Go To PMXV2 Blank</a>
            <a href={"https://pmxv2.viral-team.com/"} target={"_self"}>Go To PMXV2 Self</a>
            <BetterExperience/>
            <Features/>
            <About />
        </div>
    )
}