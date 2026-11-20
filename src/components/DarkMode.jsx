import React from 'react';
import LightButton from '../assets/website/light-mode-button.png';
import DarkButton from '../assets/website/dark-mode-button.png';

const DarkMode = () => {
    const [theam, setTheam] = React.useState(localStorage.getItem("theam")? localStorage.getItem("theam") : "light");

    const element = document.documentElement;
  
    
    React.useEffect(() => {
        localStorage.setItem("theam", theam);
        if(theam === "dark") {
            element.classList.add("dark");
            element.classList.add("dark");
        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    })

  return (
    <div className='relative'>
        <img onClick={() => setTheam(theam === "dark" ? "light" : "dark")} src = {LightButton} alt="" 
        className={`w-12 cursor-pointer absolute right-0 z-10 ${theam === "dark"? "opacity-0" : "opacity-100"} transition-all duration-300`}/>
        <img onClick={() => setTheam(theam === "dark" ? "light" : "dark")} src = {DarkButton} alt="" 
        className={`w-12 cursor-pointer `}/>
    </div>
  )
}

export default DarkMode