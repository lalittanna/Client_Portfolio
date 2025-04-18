import React from "react";
import { images } from "../../../constants";

const Lodha = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Lodha Properties – <span>Topical Content</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Lodha Properties
            <br />
            <strong className="work-detail__label">Role</strong> – Creative Strategist, Copywriter
        </p>

        <p className="work-detail__description">
            The time my financial background came to use – I created storyboards and copy for animated
            YouTube videos and reels. We also created some fun topical posts as well as posts introducing
            the features of the properties around the world.
        </p>

        <div className="work-detail__gallery">
            <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/ZeKFqOnDM3o"
                title="Lodha YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <img src={images.Lodha1} alt="Lodha1" className="work-detail__image" />
            <img src={images.Lodha2} alt="Lodha2" className="work-detail__image" />
            <img src={images.Lodha3} alt="Lodha3" className="work-detail__image" />
            <img src={images.Lodha4} alt="Lodha4" className="work-detail__image" />
            <img src={images.Lodha5} alt="Lodha5" className="work-detail__image" />
        </div>
    </div>
);

export default Lodha;
