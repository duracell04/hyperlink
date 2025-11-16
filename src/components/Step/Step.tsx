import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

interface StepItem {
  id: number;
  img: string;
  title: string;
  text: string;
}

interface StepProps {
  data: StepItem[];
}

function Step({ data }: StepProps) {
  return (
    <section className="tf-section modern-process">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <div className="process-copy">
              <p className="eyebrow">How Hyperlink works</p>
              <h2>From intake to hand-off in three deliberate beats.</h2>
              <p>
                We pair a few lightweight questions with a curated playbook.
                Within minutes you have a stack recommendation, change
                narrative, and stakeholder-ready pricing cheat sheet.
              </p>
              <ul>
                <li>Context-first intake powered by humans + AI.</li>
                <li>Toolbox dossiers with messaging & cost clarity.</li>
                <li>Launch guardrails so nothing slips through legal or IT.</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="process-timeline">
              {data.map((item, index) => (
                <article key={item.id} className="process-step">
                  <div className="badge">{`0${index + 1}`}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                  <img src={item.img} alt="" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Step.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Step;
