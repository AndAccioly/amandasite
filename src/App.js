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
          <Route path="/" element={<Page corpo={0}/>} />
          <Route path="home" element={<Page corpo={1}/>} />
          <Route path="artigos" element={<Page corpo={2}/>} />
          <Route path="artigos/artigo/:id" element={<Page corpo={21}/>} />
          <Route path="sobre-mim" element={<Page corpo={3}/>} />
          <Route path="agendamento" element={<Page corpo={4}/>} />
        </Routes>
      
        {/* <Route path="page2" component={Page2} />
        <Route path="/login" component={Login} /> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
