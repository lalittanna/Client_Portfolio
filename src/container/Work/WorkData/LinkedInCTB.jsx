import React from "react";
import { images, pdfs } from "../../../constants";

const LinkedInCTB = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            LinkedIn Talent Solutions – <span>Coffee Table Book</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – LinkedIn Talent Solutions
            <br />
            <strong className="work-detail__label">Role</strong> – Content Writer, Account Manager
        </p>

        <p className="work-detail__description">
            The time I gave birth to an annual asset for LinkedIn Talent Solutions —
            <strong> Leaders That Inspire</strong> — an annual coffee table book for staffing entrepreneurs.
            The book (written and conceptualised by me) garnered appreciation from the client as well as
            their global team, generating real-time leads for my agency. Content writing was the key
            requirement for this brand.
        </p>

        <div className="work-detail__gallery">
            <img
                src={images.CTB1}
                alt="LinkedIn Coffee Table Book Cover"
                className="work-detail__image"
            />

            <iframe
                src={pdfs.Leaders}
                className="work-detail__pdf"
                title="LinkedIn Leaders Coffee Table Book"
            ></iframe>
        </div>
    </div>
);

export default LinkedInCTB;
