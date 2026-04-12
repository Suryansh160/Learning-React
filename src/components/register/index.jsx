import { useState } from 'react'
import { registerformElements } from '../../config'
import CommonForm from '../common_form'

const initialState = {
  name: '',
  email: '',
  password: ''
}

function RegisterComponent () {
  const [registerFormData, setRegisterFormData] = useState(initialState)

  function handleRegisterOnSubmit (event) {
    event.preventDefault()

    setRegisterFormData(initialState)
  }

  return (
    <div>
      <h1>Register Page</h1>

      <CommonForm
        formControls={registerformElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={'Register'}
        onHandleSubmit={handleRegisterOnSubmit}
      />
    </div>
  )
}

export default RegisterComponent
