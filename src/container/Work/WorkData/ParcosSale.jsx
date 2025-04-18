import React from "react";
import { images, videos } from "../../../constants";

const ParcosSale = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Parcos – <span>Gold Rush Sale IP</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Parcos
            <br />
            <strong className="work-detail__label">Role</strong> – Senior Copywriter, Strategist
        </p>

        <p className="work-detail__description">
            The time I worked on creating the first-ever sale IP for Parcos on tighter budgets and even tighter timelines.
            <br />
            <br />
            <strong>The Bolt</strong> – We wanted to have an icon that connects with the consumers and can be used to signify the sale without explicitly mentioning it. The bolt symbolised lightning-fast deals + flashing deals and was used throughout MARCOM.
        </p>

        <div className="work-detail__gallery">
            <img src={images.sale1} alt="Parcos Sale Visual" className="work-detail__image" />

            {[videos.saleVideo1, videos.saleVideo2, videos.saleVideo3, videos.saleVideo4, videos.saleVideo5, videos.saleVideo6, videos.saleVideo7].map((src, index) => (
                <video key={index} controls className="work-detail__video">
                    <source src={src} type="video/mp4" />
                </video>
            ))}
        </div>
    </div>
);

export default ParcosSale;
