import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../client/src/components/Header';
import SignUp from '../../client/src/pages/SignUp';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';

import PrivateRoute from "./components/PrivateRoute"
import Profile from './pages/Profile';
import Listing from './pages/Listing';
import Search from './pages/Search';
import About from './pages/About';

// import About from './pages/About';
// import SignUp from './pages/SignUp';
// import Home from './pages/Home';
// import SignIn from './pages/SignIn';
// //import Search from './pages/Search';
// import Profile from './pages/Profile';
// import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
        {/* <Route path='/profile' element={<Profile></Profile>}/> */}

        {/* <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path='/profile' element={<Profile />} />
        </Route> */}
        {/* <Route path='/about' element={<About></About>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search></Search>} />
        <Route path='/listing/:listingId' element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
