import '../App.css'
import { useState } from 'react'
import Nav from '../components/HomePage/Nav.js'
import { useAuth } from '../contexts/authentication.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault()
    login({
      email,
      password
    })
  }

  return (
    <div className="login-form-container" onSubmit={handleSubmit}>
      <Nav />
      <div className="w-screen flex justify-center bg-bg">
        <form className="bg-white border border-grey300 rounded-lg w-[614px] mt-[52px] mb-[87px] px-[87px] pt-[32px] pb-[53px]">
          <h1 className="text-blue950 text-center">เข้าสู่ระบบ </h1>
          <div className="mt-5">
            <label>
              <h5>
                อีเมล<span className="text-red">*</span>
              </h5>
              <input
                required
                id="email"
                name="email"
                type="email"
                placeholder="กรุณากรอกอีเมล"
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
                value={email}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5"
              />
            </label>
          </div>
          <div className="mt-5">
            <label>
              <h5>
                รหัสผ่าน<span className="text-red">*</span>
              </h5>
              <input
                required
                id="password"
                name="password"
                type="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
                value={password}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5"
              />
            </label>
          </div>
          <br />
          <div className="form-actions">
            <button className="btn-primary w-full mt-5 mb-[42px]" type="submit">
              เข้าสู่ระบบ
            </button>
            <div className="text-center">
              <span className="text-grey700">
                ยังไม่มีบัญชีผู้ใช้ HomeService?{' '}
              </span>
              <Link to="/register">ลงทะเบียน</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
