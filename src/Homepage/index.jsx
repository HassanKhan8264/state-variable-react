import './index.css';
import {useState} from 'react';
// import Theme from './../theme';
import AddItem from './../additem'

function Home() { 
        const [isLit, setLit] = useState("dark");
        const toggleThemeMode = () =>{
          if(isLit === "dark"){
              setLit("Lit")
          }else{
            setLit("dark")
          }
    
        }
      return (
        <div className = {`room ${(isLit === "dark" ? "dark": "Lit")}`}>
        {/* <Theme  /> */}
        <AddItem toggleThemeMode={toggleThemeMode} Mode={isLit}/>
        </div>
      );
}


export default Home;
