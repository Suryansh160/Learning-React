import { loginformElements } from '../../config'
import CommonForm from '../common_form'
import { useState } from 'react'

const initialState = { email: '', password: '' }

function onHandleSubmit (event) {
  event.preventDefault()

  setLoginFormData(initialFormData)
}

function LoginComponent () {
  const [loginFormData, setLoginFormData] = useState(initialState)

  return (
    <div>
      <h1>Login Page</h1>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginformElements}
        onHandleSubmit={onHandleSubmit}
        buttonText={'Login'}
      />
    </div>
  )
}

export default LoginComponent
