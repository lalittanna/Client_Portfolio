import React from "react";
import { videos } from "../../../constants";

const ParcosStore = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Parcos Store Launch – <span>Luxury Format</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Parcos Luxe
            <br />
            <strong className="work-detail__label">Role</strong> – Senior Copywriter, Strategist
        </p>

        <p className="work-detail__description">
            The time I tagged a new location for experiencing luxury in Bengaluru. To give a full experience of the new
            luxury destination aka Parcos Luxe, we created a walk-through video that took the viewer through the store from
            their point of view.
        </p>

        <div className="work-detail__gallery">
            {[videos.storeVideo1, videos.storeVideo2, videos.storeVideo3, videos.storeVideo4, videos.storeVideo5].map(
                (src, index) => (
                    <video key={index} controls className="work-detail__video">
                        <source src={src} type="video/mp4" />
                    </video>
                )
            )}
        </div>
    </div>
);

export default ParcosStore;
