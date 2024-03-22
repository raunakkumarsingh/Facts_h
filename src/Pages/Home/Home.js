import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import ObjectiveData from "../../Content/objective";
import ProfileData from "../../Content/ProfileData";
import slides from "../../Content/slide";
import internpdf from "../../assets/images/Internship.pdf";
import "./home.css";

const ObjectiveCard = ({ title, description }) => {
  return (
    <div className="obj-component">
      <h3>{title}</h3>
      <ul>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

function Home() {
  console.log(ProfileData);
  return (
    <div >
      <div className="slider-container">
        <ImageSlider slides={slides} />
      </div>
      <a href={internpdf} target="_blank" rel="noreferrer">
      <marquee className="marq-css">Click here to apply for Summer Internships 2024 at FACTS-H Lab. | Mode of Internship: Hybrid. | Duration: 8 to 12 weeks. | Application Deadline: April 5, 2024. | Internship Commences on: April 22, 2024. | For Undergraduates: B.Tech./B.E./B.Sc./BCA/B.A.  | For Postgraduates: M.Tech./M.E./M.Sc./MCA/M.A. |</marquee> 
                    </a>
      <div className="text-center mx-2 p-10">
        <Heading content="Welcome to the FACTS-H Lab" />
      </div>
      <h4 className="text-center mx-5 mb-5 tx-color">
        We are dedicated to Advancing Responsible, Transparent, and Secure
        Computing. With a focus on fairness, accountability, and transparency,
        our lab integrates sociological and humanistic insights into computing
        solutions. Let's delve into how our interdisciplinary team and research
        areas are shaping the future of technology.
      </h4>
      <div className="container">
        <div className="lab-info">
          {ObjectiveData.map((item, index) => (
            <ObjectiveCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <Heading content="Faculty Members" />
      <div className="container" > 
      <Card ProfileData={ProfileData.Faculty} type="1" />
      </div>
    </div>
  );
}

export default Home;
