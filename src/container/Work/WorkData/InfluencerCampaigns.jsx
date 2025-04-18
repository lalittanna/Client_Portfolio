import React from "react";
import { images, videos } from "../../../constants";

const InfluencerCampaigns = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Baccarose Perfumes & Beauty Products - <span>Influencer Campaigns</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Gucci, Paco Rabanne, Narciso
            Rodriguez, Montblanc, Boss, Jimmy Choo, Kate Spade
            <br />
            <strong className="work-detail__label">Role</strong> – Senior Copywriter
        </p>

        <p className="work-detail__description">
            The time I got to max out on my imagination while executing KOL campaigns
            for luxury brands with the objective of promoting their newest juice. It
            involved curating influencers who were fit for the brand and
            conceptualizing the mood boards.
        </p>

        <img src={images.influencer1} alt="Influencer Cover" className="work-detail__image" />

        <video controls className="work-detail__video">
            <source src={videos.influencerVideo1} type="video/mp4" />
        </video>
        <video controls className="work-detail__video">
            <source src={videos.influencerVideo2} type="video/mp4" />
        </video>

        <img src={images.kol1} alt="kol1" className="work-detail__image" />
        <img src={images.kol2} alt="kol2" className="work-detail__image" />
        <img src={images.kol3} alt="kol3" className="work-detail__image" />
        <img src={images.kol4} alt="kol4" className="work-detail__image" />

        <video controls className="work-detail__video">
            <source src={videos.kolVideo1} type="video/mp4" />
        </video>
        <video controls className="work-detail__video">
            <source src={videos.kolVideo2} type="video/mp4" />
        </video>
    </div>
);

export default InfluencerCampaigns;
