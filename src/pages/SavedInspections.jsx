import { useState } from "react";

function SavedInspections() {
  const [savedInspections, setSavedInspections] =
    useState(() => {
    const savedData = localStorage.getItem(
      "carscope-saved-inspections"
    );

    return savedData ? JSON.parse(savedData) : [];
  });

  return (
    <main className="saved-page">
      <div className="saved-container">
        <p className="hero-label">SAVED INSPECTIONS</p>

        <h1>Your inspections.</h1>

        <p className="page-description">
          Review vehicle inspections saved on this device.
        </p>

        {savedInspections.length === 0 ? (
          <div className="empty-state">
            <h2>No saved inspections yet.</h2>

            <p>
              Complete an inspection to save it here.
            </p>

            <button
              className="primary-button"
              onClick={() => {
                window.location.href = "/new-inspection";
              }}
            >
              Start New Inspection
            </button>
          </div>
        ) : (
          <div className="saved-inspections-list">
            {savedInspections.map((inspection) => (
              <div
                className="saved-inspection-card"
                key={inspection.id}
              >
                <div>
                  <p className="saved-label">VEHICLE</p>

                  <h2>
                    {inspection.vehicle.year}{" "}
                    {inspection.vehicle.make}{" "}
                    {inspection.vehicle.model}
                  </h2>

                  <p>
                    ₱
                    {Number(
                      inspection.vehicle.price
                    ).toLocaleString()}{" "}
                    •{" "}
                    {Number(
                      inspection.vehicle.mileage
                    ).toLocaleString()} km
                  </p>

                  {inspection.vehicle.seller && (
                    <p>
                      Seller:{" "}
                      {inspection.vehicle.seller}
                    </p>
                  )}

                  <p className="saved-date">
                    Inspected:{" "}
                    {new Date(
                      inspection.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

                <div className="saved-actions">
                  <button
                    className="primary-button"
                    onClick={() => {
                      localStorage.setItem(
                        "carscope-vehicle",
                        JSON.stringify(
                          inspection.vehicle
                        )
                      );

                      localStorage.setItem(
                        "carscope-inspection",
                        JSON.stringify(
                          inspection.inspectionData
                        )
                      );

                      window.location.href =
                        "/report";
                    }}
                  >
                    View Report
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => {
                        const confirmDelete = window.confirm(
                        `Are you sure you want to delete the inspection for ${inspection.vehicle.year} ${inspection.vehicle.make} ${inspection.vehicle.model}?`
                        );

                        if (!confirmDelete) {
                        return;
                        }

                        const updatedInspections =
                        savedInspections.filter(
                            (item) => item.id !== inspection.id
                        );

                        localStorage.setItem(
                        "carscope-saved-inspections",
                        JSON.stringify(updatedInspections)
                        );

                        setSavedInspections(updatedInspections);
                    }}
                    >
                    Delete
                    </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default SavedInspections;