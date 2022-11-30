import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { videos, images, pdfs } from "../../constants";
import { Modal } from "../../components";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const vid1 = (
  <div className="popUp">
    <h1>
      Asian Paints Atmos - <span>YouTube Bumper Ad</span>{" "}
    </h1>
    <p>
      <span className="roles">Client</span> – Asian Paints <br />{" "}
      <span className="roles">Role</span> – Scriptwriter
    </p>
    <p>
      The time I cracked a tough pitch and wrote a Youtube Bumper Ad for
      advertising a new paint category – Royale Atmos that absorbs indoor air
      pollutants.
    </p>
    <video controls className="videoModal">
      <source src={videos.AsianPaints} type="video/mp4" />
    </video>
  </div>
);

const vid2 = (
  <div className="popUp">
    <h1>
      Castrol - <span>Brand Identity for Castrol Fast Scan</span>{" "}
    </h1>
    <p>
      <span className="roles">Client</span> – Castrol Activ (Singapore) <br />{" "}
      <span className="roles">Role</span> – Copywriter
    </p>
    <p>
      The time the team and I conducted local market research to create a name
      and logo for Castrol’s new QR code feature. I gave copy and design inputs
      for the logo, standees, bottle neck tags, and posters and wrote the user
      manual for internal and B2C use.
    </p>

    <img src={images.fastScan1} alt="fastScan1" />
    <img src={images.fastScan2} alt="fastScan2" />
  </div>
);

const vid3 = (
  <div className="popUp">
    <h1>
      Kaya Limited - <span>Black Book</span>
    </h1>
    <p>
      <span className="roles">Client</span> - Kaya Skin Clinic
      <br /> <span className="roles">Role</span> – Creative Strategist
    </p>
    <p>
      The time I put my blood, sweat, and tears into making a BlackBook to get a
      deeper insight on the brand. This was being used for the client as well as
      to train the internal teams (easy take-over of brand).
    </p>

    <iframe
      src={pdfs.kayaBlackBook}
      width="900"
      height="1500"
      title="Kaya Black Book"
    ></iframe>
  </div>
);

const vid4 = (
  <div className="popUp">
    <h1>
      Kaya Skincare - <span>Product Videos</span>
    </h1>
    <p>
      <span className="roles">Client</span> - Kaya Skin Clinic
      <br /> <span className="roles">Role</span> – Scriptwriter, Screenwriter,
      Assistant Executive Producer
    </p>
    <p>
      The time I spent endless nights to deliver 20 plus product videos on time
      which were mainly used on Kaya’s website and other e-commerce channels.
      These videos were integrated on Kaya’s social media platforms with each
      campiagn as well.
    </p>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/xyRRmAp0eOI"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/-1p9FIW2jvo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/XDkotjtPx4w"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/RZNAoUEg6UE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/CBy8sNeSaJ8"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
);

const vid5 = (
  <div className="popUp">
    <div className="headings">
      <h1>
        Kaya Skincare - <span>#WishWearFlaunt</span>{" "}
      </h1>
      <h4>
        Won Best Digital Integrated Campaign at Drivers of Digital Awards 2017
      </h4>
    </div>

    <p>
      <span className="roles">Client</span> - Kaya Skin Clinic
      <br /> <span className="roles">Role</span> – Creative Strategist,
      Copywriter
    </p>
    <p>
      The time I strategised a campaign for Laser Hair removal using brand
      insights. The campaign was divided into two phases - pre-launch, and
      launch phase. The campaign integrated influencers with an online challenge
      (#Dropthehassle) leading to an offline event to receive more brand and
      traffic value. The launch video garnered{" "}
      <span className="bold-numbers">42.42%</span> engagement rate with{" "}
      <span className="bold-numbers">1.3M</span> views on Facebook. Facebook
      Bitly:
      <br />{" "}
      <a href="http://bit.ly/WishWearFlauntKaya">
        http://bit.ly/WishWearFlauntKaya
      </a>
    </p>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/MThx2UsmAR8"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <img src={images.kaya1} alt="kay1" />
    <img src={images.kaya2} alt="kay2" />
    <img src={images.kaya3} alt="kay3" />
    <img src={images.kaya4} alt="kay4" />
    <img src={images.kaya5} alt="kay5" />
    <img src={images.kaya6} alt="kay6" />
    <img src={images.kaya7} alt="kay7" />
  </div>
);

const vid6 = (
  <div className="popUp">
    <h1>
      LinkedIn – <span>Video and Digital Case Studies</span>{" "}
    </h1>
    <p>
      <span className="roles">Client</span> - LinkedIn
      <br /> <span className="roles">Role</span> – Content Writer, Account
      Manager
    </p>
    <p>
      The time I wrote video and digital case studies for LinkedIn Talent
      Solutions which required a huge amount of coffee, research, and offline
      interviews. The clients and seniors appreciated the outcome, which led
      them to join our agency as a retainer.
    </p>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/cunXTZpJGaQ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <img src={images.linkedInCaseStudy} alt="linkedInCaseStudy" />
    <iframe
      src={pdfs.LinkedIn1}
      width="900"
      height="1500"
      title="LinkedIn1"
    ></iframe>
    <iframe
      src={pdfs.LinkedIn2}
      width="900"
      height="1500"
      title="LinkedIn2"
    ></iframe>
  </div>
);

const vid7 = (
  <div className="popUp">
    <h1>
      LinkedIn Talent Solutions - <span>Coffee Table Book</span>
    </h1>
    <p>
      <span className="roles">Client</span> - LinkedIn Talent Solutions
      <br /> <span className="roles">Role</span> – Content Writer, Account
      Manager
    </p>
    <p>
      The time I gave birth to an annual asset for LinkedIn Talent Solutions -
      Leaders That Inspire - An Annual Coffee Table Book For Staffing
      Entrepreneurs. The book (written and conceptualised by me) garnered
      appreciation from the client as well as their global team, generating
      real-time leads for my agency. Content writing was the key requirement for
      this brand.
    </p>

    <img src={images.CTB1} alt="CTB1" />
    <iframe
      src={pdfs.Leaders}
      width="900"
      height="1500"
      title="LinkedIn Leaders"
    ></iframe>
  </div>
);

const vid9 = (
  <div className="popUp">
    <h1>
      LinkedIn - <span>E-Book on Indian Pharma and Biotech Industry</span>{" "}
    </h1>
    <p>
      <span className="roles">Client</span> - LinkedIn
      <br /> <span className="roles">Role</span> – Content Writer, Account
      Manager
    </p>
    <p>
      The time I wrote an e-book about the performance of the Pharma and Biotech
      industry published on LinkedIn. This required hours interviewing industry
      experts and analysing trends from data.
    </p>

    <iframe
      src={pdfs.PharmaEBook}
      width="900"
      height="1500"
      title="Pharma E Book"
    ></iframe>
  </div>
);

const vid10 = (
  <div className="popUp">
    <h1>
      Lodha Properties - <span>Topical Content</span>{" "}
    </h1>
    <p>
      <span className="roles">Client</span> - Lodha Properties
      <br /> <span className="roles">Role</span> – Creative Strategist,
      Copywriter
    </p>
    <p>
      The time my financial background came to use - I created storyboards and
      copy for animated YouTube videos and reels. We also created some fun
      topical posts as well as posts introducing the features of the properties
      around the world.
    </p>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/ZeKFqOnDM3o"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <img src={images.Lodha1} alt="Lodha1" />
    <img src={images.Lodha2} alt="Lodha2" />
    <img src={images.Lodha3} alt="Lodha3" />
    <img src={images.Lodha4} alt="Lodha4" />
    <img src={images.Lodha5} alt="Lodha5" />
  </div>
);

const vid11 = (
  <div className="popUp">
    <h1>
      Nature's Basket - <span>SEO Friendly Blogs</span>
    </h1>
    <p>
      <span className="roles">Client</span> - Nature's Basket
      <br /> <span className="roles">Role</span> – Content writer
    </p>
    <p>
      The time I wrote SEO friendly articles about recipes and nutrition on
      naturesbasket.co.in. I was also writing copy for all socials and handling
      their Pinterest page. Here is just a sample.
    </p>

    <img src={images.NaturesBasket} alt="Nature's Basket" />
  </div>
);

const vid12 = (
  <div className="popUp">
    <h1>
      Nirav Modi - <span>Valentine’s Day Campaign</span>{" "}
    </h1>
    <p>
      <span className="roles">Client</span> - Nirav Modi
      <br /> <span className="roles">Role</span> – Copywriter
    </p>
    <p>
      The time I was Shakespeare-ish and impressed the client and myself with
      some kickass valentine’s day copy.
    </p>

    <img src={images.NM1} alt="NM1" />
    <img src={images.NM2} alt="NM2" />
    <img src={images.NM3} alt="NM3" />
    <img src={images.NM4} alt="NM4" />
  </div>
);

const vid13 = (
  <div className="popUp">
    <h1>
      Baccarose Perfumes & Beauty Products - <span>KOL Campaigns</span>{" "}
    </h1>
    <p>
      <span className="roles">Client</span> - Gucci, Paco Rabanne, Narciso
      Rodriguez, Montblanc, Boss, Jimmy Choo, Kate Spade
      <br /> <span className="roles">Role</span> – Senior Copywriter
    </p>
    <p>
      The time I got to max out on my imagination while executing KOL campaigns
      for luxury brands with the objective of promoting their newest juice. It
      involved curating influencers who were fit for the brand and
      conceptualizing the mood boards.
    </p>

    <img src={images.kol1} alt="kol1" />
    <img src={images.kol2} alt="kol2" />
    <img src={images.kol3} alt="kol3" />
    <img src={images.kol4} alt="kol4" />

    <video controls className="videoModal">
      <source src={videos.kolVideo1} type="video/mp4" />
    </video>
    <video controls className="videoModal">
      <source src={videos.kolVideo2} type="video/mp4" />
    </video>
  </div>
);

const vid14 = (
  <div className="popUp">
    <h1>
      Parcos - <span>National Lipstick Day Campaign</span>{" "}
    </h1>
    <p>
      <span className="roles">Client</span> - Parcos
      <br /> <span className="roles">Role</span> – Senior Copywriter
    </p>
    <p>
      The time my google search history was filled with lipstick
      recommendations. Three influencers created a vintage look with a modern
      twist. Their looks contradict the copy inspired by vintage lipstick ads,
      thus, making a bold, yet simple, statement. We wanted to establish a
      connection with these influencers and demonstrate to our audience that
      each colour has a distinct mood and shouldn't be stereotypically worn.
      During the period of the campaign overall traffic increased by 47% and
      sessions by 41% compared to the previous 10 days’ traffic.
    </p>

    <img src={images.lipstick1} alt="lipstick1" />
    <img src={images.lipstick2} alt="lipstick2" />

    <video controls className="videoModal">
      <source src={videos.lipstickVideo1} type="video/mp4" />
    </video>
    <video controls className="videoModal">
      <source src={videos.lipstickVideo2} type="video/mp4" />
    </video>
  </div>
);

const Work = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);
  const [openModal10, setOpenModal10] = useState(false);
  const [openModal11, setOpenModal11] = useState(false);
  const [openModal12, setOpenModal12] = useState(false);
  const [openModal13, setOpenModal13] = useState(false);
  const [openModal14, setOpenModal14] = useState(false);

  return (
    <>
      <h2 className="work-title">
        My <span>Work</span>
      </h2>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {[
          {
            video: videos.kol,
            title: "KOL Campaigns",
            child: vid13,
            state: openModal13,
            setState: setOpenModal13,
          },
          {
            video: videos.lipstick,
            title: "Lipstick Day Campaign",
            child: vid14,
            state: openModal14,
            setState: setOpenModal14,
          },
          {
            video: videos.video4,
            title: "Kaya Product Videos",
            child: vid4,
            state: openModal4,
            setState: setOpenModal4,
          },
          {
            video: videos.video12,
            title: "Nirav Modi Valentine's Day Campaign",
            child: vid12,
            state: openModal12,
            setState: setOpenModal12,
          },
          {
            video: videos.video7,
            title: "LinkedIn Coffee Table Book",
            child: vid7,
            state: openModal7,
            setState: setOpenModal7,
          },
          {
            video: videos.video1,
            title: "Asian Paints Bumper Ad",
            child: vid1,
            state: openModal1,
            setState: setOpenModal1,
          },
          {
            video: videos.video6,
            title: "LinkedIn Case Studies",
            child: vid6,
            state: openModal6,
            setState: setOpenModal6,
          },
          {
            video: videos.video5,
            title: "Kaya #WishWearFlaunt Campaign",
            child: vid5,
            state: openModal5,
            setState: setOpenModal5,
          },
          {
            video: videos.video9,
            title: "LinkedIn Pharma Ebook",
            child: vid9,
            state: openModal9,
            setState: setOpenModal9,
          },
          {
            video: videos.video3,
            title: "Kaya BlackBook",
            child: vid3,
            state: openModal3,
            setState: setOpenModal3,
          },
          {
            video: videos.video2,
            title: "Castrol Activ Brand Identity",
            child: vid2,
            state: openModal2,
            setState: setOpenModal2,
          },
          {
            video: videos.video11,
            title: "Nature's Basket Blogs",
            child: vid11,
            state: openModal11,
            setState: setOpenModal11,
          },
          {
            video: videos.video10,
            title: "Lodha Topical Content",
            child: vid10,
            state: openModal10,
            setState: setOpenModal10,
          },
        ].map((video, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <video autoPlay loop muted>
                <source src={video.video} type="video/mp4" />
              </video>

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a onClick={() => video.setState(true)}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <Modal
              open={video.state}
              close={() => video.setState(false)}
              children={video.child}
            />

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{video.title}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
