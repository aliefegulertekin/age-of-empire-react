import React, {useState, useEffect} from "react";
import {Slider} from '@mui/material'
import '../../Styles/CostFilters/CostFilters.css';

const Costs = props => {

  const [isWoodChecked, setIsWoodChecked] = useState(false);
  const [isFoodChecked, setIsFoodChecked] = useState(false);
  const [isGoldChecked, setIsGoldChecked] = useState(false);
  const [woodVal, setWoodVal] = useState([0,200])
  const [foodVal, setFoodVal] = useState([0,200])
  const [goldVal, setGoldVal] = useState([0,200])




  useEffect(()=>{
    const filteredData = {
      woodChecked: isWoodChecked,
      woodAmount: woodVal,
      foodChecked: isFoodChecked,
      foodAmount: foodVal,
      goldChecked: isGoldChecked,
      goldAmount: goldVal,
      age: props.age
    }
    props.onCostFilter(filteredData, props.age);

  },[woodVal, foodVal, goldVal])

  const woodCheckboxHandler = () => {
      setIsWoodChecked(!isWoodChecked)
  }
  
  const foodCheckboxHandler = () => {
    setIsFoodChecked(!isFoodChecked)
}

const goldCheckboxHandler = () => {
  setIsGoldChecked(!isGoldChecked)
}

const woodChangeHandler = (e,data) => {
  // props.woodFilter(+e.target.value);
  setWoodVal(data);
}
const foodChangeHandler = (e,data) => {
  // props.woodFilter(+e.target.value);
  setFoodVal(data);
}


const goldChangeHandler = (e,data) => {
  setGoldVal(data);
  // props.woodFilter(+e.target.value);
}





  return (<div className="cost-filters-container">
    <div className="cost-filter">
      <input onChange={woodCheckboxHandler} type="checkbox"/>
      <label className="cost-filter-label" >Wood</label>
       <div  style={{width:500, margin:10}}>
        <Slider color="primary" disabled={!isWoodChecked} value={woodVal} onChange={woodChangeHandler} />
       </div>

    </div>
    <div className="cost-filter">
      <input onChange={foodCheckboxHandler} type="checkbox"/>
      <label className="cost-filter-label">Food</label>
      <div  style={{width:500, margin:10}}>
        <Slider disabled={!isFoodChecked} value={foodVal} onChange={foodChangeHandler} />
      </div>

    </div>
    <div className="cost-filter">
      <input onChange={goldCheckboxHandler} type="checkbox"/>
      <label className="cost-filter-label">Gold</label>
      <div  style={{width:500, margin:10}}>
        <Slider disabled={!isGoldChecked} value={goldVal} onChange={goldChangeHandler} />
      </div>
    </div>
  </div>)

}

export default Costs;