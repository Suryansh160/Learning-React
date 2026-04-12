import CommonInput from '../common-input'

const formTypes = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea'
}

function CommonForm ({
  formControls = [],
  formData,
  onHandleSubmit,
  setFormData,
  buttonText
}) {
  function renderFormElement (getCurrentElement) {
    let content = null

    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT: {
        content = (
          <CommonInput
            label={getCurrentElement.label}
            type={getCurrentElement.type}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            setFormData
            value={formData[getCurrentElement.name]}
            onChange={event => {
              setFormData({
                ...formData,
                [event.target.name]: event.target.value
              })
            }}
          />
        )

        break
      }

      default: {
        content = (
          <CommonInput
            label={getCurrentElement.label}
            type={getCurrentElement.type}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            setFormData
            value={formData[getCurrentElement.name]}
            onChange={event => {
              setFormData({
                ...formData,
                [event.target.name]: event.target.value
              })
            }}
          />
        )
      }
    }

    return content
  }
  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map(singleFormElementItem =>
            renderFormElement(singleFormElementItem)
          )
        : null}

      <div>
        <button type='submit' style={{ marginTop: '12px' }}>
          {buttonText || 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default CommonForm
