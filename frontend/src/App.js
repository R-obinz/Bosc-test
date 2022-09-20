import Login from "./components/Login";
import Signup from "./components/Signup";
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Profile from "./pages/profile/Profile";
import Album from "./pages/album/Album";
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Profile/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path="/album" element={<Album />} />


    </Routes>

   </BrowserRouter>
   </>
  );
}

export default App;
