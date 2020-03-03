console.log('documento cargado')

// variables globales // si bien las variables globales son una mala idea, en este caso las uso para lograr el funcionamiento del mockup, utilizando el scope global.

var text; 

var overlay;

//=============== FUNCIÓN PRINCIPAL ================//

function handleSubmit(e){
 
    e.preventDefault()

    var form = document.forms['contactForm']
    
    var inputs = Object.values(form).filter(item => item['name']) 
    
    var values = {}
   
    overlay = document.getElementById('overlay') 

    text = document.createElement('div')

    text.setAttribute('id','text')

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
    
    text.innerHTML = `
                 <h3> &#10024;  Felicitaciones!! mensaje enviado! &#10024; </h3> 
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

    form.reset()

}

//=================== FUNCIONES SECUNDARIAS =====================//


//Función para apagar el overlay -- fuente w3school --

function off(){
     document.getElementById("overlay").style.display = "none"
     overlay.removeChild(text)
}


//Esta función permite utilizar inputs de tipo checkbox como si furan de tipo radio

function checkearUno(checkbox) {

    var checkboxes = document.getElementsByName('plan')

    checkboxes.forEach((item) => {

        item !== checkbox ? item.checked = false : item.checked = true;
        
    })
    
}

