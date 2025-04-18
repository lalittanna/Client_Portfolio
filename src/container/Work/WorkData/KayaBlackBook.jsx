import React from "react";
import { pdfs } from "../../../constants";

const KayaBlackBook = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Kaya Limited - <span>Black Book</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Kaya Skin Clinic
            <br />
            <strong className="work-detail__label">Role</strong> – Creative Strategist
        </p>

        <p className="work-detail__description">
            The time I put my blood, sweat, and tears into making a Black Book to get a
            deeper insight on the brand. This was used both for the client and to train
            internal teams — making brand takeovers easier and smoother.
        </p>

        <iframe
            src={pdfs.kayaBlackBook}
            title="Kaya Black Book"
            width="100%"
            height="1000px"
            className="work-detail__pdf"
        />
    </div>
);

export default KayaBlackBook;
