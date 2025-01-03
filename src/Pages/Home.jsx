import BannerPart01 from "../Components/BannerPart01"
import BannerPart02 from "../Components/BannerPart02"
import Features from "../Components/Features"
import MultBanner from "../Components/MultBanner"

export default function Home(){
    return(
        <>
            <BannerPart01/>
            <MultBanner />
            <BannerPart02 />
            <Features />
        </>
    )
}