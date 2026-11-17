import { useState } from "react";
import { inspectionZones } from "../data/checkpoints";
import { calculateRisk } from "../utils/calculateRisk";

function Compare() {
  const [savedInspections] = useState(() => {
    const savedData = localStorage.getItem(
      "carscope-saved-inspections"
    );

    return savedData ? JSON.parse(savedData) : [];
  });

  const [firstId, setFirstId] = useState("");
  const [secondId, setSecondId] = useState("");

  const firstInspection = savedInspections.find(
    (inspection) =>
      String(inspection.id) === String(firstId)
  );

  const secondInspection = savedInspections.find(
    (inspection) =>
      String(inspection.id) === String(secondId)
  );

    const allCheckpoints = inspectionZones.flatMap(
    (zone) =>
        zone.checkpoints.map((checkpoint) => ({
        ...checkpoint,
        zone: zone.id,
        }))
    );

    const firstRisk = firstInspection
    ? calculateRisk(
        firstInspection.inspectionData.findings,
        allCheckpoints
        )
    : null;

    const secondRisk = secondInspection
    ? calculateRisk(
        secondInspection.inspectionData.findings,
        allCheckpoints
        )
    : null;

  return (
    <main className="compare-page">
      <div className="compare-container">
        <p className="hero-label">COMPARE INSPECTIONS</p>

        <h1>Compare your options.</h1>

        <p className="page-description">
          Compare two saved vehicle inspections side by
          side before making a decision.
        </p>

        {savedInspections.length < 2 ? (
          <div className="empty-state">
            <h2>Not enough inspections yet.</h2>

            <p>
              Save at least two vehicle inspections to
              compare them.
            </p>

            <button
              className="primary-button"
              onClick={() => {
                window.location.href =
                  "/new-inspection";
              }}
            >
              Start New Inspection
            </button>
          </div>
        ) : (
          <>
            <div className="compare-selectors">
              <div className="compare-selector">
                <label htmlFor="first-vehicle">
                  First Vehicle
                </label>

                <select
                  id="first-vehicle"
                  value={firstId}
                  onChange={(event) =>
                    setFirstId(event.target.value)
                  }
                >
                  <option value="">
                    Select a vehicle
                  </option>

                  {savedInspections.map(
                    (inspection) => (
                      <option
                        key={inspection.id}
                        value={inspection.id}
                      >
                        {inspection.vehicle.year}{" "}
                        {inspection.vehicle.make}{" "}
                        {inspection.vehicle.model}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="compare-selector">
                <label htmlFor="second-vehicle">
                  Second Vehicle
                </label>

                <select
                  id="second-vehicle"
                  value={secondId}
                  onChange={(event) =>
                    setSecondId(event.target.value)
                  }
                >
                  <option value="">
                    Select a vehicle
                  </option>

                  {savedInspections.map(
                    (inspection) => (
                      <option
                        key={inspection.id}
                        value={inspection.id}
                      >
                        {inspection.vehicle.year}{" "}
                        {inspection.vehicle.make}{" "}
                        {inspection.vehicle.model}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            {firstInspection &&
            secondInspection && (
                <div className="comparison-grid">
                <div className="comparison-card">
                    <p className="saved-label">
                    VEHICLE 1
                    </p>

                    <h2>
                    {firstInspection.vehicle.year}{" "}
                    {firstInspection.vehicle.make}{" "}
                    {firstInspection.vehicle.model}
                    </h2>

                    <div className="comparison-details">
                    <p>
                        <strong>Price:</strong> ₱
                        {Number(
                        firstInspection.vehicle.price
                        ).toLocaleString()}
                    </p>

                    <p>
                        <strong>Mileage:</strong>{" "}
                        {Number(
                        firstInspection.vehicle.mileage
                        ).toLocaleString()}{" "}
                        km
                    </p>

                    <p>
                        <strong>Good:</strong>{" "}
                        {
                        Object.values(
                            firstInspection.inspectionData
                            .findings
                        ).filter(
                            (finding) => finding === "good"
                        ).length
                        }
                    </p>

                    <p>
                        <strong>Needs Attention:</strong>{" "}
                        {
                        Object.values(
                            firstInspection.inspectionData
                            .findings
                        ).filter(
                            (finding) =>
                            finding === "attention"
                        ).length
                        }
                    </p>

                    <p>
                        <strong>Red Flags:</strong>{" "}
                        {
                        Object.values(
                            firstInspection.inspectionData
                            .findings
                        ).filter(
                            (finding) =>
                            finding === "red-flag"
                        ).length
                        }
                    </p>
                    <p>
                    <strong>Attention Score:</strong>{" "}
                    {firstRisk.score}
                    </p>

                    <p>
                    <strong>Assessment:</strong>{" "}
                    {firstRisk.level}
                    </p>
                    </div>
                </div>

                <div className="comparison-card">
                    <p className="saved-label">
                    VEHICLE 2
                    </p>

                    <h2>
                    {secondInspection.vehicle.year}{" "}
                    {secondInspection.vehicle.make}{" "}
                    {secondInspection.vehicle.model}
                    </h2>

                    <div className="comparison-details">
                    <p>
                        <strong>Price:</strong> ₱
                        {Number(
                        secondInspection.vehicle.price
                        ).toLocaleString()}
                    </p>

                    <p>
                        <strong>Mileage:</strong>{" "}
                        {Number(
                        secondInspection.vehicle.mileage
                        ).toLocaleString()}{" "}
                        km
                    </p>

                    <p>
                        <strong>Good:</strong>{" "}
                        {
                        Object.values(
                            secondInspection.inspectionData
                            .findings
                        ).filter(
                            (finding) => finding === "good"
                        ).length
                        }
                    </p>

                    <p>
                        <strong>Needs Attention:</strong>{" "}
                        {
                        Object.values(
                            secondInspection.inspectionData
                            .findings
                        ).filter(
                            (finding) =>
                            finding === "attention"
                        ).length
                        }
                    </p>

                    <p>
                        <strong>Red Flags:</strong>{" "}
                        {
                        Object.values(
                            secondInspection.inspectionData
                            .findings
                        ).filter(
                            (finding) =>
                            finding === "red-flag"
                        ).length
                        }
                    </p>
                    <p>
                    <strong>Attention Score:</strong>{" "}
                    {secondRisk.score}
                    </p>

                    <p>
                    <strong>Assessment:</strong>{" "}
                    {secondRisk.level}
                    </p>
                    </div>
                </div>
                <div className="comparison-verdict">
                    <p className="hero-label">COMPARISON SUMMARY</p>

                    {firstRisk.score < secondRisk.score ? (
                        <p>
                        <strong>
                            {firstInspection.vehicle.year}{" "}
                            {firstInspection.vehicle.make}{" "}
                            {firstInspection.vehicle.model}
                        </strong>{" "}
                        currently has the lower Attention Score.
                        </p>
                    ) : firstRisk.score > secondRisk.score ? (
                        <p>
                        <strong>
                            {secondInspection.vehicle.year}{" "}
                            {secondInspection.vehicle.make}{" "}
                            {secondInspection.vehicle.model}
                        </strong>{" "}
                        currently has the lower Attention Score.
                        </p>
                    ) : (
                        <p>
                        Both vehicles currently have the same
                        Attention Score.
                        </p>
                    )}

                    <p className="comparison-note">
                        A lower Attention Score means fewer concerning
                        findings were recorded during the inspection.
                        This comparison is only an inspection aid and
                        should not replace a qualified mechanic's
                        assessment.
                    </p>
                    </div>
                </div>
                
            )}
          </>
          
        )}
        
      </div>
    </main>
  );
}

export default Compare;