import { useEffect, useState } from "react";

const emptyInspection = {
  completed: [],
  findings: {},
  notes: {},
  photos: {},
};

function useInspectionStorage() {
  const [inspectionData, setInspectionDataState] = useState(() => {
    const savedData = localStorage.getItem("carscope-inspection");

    if (savedData) {
      return JSON.parse(savedData);
    }

    return emptyInspection;
  });

  const setInspectionData = (update) => {
    setInspectionDataState((previous) => {
      const nextData =
        typeof update === "function"
          ? update(previous)
          : update;

      localStorage.setItem(
        "carscope-inspection",
        JSON.stringify(nextData)
      );

      return nextData;
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "carscope-inspection",
      JSON.stringify(inspectionData)
    );
  }, [inspectionData]);

  return [inspectionData, setInspectionData];
}

export default useInspectionStorage;