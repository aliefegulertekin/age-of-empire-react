import React, {useEffect, useState} from "react";
import unitData from '../../data/age-of-empires-units.json';
import AgeFilters from "./AgeFilters";
import CostFilters from "./CostFilters";
import UnitsTable from "./UnitsTable";
import "../../Styles/UnitsContent/UnitsContent.css";

const UnitsContent = () => {

  const [units, setUnits] = useState(unitData.units);
  const [unitCost, setUnitCost] = useState(units.map(d => d.cost));
  const [age, setAge] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [rangeSliderValid, setRangeSliderValid] = useState(false);

  const [table, setTable] = useState();


  useEffect(()=>{

    if(isClicked) {

      setTable(
        <UnitsTable units={units}/>)
    }

    setIsClicked(false);
    
  },[isClicked]);


  const allAgesUnitRenderHandler = () => {
    setUnits(unitData.units);
    setIsClicked(true);
  }

  
  const darkAgesUnitRenderHandler = () => {
    const updatedData = unitData.units.filter(d => d.age === 'Dark');
    setUnits(updatedData);
    setIsClicked(true);
    setAge('Dark');
   
  }
  
  const feudalAgesUnitRenderHandler = () => {

    const updatedData = unitData.units.filter(d => d.age === 'Feudal');
    setUnits(updatedData);
    setIsClicked(true);
    setAge('Feudal');
    



  }
  const castleAgesUnitRenderHandler = () => {

    const updatedData = unitData.units.filter(d => d.age === 'Castle');
    setUnits(updatedData);
    setIsClicked(true);
    setAge('Castle');


  }
  const imperialAgesUnitRenderHandler = () => {
    const updatedData = unitData.units.filter(d => d.age === 'Imperial');
    setUnits(updatedData);
  
      setIsClicked(true);
      setAge('Imperial')
  
  }

const costFilterHandler = (data,age) => {

 
   const dataArr = unitData.units.filter(e => e.age === age)

  const checkedData = dataArr.filter(e => e.cost !== null);
  if(data.woodChecked && data.foodChecked && data.goldChecked) {
    const updatedData = checkedData.filter(e => 
    e.cost['Wood'] > data.woodAmount[0] && e.cost['Wood'] < data.woodAmount[1] &&
    e.cost['Gold'] > data.goldAmount[0] && e.cost['Gold'] < data.goldAmount[1] &&
    e.cost['Food'] > data.foodAmount[0] && e.cost['Food'] < data.foodAmount[1]);
    setUnits(updatedData);
    setIsClicked(true);
  }else {
    if(data.woodChecked && data.foodChecked) {
      const updatedData = checkedData.filter(e => 
        e.cost['Wood'] > data.woodAmount[0] && e.cost['Wood'] < data.woodAmount[1] &&
        e.cost['Food'] > data.foodAmount[0] && e.cost['Food'] < data.foodAmount[1]);
        setUnits(updatedData);
        setIsClicked(true);
    }
    else if (data.woodChecked && data.goldChecked){
      const updatedData = checkedData.filter(e => 
        e.cost['Wood'] > data.woodAmount[0] && e.cost['Wood'] < data.woodAmount[1] &&
        e.cost['Gold'] > data.goldAmount[0] && e.cost['Gold'] < data.goldAmount[1]);
        setUnits(updatedData);
        setIsClicked(true);
    }
    else if(data.foodChecked && data.goldChecked) {
      const updatedData = checkedData.filter(e => 
        e.cost['Food'] > data.foodAmount[0] && e.cost['Food'] < data.foodAmount[1] &&
        e.cost['Gold'] > data.goldAmount[0] && e.cost['Gold'] < data.goldAmount[1]);
        setUnits(updatedData);
        setIsClicked(true);
    }
    else if(data.woodChecked && !data.foodChecked && !data.goldChecked) {
      const updatedData = checkedData.filter(e => 
        e.cost['Wood'] > data.woodAmount[0] && e.cost['Wood'] < data.woodAmount[1]);
        setUnits(updatedData);
        setIsClicked(true);
    }
    else if(data.foodChecked && !data.woodChecked && !data.goldChecked) {
      const updatedData = checkedData.filter(e => 
        e.cost['Food'] > data.foodAmount[0] && e.cost['Food'] < data.foodAmount[1]);
        setUnits(updatedData);
        setIsClicked(true);
    }
    else if(data.goldChecked && !data.woodChecked && !data.foodChecked) {
      const updatedData = checkedData.filter(e => 
        e.cost['Gold'] > data.goldAmount[0] && e.cost['Gold'] < data.goldAmount[1]);
        setUnits(updatedData);
        setIsClicked(true);
    }
    
  }

}




  return (<div className='units-content'>
    <div className="filters-section">
    <AgeFilters
    onAllAgeFilter={allAgesUnitRenderHandler}
    onDarkAgeFilter={darkAgesUnitRenderHandler}
    onFeudalAgeFilter={feudalAgesUnitRenderHandler}
    onCastleAgeFilter={castleAgesUnitRenderHandler}
    onImperialAgeFilter={imperialAgesUnitRenderHandler}/>
    <CostFilters onCostFilter= {costFilterHandler} age= {age} />
    </div>

    {table}
  </div>)}

export default UnitsContent;