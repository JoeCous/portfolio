import "../about/about.scss";
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import instagram from "../../assets/instagram.svg"
import resume from "../../assets/Resume.pdf"

import Experience from "../experience/experience.tsx"
import Projects from "../projects/projects.tsx"

const para1 ="I have a longstanding passion for technology that initially guided me to a career as a Graphic Designer, where I utilized the Adobe Creative Suite. In 2019, I began exploring coding and the fundamentals of web development, which inspired me to transition my career toward software development. I discovered a strong interest in coding that has since fueled my professional journey. I completed a two-year diploma with the British Computer Society while employed at one of the largest electrical retailers in the UK."
const para2 = "As a Full Stack Developer, I have gained extensive experience in building backend services, APIs, and user interfaces. Utilizing Infrastructure as Code (IaC) tools, such as Terraform, to effectively deploy resources within AWS.";
const para3 = "When I am not working at my computer, I enjoy running, a hobby I took up in 2018. Since then, I have completed several marathons, including a 100K ultramarathon last year. While I enjoy running to keep fit, my motivation for the ultramarathon was to challenge my limits, given I had only recently taken up running. Additionally, I enjoy cycling, reading, and listening to podcasts."

export default function About() {
  return (
    <>
      <div className="container">
        <div className="leftDiv">
          <h1>Joe Coucill</h1>
          <h3>Full Stack Software Developer</h3>
          <br></br>
          <div className="navItems">
            <a href="#about">ABOUT</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#projects">PROJECTS</a>
            <a href={resume} target = "_blank">RESUME</a>
            </div>

            <div className="logoContainer">
            <a href="https://github.com/JoeCous" target="_blank"><img src={github}></img></a>
            <a href="https://www.linkedin.com/in/joe-coucill-036225187/" target="_blank"><img src={linkedin}></img></a>
            <a href="https://www.instagram.com/joecous/" target="_blank"><img src={instagram}></img></a>
            </div>
          
        </div>

        <div className="rightDiv">
        <div id="about"> 
        <h2 className="aboutTitle">ABOUT</h2>
          <p className="textBlock">{para1}</p>
          <p className="textBlock">{para2}</p>
          <p className="textBlock">{para3}</p>
        </div>
        <Experience/> 
        <Projects/>
        </div>
      </div>
    </>
  );
}
