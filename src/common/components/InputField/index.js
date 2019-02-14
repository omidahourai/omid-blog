import React from 'react'

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const hasError = touched && error ? 'has-danger' : ''
  return (
    <div className={`form-group ${hasError}`}>
      <label>{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          className="form-control"
        />
        {touched && error && (
          <div className="form-control-feedback">{error}</div>
        )}
      </div>
    </div>
  )
}

export const renderErrors = errors => (
  <div className="alert alert-danger" role="alert">
    {errors.map((error, index) => (
      <span key={index}>{error.value}</span>
    ))}
  </div>
)
