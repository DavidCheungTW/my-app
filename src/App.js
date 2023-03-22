// import logo from "./logo.svg";
import "./App.css";
import Tutors from "./components/Tutors";

function App() {
  const FrontendTutors = ["Maria", "Stu", "Rabbia"];
  const BackendTutors = ["Dragos", "Ryan", "Ian"];

  const showFETutors = true; // you can choose to show FE

  return (
    <div className="App">
      <h1>My App</h1>

      {showFETutors && (
        <>
          <p>Frontend Instructors:</p>
          <Tutors tutorsArray={FrontendTutors} />
        </>
      )}
      <p>Backend Instructors:</p>
      <Tutors tutorsArray={BackendTutors} />
    </div>
  );
}

export default App;
