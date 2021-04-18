import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Introduction from './components/IntroductionComponents/introduction.js';
import MyPhilosophy from './components/PhilosophyComponents/MyPhilosophy.js';
import Education from "./components/EducationComponents/education.js";
import Projects from "./components/ProjectsComponents/projects.js";
import './App.css';

function App() {
  return (
    <div>
      <Introduction/>
      <MyPhilosophy/>
      <Education/>
      <Projects/>
    </div>
  );
}

export default App;
