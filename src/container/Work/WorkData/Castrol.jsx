import React from "react";
import { images } from "../../../constants";

const Castrol = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Castrol – <span>Brand Identity for Castrol Fast Scan</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Castrol Activ (Singapore) <br />
            <strong className="work-detail__label">Role</strong> – Copywriter
        </p>

        <p className="work-detail__description">
            The time the team and I conducted local market research to create a name and logo
            for Castrol’s new QR code feature. I gave copy and design inputs for the logo,
            standees, bottle neck tags, and posters and wrote the user manual for internal and B2C use.
        </p>

        <img src={images.fastScan1} alt="Castrol Fast Scan 1" className="work-detail__image" />
        <img src={images.fastScan2} alt="Castrol Fast Scan 2" className="work-detail__image" />
    </div>
);

export default Castrol;
