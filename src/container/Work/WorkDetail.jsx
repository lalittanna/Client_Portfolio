import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import workItems from "./WorkData";
import "./WorkDetail.scss";

const WorkDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentIndex = parseInt(id, 10);
    const item = workItems[currentIndex];

    const goToPrevious = () => {
        if (currentIndex > 0) navigate(`/work/${currentIndex - 1}`);
    };

    const goToNext = () => {
        if (currentIndex < workItems.length - 1) navigate(`/work/${currentIndex + 1}`);
    };

    if (!item) {
        return (
            <div className="work-detail__container">
                <div className="work-detail__content">
                    <h2>Work not found</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="work-detail__container">
            {/* Navigation Arrows */}
            <div className="work-detail__nav-arrows">
                <div className="arrow-wrapper left">
                    {currentIndex > 0 && (
                        <button onClick={goToPrevious} className="arrow arrow-left">
                            <FaArrowLeft />
                        </button>
                    )}
                </div>

                <div className="arrow-wrapper right">
                    {currentIndex < workItems.length - 1 && (
                        <button onClick={goToNext} className="arrow arrow-right">
                            <FaArrowRight />
                        </button>
                    )}
                </div>
            </div>

            <div className="work-detail__content">
                <div className="work-detail__description">{item.child}</div>
            </div>
        </div>
    );
};

export default WorkDetail;
