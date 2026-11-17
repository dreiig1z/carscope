import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewInspection from "./pages/NewInspection";
import Inspection from "./pages/Inspection";
import Report from "./pages/Report";
import SavedInspections from "./pages/SavedInspections";
import BuyersGuide from "./pages/BuyersGuide";
import Compare from "./pages/Compare";
import ExperienceMode from "./components/ExperienceMode";

function App() {
  const path = window.location.pathname;

  let page;

    if (path === "/experience") {
    page = (
      <ExperienceMode
        onSelect={(mode) => {
          localStorage.setItem("carscope-mode", mode);
          window.location.href = "/new-inspection";
        }}
      />
    );
  } else if (path === "/new-inspection") {
    page = <NewInspection />;
  } else if (path === "/inspection") {
    page = <Inspection />;
  } else if (path === "/report") {
    page = <Report />;
  } else if (path === "/saved") {
    page = <SavedInspections />;
  } else if (path === "/buyers-guide") {
    page = <BuyersGuide />;
  } else if (path === "/compare") {
    page = <Compare />;
  } else {
    page = <Home />;
  }

  

  return (
    <>
      <Navbar />
      <div className="page-enter">
        {page}
      </div>
    </>
  );
}

export default App;