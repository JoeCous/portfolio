import "../experience/experience.scss";

const aoText = "Develop and maintain software and features in C#, including applications, RESTful APIs, and user interfaces, to enhance data flow between front-end services and back-end systems.";
const thinkPrintText = "Sole in-house designer providing a variety of design services, including logos, flyers, and business stationery. I was also responsible for managing the daily operations of the business."

export default function Experience() {
  return (
    <>
      <div id="experience">
        <h2>EXPERIENCE</h2>
        <hr></hr>
        <br></br>
        <a href="https://www.ao.com" target = "_blank">
        <div className="ao">
        <h3>Software Developer - ao.com</h3>
        <p className="date">2019-2024</p>
        <p className="aoText">{aoText}</p>
        <div className="skills">
          <span>C#</span>
          <span>.NET</span>
          <span>AWS</span>
          <span>Terraform</span>
          <span>Docker</span>
          <span>React</span>
          <span>Javascript</span>
        </div>
      </div>
      </a>

      <a href="https://www.thinkprintnw.co.uk" target = "_blank">
      <div className="thinkPrint">
        <h3>Graphic Designer - Think Print</h3>
        <p className="date">2009-2015</p>
        <p className="thinkPrintText">{thinkPrintText}</p>
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