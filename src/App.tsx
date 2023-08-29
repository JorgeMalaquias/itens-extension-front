import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import GlobalStyle from './style/globalStyle';

function App() {

  return (
    <MemoryRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </MemoryRouter>
  )
}

export default App;
