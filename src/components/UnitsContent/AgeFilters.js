import "../../Styles/AgeFilters/AgeFilters.css";

const AgeFilters = props => {

  const allAgeFilter =() => {
    props.onAllAgeFilter();
  }

  const darkAgeFilter = () => {
    props.onDarkAgeFilter();

  }

  const feudalAgeFilter = () => {
    props.onFeudalAgeFilter();

  }

  const castleAgeFilter = () => {
    props.onCastleAgeFilter();

  }

  const imperialAgeFilter = () => {
    props.onImperialAgeFilter();

  }


  return (<ul className="age-filter-list">
      <li className="age-filter-list_element" onClick={allAgeFilter}>All</li>
      <li className="age-filter-list_element" onClick={darkAgeFilter}>Dark</li>
      <li className="age-filter-list_element" onClick={feudalAgeFilter}>Feudal</li>
      <li className="age-filter-list_element" onClick={castleAgeFilter}>Castle</li>
      <li className="age-filter-list_element" onClick={imperialAgeFilter}>Imperial</li>
  </ul>)
}

export default AgeFilters;