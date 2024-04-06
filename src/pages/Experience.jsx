import { School } from "@mui/icons-material";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            IES Galileo Galilei / Wilmington Academy,
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            Alcorcon, Madrid / Wilmington, Kent
          </h4>
          <p>Key Stage 3 and 8 GCSEs</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018"
          iconStyle={{ background: "#6666ff", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Local English Teacher
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Alcorcon, Madrid
          </h4>
          <p>
            Helped Year 3 and Year 4 students prepare for their English Exams{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Kent, Canterbury, Kent
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree with Honours
          </h4>

          <p>Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#6666ff", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Packaging Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Dartford, Kent</h4>
          <p>
            Packaged and prepare delivery orders, consistently achieving daily
            packaging targets.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023-2024"
          iconStyle={{ background: "#6666ff", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Runner/Busser</h3>
          <h4 className="vertical-timeline-element-subtitle">Dartford, Kent</h4>
          <p>
            Collaborated with staff and servers to streamline order delivery,
            improving overall service efficiency.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
