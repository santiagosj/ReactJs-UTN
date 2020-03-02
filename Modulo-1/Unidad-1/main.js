console.log('documento cargado')

function handleSubmit(e){

    e.preventDefault()

    var form = document.forms['contactForm']
    
    var inputs = Object.values(form).filter(item => item['name']) 
    
    var values = {}

    var text = document.createElement('div')

    var overlay = document.getElementById('overlay')
   
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

    text.setAttribute('id','text')

    text.innerText = `Gracias por comunicarse con nosotros ${values.nombre} ${values.apellido}, usted eligió el plan: ${values.plan}, seguro no nos comunicaremos con usted para corroborar sus datos si su DNI no es este ${values.dni} y su numero no es el siguiente ${values.telefono}, utilizaremos su email ${values.email}, para enviarle publicidad e información que seguro no necesita.`

    overlay.appendChild(text)

    document.getElementById("overlay").style.display = "block"

    console.log(values)

    form.reset()
}

function off(){
     document.getElementById("overlay").style.display = "none"
}

function checkearUno(checkbox) {

    var checkboxes = document.getElementsByName('plan')

    checkboxes.forEach((item) => {

        item !== checkbox ? item.checked = false : item.checked = true;
        
    })
    
}
