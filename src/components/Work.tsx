import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const projects = [
  { name: "Prototype Factory & Architecture", category: "Architecture", tools: "React.js, TypeScript, Tailwind", image: "/images/prototype_architecture.png" },
  { name: "MMS Orchestration", category: "Orchestration", tools: "React.js, Redux Toolkit", image: "/images/mms_engineering.png" },
  { name: "Banking UI (Security Bank)", category: "Finance", tools: "React.js, React Query, Performance", image: "/images/banking_fintech.png" },
  { name: "Multilingual UI (Standard Chartered)", category: "Banking", tools: "React.js, i18n, TypeScript", image: "/images/multilingual_banking.png" },
  { name: "Insurance Platform (NY Life)", category: "Insurance", tools: "React, Context API, Jest", image: "/images/insurance_platform.png" },
];

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-wrapper" style={{ width: "100%", position: "relative" }}>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-flex">
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>

                    <div>
                      <h4>{project.name}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>
                <WorkImage image={project.image} alt={project.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
