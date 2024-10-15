import "../experience/experience.scss";

const aoText = "Develop and maintain software and features in C#, including applications, RESTful APIs, and user interfaces, to enhance data flow between front-end services and back-end systems.";
const thinkPrintText = "Sole in-house designer providing a variety of design services, including logos, flyers, and business stationery. I was also responsible for managing the daily operations of the business."

export default function Experience() {
  return (
    <>
      <div id="experience">
      <h2 className="experienceTitle">EXPERIENCE</h2>
        <a href="https://www.ao.com" target = "_blank">
        <div className="ao">
          <div className="heading">
        <h3>Software Developer - ao.com</h3>
        <p className="date">2019-2024</p>
        </div>
        <p className="textBlock">{aoText}</p>
        <div className="skills">
          <span>C#</span>
          <span>AWS</span>
          <span>Terraform</span>
          <span>React</span>
          <span>Javascript</span>
        </div>
      </div>
      </a>

      <a href="https://www.thinkprintnw.co.uk" target = "_blank">
      <div className="thinkPrint">
        <h3>Graphic Designer - Think Print</h3>
        <p className="date">2009-2015</p>
        <p className="textBlock">{thinkPrintText}</p>
        <div className="skills">
          <span>Photoshop</span>
          <span>Illustrator</span>
          <span>InDesign</span>
        </div>
      </div>
      </a>
      </div>
    </>
  );
}