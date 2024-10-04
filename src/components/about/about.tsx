import "../about/about.scss";
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import instagram from "../../assets/instagram.svg"

const para1 = "I've always had a passion for technology and I have previously worked as a Graphic Designer. Fast-forward to 2019 and I made the decision to make a career change. I quickly gained an interest in writing code and I haven't looked back since. I completed a two year Diploma with the BCS while working for one of the largest electrical retailers in the UK.";
const para2 = "As a full stack developer I've had the opportunity to build backend services, APIs and user interfaces. Leveraging IaC tools like Terraform to deploy resources into AWS.";
const para3 = "When I'm not at my computer I can be found running, a hobby I developed in 2018. Since then I've completed multiple Marathons and last year a 100k Ultra Marathon. My other hobbies include cycling, reading or listening to podcast.";
const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export default function About() {
  return (
    <>
      <div className="container">
        <div className="leftDiv">
          <h2>Joe Coucill</h2>
          <h4>Full Stack Software Developer</h4>
          <br></br>
          <div className="navItems">
            <a href="#About">ABOUT</a>
            <a href="#Experience">EXPERIENCE</a>
            <a href="#Projects">PROJECTS</a>
            <a href="Resume">DOWNLOAD RESUME</a>

            <div className="logoContainer">
            <img src={github}></img>
            <img src={linkedin}></img>
            <img src={instagram}></img>
            </div>
          </div>
        </div>

        <div className="rightDiv">
        <h2>About Me</h2>
        <div id="About">  
          <p className="aboutTxt">{para1}</p>
          <p className="aboutTxt">{para2}</p>
          <p className="aboutTxt">{para3}</p>
        </div>

        <hr></hr>
        
        <div id="Experience">
          <h2>Experience</h2>
          <h4>ao.com</h4>
          <p className="aboutTxt">{text}</p>
          <p className="aboutTxt">{text}</p>
          <p className="aboutTxt">{text}</p>
          <br></br>
        </div>

        <hr></hr>

        <div id="Projects">
          <h2>Projects</h2>
          <h4>Kavi Reserve Whisky</h4>
          <p className="aboutTxt">{text}</p>
          <p className="aboutTxt">{text}</p>
          <p className="aboutTxt">{text}</p>
          <br></br>
        </div>
        </div>
      </div>
    </>
  );
}
