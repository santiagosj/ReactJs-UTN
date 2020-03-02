console.log('documento cargado')

// variables globales 

var text; 

var overlay;

//=============== FUNCIÓN PRINCIPAL =======================//

function handleSubmit(e){

    e.preventDefault()

    var form = document.forms['contactForm']
    
    var inputs = Object.values(form).filter(item => item['name']) 
    
    var values = {}
   
    overlay = document.getElementById('overlay') 

   for(input of inputs){

       if(input.type == 'checkbox' && input.checked){
            values.plan = input.value  
       }else if(input.type == 'text' && input.name == 'nombre'){
           values.nombre = input.value
       }else if(input.name == 'apellido'){
            values.apellido = input.value
       }else if(input.name == 'dni' && input.type == 'number'){
            values.dni = input.value
       }else if(input.name == 'telefono' && input.type == 'number'){
            values.telefono = input.value
       }else if(input.name=='email'){
            values.email = input.value
       }
        
   }
    
    text = document.createElement('div')

    text.setAttribute('id','text')

    text.innerHTML = `
                 <h3> Felicitaciones!! mensaje enviado! </h3> 
                 <p>  Seguro no nos comunicamos con usted </p> 
                      Sus datos: <br>
                      Nombre: ${values.nombre}. <br>
                      Apellido: ${values.apellido} <br>
                      DNI: ${values.dni} <br>
                      Email: ${values.email} <br>
                      Teléfono: ${values.telefono} <br>
                      Plan de seguro: ${values.plan} <br>
                      `

    overlay.appendChild(text)

    document.getElementById("overlay").style.display = "block"

    console.log(values)

    form.reset()

}

//=================== FUNCIONES SECUNDARIAS =====================//

function off(){
     document.getElementById("overlay").style.display = "none"
     overlay.removeChild(text)
}

function checkearUno(checkbox) {

    var checkboxes = document.getElementsByName('plan')

    checkboxes.forEach((item) => {

        item !== checkbox ? item.checked = false : item.checked = true;
        
    })
    
}
