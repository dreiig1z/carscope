export function validateVehicle(vehicle) {
  const errors = {};

  const currentYear = new Date().getFullYear();

  if (!vehicle.make.trim()) {
    errors.make = "Please enter the vehicle make.";
  }

  if (!vehicle.model.trim()) {
    errors.model = "Please enter the vehicle model.";
  }

  if (!vehicle.year) {
    errors.year = "Please enter the vehicle year.";
  } else if (
    Number(vehicle.year) < 1980 ||
    Number(vehicle.year) > currentYear
  ) {
    errors.year = `Enter a year between 1980 and ${currentYear}.`;
  }

  if (!vehicle.mileage) {
    errors.mileage = "Please enter the vehicle mileage.";
  } else if (Number(vehicle.mileage) < 0) {
    errors.mileage = "Mileage cannot be negative.";
  }

  if (!vehicle.price) {
    errors.price = "Please enter the asking price.";
  } else if (Number(vehicle.price) <= 0) {
    errors.price = "Price must be greater than zero.";
  }

  return errors;
}