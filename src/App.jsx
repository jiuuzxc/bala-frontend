import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Algorithm from "./components/Algorithm";
import UserManual from "./components/UserManual";
import VideoDemo from "./components/VideoDemo";
import Developers from "./components/Developers"

const App = () => {
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  
  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Algorithm />
      <UserManual />
      <VideoDemo />
      <Developers theme={theme} />
    </div>
  )
}

export default App
