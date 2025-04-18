import React from "react";
import { images } from "../../../constants";

const NaturesBasket = () => (
    <div className="work-detail__section">
        <h1 className="work-detail__title">
            Nature's Basket – <span>SEO Friendly Blogs</span>
        </h1>

        <p>
            <strong className="work-detail__label">Client</strong> – Nature's Basket
            <br />
            <strong className="work-detail__label">Role</strong> – Content Writer
        </p>

        <p className="work-detail__description">
            The time I wrote SEO-friendly articles about recipes and nutrition on naturesbasket.co.in. I
            was also writing copy for all socials and handling their Pinterest page. Here is just a
            sample.
        </p>

        <div className="work-detail__gallery">
            <img
                src={images.NaturesBasket}
                alt="Nature's Basket"
                className="work-detail__image"
            />
        </div>
    </div>
);

export default NaturesBasket;
