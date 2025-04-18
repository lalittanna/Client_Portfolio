import React from "react";
import { images, videos } from "../../../constants";

const LipstickCampaign = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Parcos – <span>National Lipstick Day Campaign</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Parcos
            <br />
            <strong className="work-detail__label">Role</strong> – Senior Copywriter, Strategist
        </p>

        <p className="work-detail__description">
            The time my Google search history was filled with lipstick recommendations.
            Three influencers created a vintage look with a modern twist. Their looks contradict
            the copy inspired by vintage lipstick ads, thus, making a bold, yet simple, statement.
            We wanted to establish a connection with these influencers and demonstrate to our
            audience that each colour has a distinct mood and shouldn't be stereotypically worn.
            During the period of the campaign, overall traffic increased by 47% and sessions by 41%
            compared to the previous 10 days’ traffic.
        </p>

        <div className="work-detail__gallery">
            <img src={images.lipstick1} alt="lipstick1" className="work-detail__image" />
            <img src={images.lipstick2} alt="lipstick2" className="work-detail__image" />

            <video controls className="work-detail__video">
                <source src={videos.lipstickVideo1} type="video/mp4" />
            </video>
            <video controls className="work-detail__video">
                <source src={videos.lipstickVideo2} type="video/mp4" />
            </video>
        </div>
    </div>
);

export default LipstickCampaign;
