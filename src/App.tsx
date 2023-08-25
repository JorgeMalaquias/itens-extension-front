import './App.css';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

function App() {

  return (
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </MemoryRouter>
  )
}

export default App;
