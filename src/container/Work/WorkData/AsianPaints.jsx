import React from "react";
import { videos } from "../../../constants";

const AsianPaints = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Asian Paints Atmos - <span>YouTube Bumper Ad</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Asian Paints <br />
            <strong className="work-detail__label">Role</strong> – Scriptwriter
        </p>

        <p className="work-detail__description">
            The time I cracked a tough pitch and wrote a YouTube Bumper Ad for advertising a new
            paint category – Royale Atmos that absorbs indoor air pollutants.
        </p>

        <video controls className="work-detail__video">
            <source src={videos.AsianPaints} type="video/mp4" />
        </video>
    </div>
);

export default AsianPaints;
