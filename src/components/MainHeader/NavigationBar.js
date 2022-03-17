import {Link} from 'react-router-dom';
import "../../Styles/NavigationBar/NavigationBar.css";

const NavigationBar = () => {

return (<header>
  <nav>
    <ul className='nav-bar-list'>
      <li className='nav-bar-list_element' >
        <Link className='link' to='/home'>Home</Link>
      </li>
      <li className='nav-bar-list_element'>
        <Link className='link' to='/units'>Units</Link>
      </li>
    </ul>
  </nav>
</header>)

}

export default NavigationBar;