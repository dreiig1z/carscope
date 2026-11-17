import { useState } from "react";
import { validateVehicle } from "../utils/validation";

function NewInspection() {
  const inspectionMode =
    localStorage.getItem("carscope-mode") || "beginner";

  const [vehicle, setVehicle] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    seller: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setVehicle((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateVehicle(vehicle);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    localStorage.setItem(
      "carscope-vehicle",
      JSON.stringify(vehicle)
    );

    window.location.href = "/inspection";
  };

  const mileage = Number(vehicle.mileage);

  const getMileageGuidance = () => {
    if (!vehicle.mileage) {
      return null;
    }

    if (mileage < 80000) {
      return {
        label: "Generally lower mileage",
        message:
          "This is generally favorable based on mileage alone. Still consider the vehicle's age, maintenance history, and actual condition.",
        level: "good",
      };
    }

    if (mileage < 120000) {
      return {
        label: "Moderate mileage",
        message:
          "This is a common range for a used vehicle. Pay closer attention to maintenance records and overall condition.",
        level: "attention",
      };
    }

    if (mileage < 160000) {
      return {
        label: "Higher mileage",
        message:
          "Higher mileage can mean more wear. Check the vehicle's condition and maintenance history carefully.",
        level: "attention",
      };
    }

    return {
      label: "Very high mileage",
      message:
        "This is high mileage. It does not automatically mean the vehicle is bad, but maintenance history and inspection findings become especially important.",
      level: "red",
    };
  };

  const mileageGuidance = getMileageGuidance();

  return (
    <main className="inspection-page">
      <div className="inspection-container">
        <p className="hero-label">NEW INSPECTION</p>

        <h1>Tell us about the vehicle.</h1>

        <p className="page-description">
          Enter the basic information about the used vehicle
          you're about to inspect.
        </p>

        {inspectionMode === "beginner" && (
          <div className="mode-indicator">
            <span>Beginner Mode</span>

            <p>
              Don't worry if you're new to car inspections.
              CarScope will guide you through the process step by
              step.
            </p>
          </div>
        )}

        {inspectionMode === "experienced" && (
          <div className="mode-indicator">
            <span>Experienced Mode</span>

            <p>
              Enter the vehicle details, then continue to the
              inspection.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="inspection-form">
          <div className="form-group">
            <label htmlFor="make">Make</label>

            <input
              type="text"
              id="make"
              name="make"
              value={vehicle.make}
              onChange={handleChange}
              placeholder="e.g. Toyota"
              required
            />

            {inspectionMode === "beginner" && (
              <p className="field-guidance">
                Enter the vehicle's brand, such as Toyota, Honda,
                Mitsubishi, or Ford.
              </p>
            )}

            {errors.make && (
              <p className="form-error">{errors.make}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="model">Model</label>

            <input
              type="text"
              id="model"
              name="model"
              value={vehicle.model}
              onChange={handleChange}
              placeholder="e.g. Vios"
              required
            />

            {inspectionMode === "beginner" && (
              <p className="field-guidance">
                Enter the specific model of the vehicle, such as
                Vios, Civic, or Montero Sport.
              </p>
            )}

            {errors.model && (
              <p className="form-error">{errors.model}</p>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year">Year</label>

              <input
                type="number"
                id="year"
                name="year"
                value={vehicle.year}
                onChange={handleChange}
                placeholder="e.g. 2020"
                min="1980"
                max="2026"
                required
              />

              {inspectionMode === "beginner" && (
                <p className="field-guidance">
                  Enter the vehicle's model year. You can usually
                  find this in the vehicle documents or confirm it
                  with the seller.
                </p>
              )}

              {errors.year && (
                <p className="form-error">{errors.year}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="mileage">Mileage (km)</label>

              <input
                type="number"
                id="mileage"
                name="mileage"
                value={vehicle.mileage}
                onChange={handleChange}
                placeholder="e.g. 45000"
                min="0"
                required
              />

              {inspectionMode === "beginner" && (
                <p className="field-guidance">
                  Enter the mileage shown on the vehicle's
                  odometer. In the Philippines, this is commonly
                  recorded in kilometers (km).
                </p>
              )}

              {mileageGuidance && (
                <div
                  className={`mileage-guidance ${mileageGuidance.level}`}
                >
                  <strong>{mileageGuidance.label}</strong>

                  <p>{mileageGuidance.message}</p>
                </div>
              )}

              {inspectionMode === "beginner" && (
                <p className="field-tip">
                  Mileage alone does not determine whether a used
                  car is good or bad. Always consider the vehicle's
                  age, maintenance history, and inspection findings.
                </p>
              )}

              {errors.mileage && (
                <p className="form-error">{errors.mileage}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="price">Asking Price (₱)</label>

            <input
              type="number"
              id="price"
              name="price"
              value={vehicle.price}
              onChange={handleChange}
              placeholder="e.g. 550000"
              min="1"
              required
            />

            {inspectionMode === "beginner" && (
              <>
                <p className="field-guidance">
                  Enter the seller's current asking price in
                  Philippine pesos.
                </p>

                <p className="field-tip">
                  There is no single "good price" for a used
                  vehicle. Price depends on the make, model, year,
                  mileage, condition, maintenance history, and
                  current market prices.
                </p>
              </>
            )}

            {errors.price && (
              <p className="form-error">{errors.price}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="seller">
              Seller / Dealership
            </label>

            <input
              type="text"
              id="seller"
              name="seller"
              value={vehicle.seller}
              onChange={handleChange}
              placeholder="Optional"
            />

            {inspectionMode === "beginner" && (
              <p className="field-guidance">
                Enter the seller or dealership name so you can
                identify this inspection later.
              </p>
            )}
          </div>

          {inspectionMode === "beginner" && (
            <div className="beginner-form-tip">
              <strong>Before you continue</strong>

              <p>
                You don't need to know everything about cars.
                CarScope will guide you through the important areas
                during the inspection. Just enter the information
                you can confirm for now.
              </p>
            </div>
          )}

          <button type="submit" className="primary-button">
            Continue Inspection
          </button>
        </form>
      </div>
    </main>
  );
}

export default NewInspection;