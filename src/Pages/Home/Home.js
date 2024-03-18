import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import ObjectiveData from "../../Content/objective";
import ProfileData from "../../Content/ProfileData";
import slides from "../../Content/slide";
import barcode from "../../assets/icons/barcode.png"
import "./home.css";

const ObjectiveCard = ({ title, description }) => {
  return (
    <div className="lab-component">
      <h3>{title}</h3>
      <ul>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Internship = () => {
  return (
    <div className="page-container">
      <h1 className="text-center my-4"> Call for Summer Internships 2024 FACTS-H Lab</h1>
      {/* <h5 className="text-center">Fair and Accountable, Computing solutions that are Transparent with Sociological and Humanistic Insights</h5> */}
      
      
      
      <div className="section">
          <p className="text-center">"FACTS-H' emphasizes a fact-based, ethical approach, integrating key principles of fairness, accountability, and transparency in computing, while also acknowledging the critical role of sociology and humanities.</p>
        </div>
      <div className="left-column">
        <div className="section">
          <h3>Thrust Areas</h3>
          <ul>
            <li>Responsible AI</li>
            <li>Digital Humanities</li>
            <li>Data Privacy and Security</li>
            <li>Explainable Machine Learning</li>
            <li>Cultural Analytics</li>
          </ul>
        </div>
        <div className="section">
          <h3>Faculty</h3>
          <ul>
            <li>Ebin Deni Raj (0482-2202195)</li>
            <li>Dr. Arun Cyril Jose (0482-2202159)</li>
            <li>Dr. Divya Sindhu Lekha (0482-2202161)</li>
            <li>Dr. Gayathri G. R (0482-2202184)</li>
            <li>Dr. Jayakrushna Sahoo (0482-2202190)</li>
            <li>Josit Mariya (0482-2202203)</li>
          </ul>
        </div>
        <div className="section">
          <h3>Benefits</h3>
          <ul>
            <li>Best internships (evaluated on outcome basis) will be provided scholarships</li>
            <li>Opportunity to be part of International projects of FACTS-H Lab</li>
            <li>Access to use the High-end computing facility in FACTS-H LAB.</li>
            <li>You will get the certificate for the internship</li>
          </ul>
        </div>
      </div>
      <div className="right-column">
        <div className="section">
          <h3>Eligibility Criteria</h3>
          <ul>
            <li>Undergraduate: B.Tech./B.E./B.Sc./BCA/B.A</li>
            <li>Postgraduate: M.Tech./ME/MSc./MCA/MA</li>
          </ul>
        </div>
        <div className="section">
          <h3>Internship Details</h3>
          <ul>
            <li>Mode of Internship: Hybrid</li>
            <li>Duration: 8 to 12 weeks</li>
            <li>Application Deadline: 5 April 2024</li>
            <li>Internship Commences on: 22 April 2024</li>
            <li>Internship fee: 5000/-</li>
            <li>Payment link: <a href="https://www.onlinesbi.sbi/sbicollect/">Pay&nbsp;Now</a></li>
            <li>(Educational Institute &#8594; III KOTTAYAM &#8594; Summer Internship 2024 FACTS-H Lab )</li>
          </ul>
        </div>
        <div className="section">
          <h3>Registration link</h3>
          <div className="brcode">
          <img src={barcode} alt="img not available"/> 
          <a href="https://forms.gle/fwVSasnN84259bZq5">Apply&nbsp;Now</a>
          </div>
        </div>
        <div className="section">
          <h3>Contact</h3>
          <p>Reach us: <a href="mailto:factsh@iiiitkottayam.ac.in">factsh@iiiitkottayam.ac.in</a></p>
        </div>
      </div>
    </div>
  );
};

function Home() {
  console.log(ProfileData);
  return (
    <div>
      <ImageSlider slides={slides} />
      <div className="text-center mx-2 p-10">
        <Heading content="Welcome to the FACTS-H Lab" />
      </div>
      <h4 className="text-center mx-5 mb-5">
        We are dedicated to Advancing Responsible, Transparent, and Secure
        Computing. With a focus on fairness, accountability, and transparency,
        our lab integrates sociological and humanistic insights into computing
        solutions. Let's delve into how our interdisciplinary team and research
        areas are shaping the future of technology.
      </h4>
      <Internship />
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
      <Card ProfileData={ProfileData.Faculty} type="1" />
    </div>
  );
}

export default Home;
