import HeaderLogo from './components/HeaderLogo.js'
import SearchField from './components/SearchButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResultTable from './components/ResultTable';

function App() {
  return (
    <Router>
      <div className="App">
          <HeaderLogo/>
          <div className='content'>
            <Routes>
              <Route path="/WaveScanAssessment" element={<SearchField/>}></Route>
              <Route path="results" element={<ResultTable/>}>
              </Route>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;

