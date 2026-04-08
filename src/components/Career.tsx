import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Frontend Engineer</h4>
                <h5>Accenture</h5>
              </div>
              <h3>2021-NOW</h3>
            </div>
            <p>
              Spearheading frontend development for enterprise suites. Orchestrated a 40% performance gain through state optimization, established scalable UI component libraries, and actively mentored rising engineering talent.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>MJB Technologies</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Engineered highly scalable client-facing applications, collaborating directly with key stakeholders to translate intricate business requirements into sophisticated, robust web solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Intellect Design Arena</h5>
              </div>
              <h3>2018-2019</h3>
            </div>
            <p>
              Developed mission-critical software modules and established stringent testing protocols, significantly elevating application architecture stability and deployment reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
