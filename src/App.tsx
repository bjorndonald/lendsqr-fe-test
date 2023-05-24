import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContextProvider from './contexts/app.context';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/login';
import './styles/global.scss'
import UsersContextProvider from './pages/users/users.context';
import Users from './pages/users/Users';
import { createMemoryHistory } from 'history'

function App() {
  const history = createMemoryHistory()
  return (
    <div id='page'>
      <Router>
        <AppContextProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/users' element={
              <UsersContextProvider>
                <Users />
              </UsersContextProvider>} />
          </Routes>
        </AppContextProvider>
      </Router>
    </div>

  );
}

export default App;
