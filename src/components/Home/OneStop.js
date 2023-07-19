import React from "react";
import { Link } from "react-router-dom";


import protection from "../../assets/images/amazing-features/Data-protection.gif";
import service from "../../assets/images/amazing-features/Inclusive-Services.gif";
import payment from "../../assets/images/amazing-features/easy-payment.gif";
import mining from "../../assets/images/amazing-features/mining.gif";
import expertTeam from "../../assets/images/amazing-features/our-tean.gif";


//Images
import pic1 from "./../../assets/images/about/pic1.jpg";
import support1 from "./../../assets/images/icons/support1.png";
// import { Parallax } from 'react-scroll-parallax';


const cardData = [
  {
    image: protection,
    title: "Data Protection",
    description:
      "Maximum security and data protection Is in our DNA, it's our first priority to ensure that your Information and data is fully encrypted with a 6 Layer security.",
  },
  {
    image: service,
    title: "Inclusive Services",
    description:
      "We offer all-inclusive services that foreign companies need in Russia: vcounting, tax and legal support as well as IT support",
  },
  {
    image: payment,
    title: "Easy Payment Method",
    description:
      "We have and accepts the most widely used payment system therefore making it easy for you to get started.",
  },
  {
    image: mining,
    title: "Daily Mining Output",
    description:
      "Once your mining contract Is activated, your daily earnings are distributed to your preferred mining account after 24hours.",
  },
  {
    image: expertTeam,
    title: "Our Expert Team",
    description:
      "A professional team of traders and financial experts guarantees a high return on investment and constant passive income.",
  },
  {
    image: expertTeam,
    title: "Easy Withdraw",
    description:
      "Request for a payout and receive your earnings on personal wallet any time, any day.No hassle",
  },
];

function OneStop() {
  return (
    <>
      {cardData.map((item, ind) => (
        <div className="col-xl-4 col-md-6 flex-row-reverse m-b60" key={ind}>
          {/* <Parallax speed={ind*20}> */}
          <div className="icon-bx-wraper style-3 text-center" id="hoverd-color">
            <div className="icon-media">
              {/* <p>{item.image}</p> */}
              <img style={{width: "80px"}} src={item.image} alt="" />
            </div>
            <div className="icon-content">
              <h4 className="title">{item.title}</h4>
              <p className="m-b0">{item.description}</p>
            </div>
          </div>
          {/* </Parallax> */}
        </div>
      ))}
      {/* <div className="col-xl-4 col-md-6 m-b60">
        <div
          className="icon-bx-wraper style-4"
          style={{ backgroundImage: "url(" + pic1 + ")" }}
        >
          <div className="inner-content">
            <div className="icon-media m-b30">
              <img src={support1} alt="" />
            </div>
            <div className="icon-content">
              <Link to={"/contact-us"} className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default OneStop;
