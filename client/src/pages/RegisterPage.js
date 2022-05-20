import '../App.css'
import { useState } from 'react'
import Nav from '../components/HomePage/Nav.js'
import { useAuth } from '../contexts/authentication.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function RegisterPage() {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { register } = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      name,
      phoneNumber,
      email,
      password,
      role: 'customer'
    }
    register(data)
  }

  return (
    <div className="register-form-container" onSubmit={handleSubmit}>
      <Nav />
      <div className="w-screen flex justify-center bg-bg">
        <form className="bg-white border border-grey300 rounded-lg w-[614px] px-[87px] pt-8 pb-[45px] mt-[52px] mb-[87px]">
          <h1 className="text-blue950 text-center">ลงทะเบียน </h1>
          <div className="mt-5">
            <label>
              <h5>
                ชื่อ - นามสกุล<span className="text-red">*</span>
              </h5>
              <input
                required
                id="name"
                name="name"
                type="text"
                placeholder="กรุณากรอกชื่อ-นามสกุล"
                onChange={(event) => {
                  setName(event.target.value)
                }}
                value={name}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5"
              />
            </label>
          </div>
          <div className="mt-5">
            <label htmlFor="phone">
              <h5>
                เบอร์โทรศัพท์<span className="text-red">*</span>
              </h5>
              <input
                required
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                pattern="[0-9]{10}"
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                onChange={(event) => {
                  setPhoneNumber(event.target.value)
                }}
                value={phoneNumber}
                className="border rounded-lg border-grey300 w-full h-11 px-4 py-2.5"
              />
            </label>
          </div>
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
            <br />
            <div className="mt-[45px]">
              <label>
                <input
                  required
                  id="conditionAndPrivacy"
                  name="conditionAndPrivacy"
                  type="checkbox"
                />
                <span className="absolute">
                  ยอมรับ <a href="/">ข้อตกลงและเงื่อนไข</a> และ{' '}
                  <a href="">นโยบายความเป็นส่วนตัว</a>
                </span>
              </label>
            </div>
          </div>
          <div className="form-actions">
            <button className="btn-primary w-full my-[42px]" type="submit">
              ลงทะเบียน
            </button>
            <div className="text-center">
              <Link to="/login">กลับไปหน้าเข้าสู่ระบบ</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
