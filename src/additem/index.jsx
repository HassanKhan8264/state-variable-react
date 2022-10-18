import "./index.css";
import { BsMoon, BsSun } from "react-icons/bs";
import { useState }  from 'react';

const AddItem = (props) => {
  const [names, setNames] = useState(['Name1', 'Name2']);
  const handleClick = () => {
    setNames(current => [...current, 'Name3']);
  };

  return (
    <div className="addDiv">
      <div className="icon">

        <button type="button" onClick={props.toggleThemeMode}>
          {props.Mode === "Lit" ? <BsSun /> : <BsMoon />}
        </button>
  </div>
<div className="names">
<div>
  <button onClick={handleClick}>Push to state array</button>
</div>

{names.map((element, index) => {
  return (
    <div key={index}>
      <h2>{element}</h2>
    </div>
  );
})};

</div>
</div>
  )
}


      

export default AddItem;
