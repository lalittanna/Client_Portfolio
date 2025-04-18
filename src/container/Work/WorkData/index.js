import { videos } from "../../../constants";
import AsianPaints from "./AsianPaints";
import Castrol from "./Castrol";
import KayaBlackBook from "./KayaBlackBook";
import KayaVideos from "./KayaVideos";
import KayaCampaign from "./KayaCampaign";
import LinkedInCaseStudies from "./LinkedInCaseStudies";
import LinkedInCTB from "./LinkedInCTB";
import LinkedInPharma from "./LinkedInPharma";
import Lodha from "./Lodha";
import NaturesBasket from "./NaturesBasket";
import NiravModi from "./NiravModi";
import InfluencerCampaigns from "./InfluencerCampaigns";
import LipstickCampaign from "./LipstickCampaign";
import ParcosStore from "./ParcosStore";
import ParcosSale from "./ParcosSale";

const workItems = [
    { video: videos.video1, title: "Asian Paints Bumper Ad", child: <AsianPaints /> },
    { video: videos.video2, title: "Castrol Activ Brand Identity", child: <Castrol /> },
    { video: videos.video3, title: "Kaya BlackBook", child: <KayaBlackBook /> },
    { video: videos.video4, title: "Kaya Product Videos", child: <KayaVideos /> },
    { video: videos.video5, title: "Kaya #WishWearFlaunt Campaign", child: <KayaCampaign /> },
    { video: videos.video6, title: "LinkedIn Case Studies", child: <LinkedInCaseStudies /> },
    { video: videos.video7, title: "LinkedIn Coffee Table Book", child: <LinkedInCTB /> },
    { video: videos.video9, title: "LinkedIn Pharma Ebook", child: <LinkedInPharma /> },
    { video: videos.video10, title: "Lodha Topical Content", child: <Lodha /> },
    { video: videos.video11, title: "Nature's Basket Blogs", child: <NaturesBasket /> },
    { video: videos.video12, title: "Nirav Modi Campaign", child: <NiravModi /> },
    { video: videos.kol, title: "Influencer Campaigns", child: <InfluencerCampaigns /> },
    { video: videos.lipstick, title: "Lipstick Day Campaign", child: <LipstickCampaign /> },
    { video: videos.store, title: "Parcos Luxe Store Launch", child: <ParcosStore /> },
    { video: videos.sale, title: "Parcos Gold Rush Sale IP", child: <ParcosSale /> },
];

export default workItems;
