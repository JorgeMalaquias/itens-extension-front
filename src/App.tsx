import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import GlobalStyle from './style/globalStyle';
import { Provider } from 'react-redux';
import store from './redux/store';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
      <Provider store={store}>
        <MemoryRouter>
          <GlobalStyle/>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </MemoryRouter>
      </Provider>
  )
}

export default App;
