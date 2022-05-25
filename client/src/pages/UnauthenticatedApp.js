import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ServicePage from './ServicePage'
import NotFoundPage from './NotFoundPage'
import SecondStep from '../components/CheckOutForm/SecondStepForm'

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/2nd" element={<SecondStep/>} />
      </Routes>
    </div>
  )
}

export default UnauthenticatedApp
