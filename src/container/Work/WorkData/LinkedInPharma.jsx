import React from "react";
import { pdfs } from "../../../constants";

const LinkedInPharma = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            LinkedIn – <span>E-Book on Indian Pharma and Biotech Industry</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – LinkedIn
            <br />
            <strong className="work-detail__label">Role</strong> – Content Writer, Account Manager
        </p>

        <p className="work-detail__description">
            The time I wrote an e-book about the performance of the Pharma and Biotech industry published on
            LinkedIn. This required hours interviewing industry experts and analysing trends from data.
        </p>

        <div className="work-detail__gallery">
            <iframe
                src={pdfs.PharmaEBook}
                className="work-detail__pdf"
                title="Pharma E-Book"
            ></iframe>
        </div>
    </div>
);

export default LinkedInPharma;
