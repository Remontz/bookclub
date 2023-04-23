import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Register from './views/Register';
import About from './views/About';
import CreateBook from './views/CreateBook';
import Dashboard from './views/Dashboard';
import EditBook from './views/EditBook';
import EditUser from './views/EditUser';
import Home from './views/Home';
import Login from './views/Login';
import ViewBook from './views/ViewBook';

function App() {
  library.add(fab, fas)

  const extLinks =  {
    linkedIn: 'https://www.linkedin.com/in/kacy-gilbert-225324aa/',
    gitHub: 'https://github.com/Remontz',
    portfolio: 'https://kacy-gilbert-devportfolio.netlify.app/'
  }
  const user = {
    name: 'Test Name',
    email: 'email@xyz.com',
    password: 'test1234!'
}
  const {linkedIn, gitHub, portfolio} = extLinks
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Register />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Home user={user} linkedIn={linkedIn} gitHub={gitHub} portfolio={portfolio} />} path='/home' />
        <Route element={<Dashboard />} path='/dashboard' />
        <Route element={<EditUser />} path='/editUser' />
        <Route element={<EditBook />} path='/editor' />
        <Route element={<CreateBook />} path='/writer' />
        <Route element={<ViewBook />} path='/reader' />
        <Route element={<About />} path='/about' />
      </Routes>
      <Helmet>
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Neucha&family=Teko&family=Ubuntu+Condensed&family=Zeyada&display=swap" rel="stylesheet" />
      </Helmet>
    </div>
    </BrowserRouter>
  );
}

export default App;
