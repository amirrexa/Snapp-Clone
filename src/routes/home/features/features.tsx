import './features.scss';
import {Card} from "../../../components/card/card";
import eco from "../../../assets/images/210x190-eco.png"
import easy from "../../../assets/images/210x190-easy.png"
import fast from "../../../assets/images/210x190-fast.png"

export const Features = () => {
    return (
        <Card className={"sc-features"}>
            <Card className={"feature"}>
                <img src={eco} alt="eco"/>
                <h3>به صرفه</h3>
                <p>سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.</p>
            </Card>
            <Card className={"feature"}>
                <img src={easy} alt="easy"/>
                <h3>آسان</h3>
                <p>برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.</p>
            </Card>
            <Card className={"feature"}>
                <img src={fast} alt="fast"/>
                <h3>سریع</h3>
                <p>قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.</p>
            </Card>
        </Card>
    )
}