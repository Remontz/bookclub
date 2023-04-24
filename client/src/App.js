import './App.css';
import { useState, /*useRef*/ } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas, faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Register from './views/Register';
import Login from './views/Login';
import About from './views/About';
import CreateBook from './views/CreateBook';
import Dashboard from './views/Dashboard';
import EditBook from './views/EditBook';
import EditUser from './views/EditUser';
import Home from './views/Home';
import ViewBook from './views/ViewBook';

function App() {
  library.add(fab, fas, faCheck, faTimes, faInfoCircle)

  const extLinks =  {
    linkedIn: 'https://www.linkedin.com/in/kacy-gilbert-225324aa/',
    gitHub: 'https://github.com/Remontz',
    portfolio: 'https://kacy-gilbert-devportfolio.netlify.app/'
  }
  const {linkedIn, gitHub, portfolio} = extLinks

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route element={<Register  />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Home linkedIn={linkedIn} gitHub={gitHub} portfolio={portfolio} />} path='/home' />
        <Route element={<Dashboard linkedIn={linkedIn} gitHub={gitHub} portfolio={portfolio}  />} path='/dashboard' />
        <Route element={<EditUser linkedIn={linkedIn} gitHub={gitHub} portfolio={portfolio} />} path='/editUser' />
        <Route element={<EditBook linkedIn={linkedIn} gitHub={gitHub} portfolio={portfolio} />} path='/editor' />
        <Route element={<CreateBook />} path='/writer' />
        <Route element={<ViewBook linkedIn={linkedIn} gitHub={gitHub} portfolio={portfolio} />} path='/reader' />
        <Route element={<About linkedIn={linkedIn} gitHub={gitHub} portfolio={portfolio} />} path='/about' />
      </Routes>
      <Helmet>
        <meta name="google-site-verification" content="2q6eKNMWpbgPeaba3SQGyIx-Q6aPsdS9KUXVZ2Vlp2U" />
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Neucha&family=Teko&family=Ubuntu+Condensed&family=Zeyada&display=swap" rel="stylesheet" />
      </Helmet>
    </main>
    </BrowserRouter>
  );
}

export default App;
