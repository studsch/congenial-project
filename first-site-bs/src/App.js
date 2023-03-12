import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from './Components/Navibar';
import HeaderInfo from './Components/Headerinfo';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams,
  } from 'react-router-dom';

import {Home} from "./Pages/Home"

function App() {
  return (
    <>
    <HeaderInfo/>

    <NaviBar/>
    </>

  );
}

export default App;
