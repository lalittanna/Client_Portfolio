import React from "react";
import { images } from "../../../constants";

const NiravModi = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Nirav Modi – <span>Valentine’s Day Campaign</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Nirav Modi
            <br />
            <strong className="work-detail__label">Role</strong> – Copywriter
        </p>

        <p className="work-detail__description">
            The time I was Shakespeare-ish and impressed the client and myself with some kickass Valentine’s Day copy.
        </p>

        <div className="work-detail__gallery">
            <img src={images.NM1} alt="Nirav Modi 1" className="work-detail__image" />
            <img src={images.NM2} alt="Nirav Modi 2" className="work-detail__image" />
            <img src={images.NM3} alt="Nirav Modi 3" className="work-detail__image" />
            <img src={images.NM4} alt="Nirav Modi 4" className="work-detail__image" />
        </div>
    </div>
);

export default NiravModi;
