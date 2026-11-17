import { useEffect, useState } from "react";

function useInspectionStorage() {
  const [inspectionData, setInspectionData] = useState(() => {
    const savedData = localStorage.getItem("carscope-inspection");

    if (savedData) {
      return JSON.parse(savedData);
    }

    return {
      completed: [],
      findings: {},
      notes: {},
      photos: {},
    };
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