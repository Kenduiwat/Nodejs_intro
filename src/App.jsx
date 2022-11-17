
import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Productlist from "./components/productlist/productlist";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";







const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;




  return <div style={{backgroundColor:darkMode ? "#222" : "white", color:darkMode && "white",}}>
    <Intro />
    <About />
    <Productlist />
    <Contact /> 
    <Toggle />
  </div>;
};

export default App;