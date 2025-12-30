import "./App.css";
import UserCard from "./components/Card"

function App() {
  const title1="Making a design system from scratch"
  const title2="Creating pixel perfect icons in Figma"
  return (
    <>
      <UserCard title={title1} color="red"  />
      <UserCard title={title2} color="blue"  />
      
    </>
  );
}

export default App;
