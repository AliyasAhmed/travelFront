// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Adventure from '../components/Adventure'
import Companion from '../components/Companion'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import AdminLogin from './Pages/AdminLogin'
import AdminSignup from './Pages/AdminSignup'
import DashBoard from './Pages/DashBoard'
import PackageCreation from '../components/PackageCreation'
import PackageWeather from './Pages/PackageWeather'
import PackageImages from './Pages/PackageImages'
import PackageAccomodationContent from '../components/PackageAccomodationContent'
import PackageAccomodation from './Pages/PackageAccomodation'
import PackageActivities from './Pages/PackageActivities'
import PackagePdfGen from './Pages/PackagePdfGen'
import { createContext, React ,useState } from 'react'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import UserConvo from './Pages/UserConvo'
import AdminRoutes from './Pages/Admin/AdminRoutes'
import About from './Pages/About'
import Contact from './Pages/Contact'
import TermsAndCo from './Pages/TermsAndCo'
import PrivacyPol from './Pages/PrivacyPol'
import Brochure from './Pages/Broucher'
import Team from './Pages/Team'


// use context
export const Context= createContext();

function App() {

const [signedIn, setSignedIn] = useState(false)
const [user,setUser]= useState(null)

  // return function
  return (
    <>
    <Context.Provider value={[signedIn, setSignedIn, user , setUser]}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminSignup" element={<AdminSignup />} />
          <Route path="/dashboard" element={<DashBoard/>} />
          <Route path="/packageCreation" element={<PackageCreation/>} />
          <Route path="/packageWeather" element={<PackageWeather/>} />
          <Route path="/packageImages" element={<PackageImages/>} />
          <Route path="/packageAccomodation" element={<PackageAccomodation />} />
          <Route path="/packageActivities" element={<PackageActivities />} />
          <Route path="/packagePdfGen" element={<PackagePdfGen />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/resetPassword" element={<ResetPassword/>}/>
          <Route path="/userConvo" element={<UserConvo/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/TermsAndCo" element={<TermsAndCo/>}/>
          <Route path="/PrivacyPol" element={<PrivacyPol/>}/>
          <Route path="/Brochure" element={<Brochure/>}/>
          <Route path="/Team" element={<Team/>}/>
          {/* admin routes */}
          <Route path='/admin/*' element={<AdminRoutes/>}/>


          
        </Routes>

        <Footer />

      </BrowserRouter>
      </Context.Provider>


    </>
  )
}

export default App
