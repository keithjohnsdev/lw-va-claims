import { Container3 } from "./Containers";
import { useState } from "react";

const VitalsRow = (props) => {
  const metric = props.metric;
  const index = props.index;
  const [highlightMetric, setHighlightMetric] = useState(false);

  return (
    <div className="patient-data-row" onClick={() => setHighlightMetric(current => !current)}>
      <Container3>
        <div className="row-content">
          <div className="metric-title">
            <p className={highlightMetric ? "red title" : "title"}>{metric.title}</p>
            <p className="subtitle">{`Last Reading: ${metric.lastReading}`}</p>
          </div>
          <div className="metric-value vitals">
            <p className={highlightMetric ? "red" : ""}>{metric.value}</p>
          </div>
        </div>
      </Container3>
    </div>
  );
};

export default VitalsRow;
