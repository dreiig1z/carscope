import { useEffect, useState } from "react";

const emptyInspection = {
  completed: [],
  findings: {},
  notes: {},
  photos: {},
};

function useInspectionStorage() {
  const [inspectionData, setInspectionData] = useState(() => {
    const savedData = localStorage.getItem("carscope-inspection");

    if (savedData) {
      return JSON.parse(savedData);
    }

    return emptyInspection;
  });

  useEffect(() => {
    localStorage.setItem(
      "carscope-inspection",
      JSON.stringify(inspectionData)
    );
  }, [inspectionData]);

  return [inspectionData, setInspectionData];
}

export default useInspectionStorage;