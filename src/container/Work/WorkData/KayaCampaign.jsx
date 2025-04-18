import React from "react";
import { images } from "../../../constants";

const KayaCampaign = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Kaya Skincare – <span>#WishWearFlaunt</span>
        </h1>
        <h4 className="work-detail__subtitle">
            Won Best Digital Integrated Campaign at Drivers of Digital Awards 2017
        </h4>

        <p>
            <strong className="work-detail__label">Client</strong> – Kaya Skin Clinic
            <br />
            <strong className="work-detail__label">Role</strong> – Creative Strategist, Copywriter
        </p>

        <p className="work-detail__description">
            The time I strategised a campaign for Laser Hair Removal using brand insights. The campaign
            was divided into two phases – pre-launch and launch. It integrated influencers with an online
            challenge (#Dropthehassle) leading to an offline event for more brand traction. The launch
            video garnered <span className="bold-numbers">42.42%</span> engagement rate with{" "}
            <span className="bold-numbers">1.3M</span> views on Facebook.
            <br />
            Facebook Bitly:{" "}
            <a
                href="http://bit.ly/WishWearFlauntKaya"
                target="_blank"
                rel="noreferrer"
                className="work-detail__link"
            >
                http://bit.ly/WishWearFlauntKaya
            </a>
        </p>

        <div className="work-detail__media">
            <iframe
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/MThx2UsmAR8"
                title="WishWearFlaunt Campaign"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        <div className="work-detail__gallery">
            {[images.kaya1, images.kaya2, images.kaya3, images.kaya4, images.kaya5, images.kaya6, images.kaya7].map((src, idx) => (
                <img key={idx} src={src} alt={`kaya${idx + 1}`} className="work-detail__image" />
            ))}
        </div>
    </div>
);

export default KayaCampaign;
