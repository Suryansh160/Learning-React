function CommonInput ({ label, onChange, type, name, value, placeholder, id }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || 'text'}
        name={name}
        id={id}
        placeholder={placeholder || 'Enter value here'}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default CommonInput
