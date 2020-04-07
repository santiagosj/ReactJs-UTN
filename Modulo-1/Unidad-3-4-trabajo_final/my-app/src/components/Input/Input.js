import React from 'react'
import './Input.scss'

const Input = ({
    inputType,
    inputName,
    inputValue,
    inputPlaceholder,
    inputMinLength,
    inputMaxLength,
    labelName
  }) => {
    return (
      
            <label htmlFor={inputType} className="label--input">
            
                 {labelName} <br/>

                        <input 
                            type={inputType} 
                            name={inputName} 
                            value={inputValue} 
                            placeholder={inputPlaceholder}
                            minLength={inputMinLength}
                            maxLength={inputMaxLength}
                        />
            </label>   
    )
}

export default Input

