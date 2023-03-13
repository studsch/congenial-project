import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from './Pages/Components/Navibar';
import HeaderInfo from './Pages/Components/Headerinfo';
import {Home} from './Pages/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams,
  } from 'react-router-dom';


function App() {
  return (
    <>
        <HeaderInfo/>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>


    </>

  );
}

export default App;
