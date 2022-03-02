import './App.css';
import Page from './components/Page'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="home" element={<Page />} />
          <Route path="artigos" element={<Page />} />
          <Route path="sobre-mim" element={<Page />} />
          <Route path="agendamento" element={<Page />} />
        </Routes>
      
        {/* <Route path="page2" component={Page2} />
        <Route path="/login" component={Login} /> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
