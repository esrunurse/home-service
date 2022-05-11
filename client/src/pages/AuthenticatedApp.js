import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import UserProfile from './Profile'
import ServicePage from './ServicePage'
import AdminCategoryPage from './AdminCategoryPage'
import CreateCategory from './CreateCategoryPage'
import AdminEditCategory from './AdminEditCategory'
import '../App.css'

function AuthenticatedApp() {
  const loginRole = localStorage.getItem('role')
  return (
    <div className="App">
      {loginRole === 'admin' ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/category-dashboard" element={<AdminCategoryPage />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/category/edit/:categoryId" element={<AdminEditCategory />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
      )}
    </div>
  )
}

export default AuthenticatedApp
