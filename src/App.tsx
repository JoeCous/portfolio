import Main from "./components/main/main.tsx";
import About from "./components/about/about.tsx";

export default function App() {
  return (
    <>
      <div className="mainContainer">
        <Main />
        <About />
      </div>
    </>
  );
}