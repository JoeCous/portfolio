import "../projects/projects.scss";

const kaviText = "Develop, deploy, and maintain the Kavi website, which showcases Kavi, a locally produced coffee-flavored Canadian whisky crafted in Ontario.";

export default function Projects() {
    return (
      <>
      <div id="projects">
      <br></br>
        <h2 className="projectTitle">PROJECTS</h2>
      <a href="https://www.kaviwhisky.com" target = "_blank">
        <div className="kavi">
          <h3>Kavi Reserve Whisky</h3>
          <p className="date">2024</p>
          <p className="textBlock">{kaviText}</p>

        <div className="skills">
          <span>React</span>
          <span>Typescript</span>
          <span>Vite</span>
          <span>S3</span>
          <span>Cloudfront</span>
        </div>
        </div>
        </a>
  
        <div className="jackieApp">
          <h3>Jackie.App</h3>
          <p className="date">2024</p>
          <p className="textBlock">{kaviText}</p>

        <div className="skills">
          <span>Angular</span>
          <span>Typescript</span>
          <span>Vercel</span>
        </div>
        </div>
        </div>
      </>
    );
  }