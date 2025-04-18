import React from "react";
import { images, pdfs } from "../../../constants";

const LinkedInCaseStudies = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            LinkedIn – <span>Video and Digital Case Studies</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – LinkedIn
            <br />
            <strong className="work-detail__label">Role</strong> – Content Writer, Account Manager
        </p>

        <p className="work-detail__description">
            The time I wrote video and digital case studies for LinkedIn Talent Solutions which required
            a huge amount of coffee, research, and offline interviews. The clients and seniors appreciated
            the outcome, which led them to join our agency as a retainer.
        </p>

        <div className="work-detail__gallery">
            <div className="work-detail__media">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/cunXTZpJGaQ"
                    title="LinkedIn Case Study Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <img
                src={images.linkedInCaseStudy}
                alt="LinkedIn Case Study"
                className="work-detail__image"
            />

            <iframe
                src={pdfs.LinkedIn1}
                className="work-detail__pdf"
                title="LinkedIn Case Study PDF 1"
            ></iframe>

            <iframe
                src={pdfs.LinkedIn2}
                className="work-detail__pdf"
                title="LinkedIn Case Study PDF 2"
            ></iframe>
        </div>
    </div>
);

export default LinkedInCaseStudies;
