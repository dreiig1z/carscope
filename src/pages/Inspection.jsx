import { useState } from "react";
import { inspectionZones } from "../data/checkpoints";
import CheckpointCard from "../components/CheckpointCard";
import useInspectionStorage from "../hooks/useInspectionStorage";
import RiskMeter from "../components/RiskMeter";
import { calculateRisk } from "../utils/calculateRisk";

function Inspection() {
  const inspectionMode =
    localStorage.getItem("carscope-mode") || "beginner";

    const [returnFromReport] = useState(() => {
      return (
        localStorage.getItem("carscope-return-from-report") ===
        "true"
      );
    });

  const [currentZoneIndex, setCurrentZoneIndex] = useState(() => {
    const savedZone = localStorage.getItem("carscope-return-zone");

    if (savedZone !== null) {
      localStorage.removeItem("carscope-return-zone");
      return Number(savedZone);
    }

    return 0;
  });

  const [inspectionData, setInspectionData] =
    useInspectionStorage();

  const [vehicle] = useState(() => {
    const savedVehicle = localStorage.getItem("carscope-vehicle");

    return savedVehicle ? JSON.parse(savedVehicle) : null;
  });

  const completed = inspectionData.completed;
  const findings = inspectionData.findings;
  const notes = inspectionData.notes;
  const photos = inspectionData.photos;

  const goodCount = Object.values(findings).filter(
    (finding) => finding === "good"
  ).length;

  const attentionCount = Object.values(findings).filter(
    (finding) => finding === "attention"
  ).length;

  const redFlagCount = Object.values(findings).filter(
    (finding) => finding === "red-flag"
  ).length;

  const allCheckpoints = inspectionZones.flatMap(
    (zone) =>
      zone.checkpoints.map((checkpoint) => ({
        ...checkpoint,
        zone: zone.id,
      }))
  );

  const risk = calculateRisk(findings, allCheckpoints);

  const currentZone = inspectionZones[currentZoneIndex];
  const checkpoints = currentZone.checkpoints;

  const toggleCheckpoint = (id) => {
    setInspectionData((previous) => {
      if (previous.completed.includes(id)) {
        return {
          ...previous,
          completed: previous.completed.filter(
            (checkpointId) => checkpointId !== id
          ),
        };
      }

      return {
        ...previous,
        completed: [...previous.completed, id],
      };
    });
  };

  const handleFindingChange = (id, finding) => {
    setInspectionData((previous) => ({
      ...previous,
      findings: {
        ...previous.findings,
        [id]: finding,
      },
    }));
  };

  const handleNoteChange = (id, note) => {
    setInspectionData((previous) => ({
      ...previous,
      notes: {
        ...previous.notes,
        [id]: note,
      },
    }));
  };

  const handlePhotoChange = (id, event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setInspectionData((previous) => ({
        ...previous,
        photos: {
          ...previous.photos,
          [id]: reader.result,
        },
      }));
    };

    reader.readAsDataURL(file);
  };

  const completedInCurrentZone = completed.filter((id) =>
    checkpoints.some((checkpoint) => checkpoint.id === id)
  );

  const progress = Math.round(
    (completedInCurrentZone.length / checkpoints.length) * 100
  );

  const totalCheckpoints = inspectionZones.reduce(
    (total, zone) => total + zone.checkpoints.length,
    0
  );

  const overallProgress = Math.round(
    (completed.length / totalCheckpoints) * 100
  );

  const completedZones = inspectionZones.filter((zone) =>
    zone.checkpoints.every((checkpoint) =>
      completed.includes(checkpoint.id)
    )
  ).length;

  const goToNextZone = () => {
    if (currentZoneIndex < inspectionZones.length - 1) {
      setCurrentZoneIndex(currentZoneIndex + 1);
    }
  };

  const goToPreviousZone = () => {
    if (currentZoneIndex > 0) {
      setCurrentZoneIndex(currentZoneIndex - 1);
    }
  };

  return (
    <main className="inspection-page">
      <div className="inspection-container">
        <p className="hero-label">INSPECTION</p>

        {vehicle && (
          <div className="vehicle-summary">
            <h2>
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h2>

            <p>
              Asking Price: ₱
              {Number(vehicle.price).toLocaleString()}
              {" • "}
              Mileage:{" "}
              {Number(vehicle.mileage).toLocaleString()} km
            </p>

            {vehicle.seller && (
              <p>Seller: {vehicle.seller}</p>
            )}
          </div>
        )}
        

        <div className="zone-navigation">
          {inspectionZones.map((zone, index) => {
            const zoneCompleted = zone.checkpoints.every(
              (checkpoint) =>
                completed.includes(checkpoint.id)
            );

            return (
              <button
                key={zone.id}
                className={`zone-button ${
                  index === currentZoneIndex ? "active" : ""
                } ${
                  zoneCompleted ? "completed-zone" : ""
                }`}
                onClick={() =>
                  setCurrentZoneIndex(index)
                }
              >
                {zoneCompleted ? "✓ " : ""}
                {index + 1}. {zone.name}
              </button>
            );
          })}
        </div>

        <div className="overall-progress">
          <div className="overall-progress-header">
            <span>Overall Inspection</span>

            <span>
              {completedZones}/{inspectionZones.length} zones
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>

          <p className="overall-progress-status">
            {completedZones === inspectionZones.length
              ? "All inspection zones completed."
              : `${completedZones} of ${inspectionZones.length} zones completed.`}
          </p>
        </div>

        <div className="inspection-header">
          <div>
            <p className="hero-label">
              ZONE {currentZoneIndex + 1} OF{" "}
              {inspectionZones.length}
            </p>

            <h1>{currentZone.name}</h1>

            <p className="page-description">
              {currentZone.description}
            </p>
          </div>

          <div className="progress-box">
            <span>{progress}%</span>
            <small>Complete</small>
          </div>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="checkpoint-list">
          {checkpoints.map((checkpoint) => (
            <CheckpointCard
              key={checkpoint.id}
              checkpoint={checkpoint}
              completed={completed.includes(
                checkpoint.id
              )}
              finding={findings[checkpoint.id]}
              note={notes[checkpoint.id]}
              photo={photos[checkpoint.id]}
              onToggle={toggleCheckpoint}
              onFindingChange={handleFindingChange}
              onNoteChange={handleNoteChange}
              onPhotoChange={handlePhotoChange}
              inspectionMode={inspectionMode}
            />
          ))}
        </div>

        <div className="findings-summary">
          <div className="finding-summary-item good-item">
            <strong>{goodCount}</strong>
            <span>Good</span>
          </div>

          <div className="finding-summary-item attention-item">
            <strong>{attentionCount}</strong>
            <span>Needs Attention</span>
          </div>

          <div className="finding-summary-item red-item">
            <strong>{redFlagCount}</strong>
            <span>Immediate Attention</span>
          </div>
        </div>

        <RiskMeter risk={risk} />

        {returnFromReport && (
          <button
            className="secondary-button"
            onClick={() => {
              localStorage.removeItem(
                "carscope-return-from-report"
              );

              window.location.href = "/report";
            }}
          >
            Back to Report
          </button>
        )}

        <div className="zone-navigation-buttons">
          <button
            className="secondary-button"
            onClick={goToPreviousZone}
            disabled={currentZoneIndex === 0}
          >
            ← Previous
          </button>

          {currentZoneIndex ===
          inspectionZones.length - 1 ? (
            <button
              className="primary-button"
              onClick={() => {
                if (
                  completed.length < totalCheckpoints
                ) {
                  const remaining =
                    totalCheckpoints -
                    completed.length;

                  const confirmFinish =
                    window.confirm(
                      `${remaining} checkpoint${
                        remaining === 1 ? "" : "s"
                      } still need${
                        remaining === 1 ? "s" : ""
                      } to be checked.\n\nAre you sure you want to finish the inspection?`
                    );

                  if (!confirmFinish) {
                    return;
                  }
                }

                const savedData = localStorage.getItem(
                  "carscope-saved-inspections"
                );

                const existingInspections =
                  savedData
                    ? JSON.parse(savedData)
                    : [];

                    localStorage.removeItem(
                      "carscope-return-from-report"
                    );

                const newInspection = {
                  id: Date.now(),
                  vehicle,
                  inspectionData: {
                    completed,
                    findings,
                    notes,
                    photos,
                  },
                  createdAt:
                    new Date().toISOString(),
                };

                localStorage.setItem(
                  "carscope-saved-inspections",
                  JSON.stringify([
                    ...existingInspections,
                    newInspection,
                  ])
                );

                window.location.href = "/report";
              }}
            >
              Finish Inspection →
            </button>
          ) : (
            <button
              className="primary-button"
              onClick={goToNextZone}
            >
              Next Zone →
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default Inspection;