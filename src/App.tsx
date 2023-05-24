import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContextProvider from './contexts/app.context';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/login';
import './styles/global.scss'


function App() {
  return (
    <div id='page'>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />

          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </div>

  );
}

export default App;
