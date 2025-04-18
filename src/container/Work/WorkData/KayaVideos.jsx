import React from "react";

const KayaVideos = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Kaya Skincare – <span>Product Videos</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Kaya Skin Clinic
            <br />
            <strong className="work-detail__label">Role</strong> – Scriptwriter, Screenwriter,
            Assistant Executive Producer
        </p>

        <p className="work-detail__description">
            The time I spent endless nights to deliver 20+ product videos on time which were mainly used
            on Kaya’s website and other e-commerce channels. These videos were integrated on Kaya’s social
            media platforms with each campaign as well.
        </p>

        <div className="work-detail__gallery work-detail__gallery--video">
            {[
                "https://www.youtube.com/embed/xyRRmAp0eOI",
                "https://www.youtube.com/embed/-1p9FIW2jvo",
                "https://www.youtube.com/embed/XDkotjtPx4w",
                "https://www.youtube.com/embed/RZNAoUEg6UE",
                "https://www.youtube.com/embed/CBy8sNeSaJ8",
            ].map((src, idx) => (
                <div key={idx} className="work-detail__media">
                    <iframe
                        width="100%"
                        height="315"
                        src={src}
                        title={`Kaya Product Video ${idx + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    </div>
);

export default KayaVideos;
