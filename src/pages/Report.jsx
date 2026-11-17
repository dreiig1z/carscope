import { useState } from "react";
import { inspectionZones } from "../data/checkpoints";
import useInspectionStorage from "../hooks/useInspectionStorage";
import { calculateRisk } from "../utils/calculateRisk";
import RiskMeter from "../components/RiskMeter";

function Report() {
  const [inspectionData] = useInspectionStorage();

  const [vehicle] = useState(() => {
    const savedVehicle = localStorage.getItem("carscope-vehicle");

    return savedVehicle ? JSON.parse(savedVehicle) : null;
  });

  const { completed, findings, notes, photos } = inspectionData;

  const allCheckpoints = inspectionZones.flatMap(
    (zone) =>
      zone.checkpoints.map((checkpoint) => ({
        ...checkpoint,
        zone: zone.id,
      }))
  );

  const risk = calculateRisk(findings, allCheckpoints);

  const attentionFindings = allCheckpoints.filter(
    (checkpoint) =>
      findings[checkpoint.id] === "attention"
  );

  const redFlags = allCheckpoints.filter(
    (checkpoint) =>
      findings[checkpoint.id] === "red-flag"
  );

  const totalCheckpoints = allCheckpoints.length;

  const progress = Math.round(
    (completed.length / totalCheckpoints) * 100
  );

    const continueZone = (zoneIndex) => {
    localStorage.setItem(
      "carscope-return-zone",
      zoneIndex
    );

    localStorage.setItem(
      "carscope-return-from-report",
      "true"
    );

    window.location.href = "/inspection";
  };
  
  return (
    <main className="report-page">
      <div className="report-container">

        <p className="hero-label">INSPECTION REPORT</p>

        <h1>Vehicle Inspection Report</h1>

        <p className="page-description">
          A summary of the observations recorded during the
          CarScope inspection.
        </p>

        {vehicle && (
          <section className="report-section vehicle-report">
            <h2>Vehicle Information</h2>

            <div className="vehicle-report-grid">
              <div>
                <span>Vehicle</span>
                <strong>
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </strong>
              </div>

              <div>
                <span>Asking Price</span>
                <strong>
                  ₱{Number(vehicle.price).toLocaleString()}
                </strong>
              </div>

              <div>
                <span>Mileage</span>
                <strong>
                  {Number(vehicle.mileage).toLocaleString()} km
                </strong>
              </div>

              <div>
                <span>Seller</span>
                <strong>
                  {vehicle.seller || "Not provided"}
                </strong>
              </div>
            </div>
          </section>
        )}

        <section className="report-section">
          <h2>Inspection Progress</h2>

          <div className="report-progress">
            <div className="report-progress-header">
              <span>Completed Checkpoints</span>
              <strong>{progress}%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              ></div>
            </div>

            <p>
              {completed.length} of {totalCheckpoints}{" "}
              checkpoints completed.
            </p>
          </div>
        </section>

        <RiskMeter risk={risk} />

        <section className="report-section">
          <h2>Findings Summary</h2>

          <div className="finding-summary-grid">
            <div className="summary-card good-summary">
              <strong>{completed.length}</strong>
              <span>Checked</span>
            </div>

            <div className="summary-card attention-summary">
              <strong>{attentionFindings.length}</strong>
              <span>Needs Attention</span>
            </div>

            <div className="summary-card red-summary">
              <strong>{redFlags.length}</strong>
              <span>Immediate Attention</span>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h2>Important Findings</h2>

          {redFlags.length === 0 &&
          attentionFindings.length === 0 ? (
            <p className="empty-message">
              No attention or immediate-attention findings were recorded.
            </p>
          ) : (
            <div className="report-findings">

              {redFlags.map((checkpoint) => (
                <div
                  className="report-finding red-finding"
                  key={checkpoint.id}
                >
                  <strong>Immediate Attention</strong>

                  <h3>{checkpoint.title}</h3>

                  {notes[checkpoint.id] && (
                    <p>{notes[checkpoint.id]}</p>
                  )}
                </div>
              ))}

              {attentionFindings.map((checkpoint) => (
                <div
                  className="report-finding attention-finding"
                  key={checkpoint.id}
                >
                  <strong>Needs Attention</strong>

                  <h3>{checkpoint.title}</h3>

                  {notes[checkpoint.id] && (
                    <p>{notes[checkpoint.id]}</p>
                  )}
                </div>
              ))}

            </div>
          )}
        </section>

        <section className="report-section">
          <h2>Zone Results</h2>

          <div className="zone-results">
            {inspectionZones.map((zone, zoneIndex) => {
              const zoneCheckpoints = zone.checkpoints;

              const completedCount = zoneCheckpoints.filter(
                (checkpoint) =>
                  completed.includes(checkpoint.id)
              ).length;

              const zoneRedFlags = zoneCheckpoints.filter(
                (checkpoint) =>
                  findings[checkpoint.id] === "red-flag"
              ).length;

              const zoneAttention = zoneCheckpoints.filter(
                (checkpoint) =>
                  findings[checkpoint.id] === "attention"
              ).length;

              const zoneComplete =
                completedCount === zoneCheckpoints.length;

              return (
                <div
                  className={`zone-result-card ${
                    zoneComplete
                      ? "zone-result-complete"
                      : "zone-result-incomplete"
                  }`}
                  key={zone.id}
                >
                  <div className="zone-result-header">
                    <div>
                      <h3>{zone.name}</h3>

                      <p>
                        {completedCount}/{zoneCheckpoints.length}{" "}
                        checkpoints completed
                      </p>
                    </div>

                    <span
                      className={`zone-result-status ${
                        zoneComplete
                          ? "zone-complete"
                          : "zone-incomplete"
                      }`}
                    >
                      {zoneComplete
                        ? "Complete"
                        : "Incomplete"}
                    </span>
                  </div>

                  <div className="zone-result-findings">
                    <span className="zone-good">
                      Good:{" "}
                      {
                        zoneCheckpoints.filter(
                          (checkpoint) =>
                            findings[checkpoint.id] === "good"
                        ).length
                      }
                    </span>

                    <span className="zone-attention">
                      Attention: {zoneAttention}
                    </span>

                    <span className="zone-red">
                      Immediate Attention: {zoneRedFlags}
                    </span>
                  </div>

                  {!zoneComplete && (
                    <button
                      className="zone-continue-button"
                      onClick={() =>
                        continueZone(zoneIndex)
                      }
                    >
                      Complete This Zone →
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="report-section">
          <h2>Photo Evidence</h2>

          {Object.keys(photos).length === 0 ? (
            <p className="empty-message">
              No photo evidence was added.
            </p>
          ) : (
            <div className="report-photo-grid">
              {allCheckpoints.map((checkpoint) => {
                if (!photos[checkpoint.id]) {
                  return null;
                }

                return (
                  <div
                    className="report-photo"
                    key={checkpoint.id}
                  >
                    <img
                      src={photos[checkpoint.id]}
                      alt={checkpoint.title}
                    />

                    <p>{checkpoint.title}</p>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section className="report-disclaimer">
          <strong>Important:</strong>

          <p>
            CarScope is an inspection aid and does not replace
            a qualified mechanic, official vehicle verification,
            or professional legal advice.
          </p>
        </section>

        <button
          className="primary-button"
          onClick={() => window.print()}
        >
          Print / Save Report
        </button>

      </div>
    </main>
  );
}

export default Report;