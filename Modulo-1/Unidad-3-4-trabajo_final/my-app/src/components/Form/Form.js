import React from 'react'
import Input from '../Input/Input'
import './Form.scss'

const forms = {
    signupInputs:[
        {name:"nombre",type:"text",label:"Nombre" ,placeholder:"¿Cuál es tu nombre?"},
        {name:"apellido",type:"text",label:"Apellido", placeholder:"¿Cuál es tu apellido?"},
        {name:"email",type:"email",label:"Email",placeholder:"¿Cuál es tu email?"},
        {name:"teléfono",type:"number",label:"Teléfono",placeholder:"¿Cuál es tu teléfono?"},
        {name:"password",type:"password",label:"Password", minLength:10,maxLength:20},
        {name:"password",type:"password",label:"Confirmar Password",minLength:10,maxLength:20},
        {name:"submit",type:"submit",value:"Envíar"},
    ],
    loginInputs:[
        {name:"email",type:"email",label:"Email",placeholder:"¿Cuál es tu email?"},
        {name:"password",type:"password",label:"Password", minLength:10,maxLength:20},
        {name:"submit",type:"submit",value:"Entrar"},
    ]
}


const Form = () => {

    return (
        <div className='form--container'>
           <div>
           <h2>Sign up</h2>
              <form >
                {forms.signupInputs.map((input,i) => (
                    <div key={i}>
                            <Input
                                labelName={input.label}
                                inputName={input.name}
                                inputType={input.type}
                                inputPlaceholder={input.placeholder}
                                inputMaxLength={input.maxLength}
                                inputMinLength={input.minLength}
                                inputValue={input.value}
                            />
                    </div>
                   ))}
                </form>
           </div>
            
            <div>
                <h2>Login</h2>
                    <form >
                    {forms.loginInputs.map((input,i) => (
                        <div key={i}>
                                <Input
                                    labelName={input.label}
                                    inputName={input.name}
                                    inputType={input.type}
                                    inputPlaceholder={input.placeholder}
                                    inputMaxLength={input.maxLength}
                                    inputMinLength={input.minLength}
                                    inputValue={input.value}
                                />
                        </div>
                    ))}
                    </form>
            </div>
           
        </div>
    )
}

export default Form
