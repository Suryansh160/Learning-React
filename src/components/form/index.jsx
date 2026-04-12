import { useState } from 'react'

function FormComponent () {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  //   best way all of your inputs in one place
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  function handleInputChange (event) {
    const { value } = event.target
    setNameValue(value)
  }

  function handleSubmit (event) {
    event.preventDefault()

    console.log(nameValue, emailValue)
  }

  function handleEmailChange (event) {
    const { value } = event.target
    setEmailValue(value)
  }

  //   best way create a common method that does everything
  function handleOnChange (event) {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          name='name'
          id='name'
          placeholder='Enter Your Name'
          //   onChange={handleOnChange}

          onChange={event => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value
            })
          }}
        />

        <input
          value={formData.email}
          type='email'
          name='email'
          id='email'
          placeholder='Enter Your Email'
          //   you can also do this
          onChange={event => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value
            })
          }}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormComponent
