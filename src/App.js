import Sidebar from './Sidebar';
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="App">
    <Router>
         <Header/>
      <Switch>
      <Route path="/search/:searchTerm">
      <div className="app__page">
        <Sidebar/>
        {/* <RecommendedVideos/> */}
        <SearchPage/>
        </div>
      </Route>
      <Route path="/">
        <div className="app__page">
        <Sidebar/>
        <RecommendedVideos/>
        </div>
      </Route>
      </Switch>
    </Router>
   
    </div>
  );
}

export default App;
