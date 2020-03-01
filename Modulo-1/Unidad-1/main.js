console.log('documento cargado')

function checkearUno(checkbox) {

    var checkboxes = document.getElementsByName('plan')

    checkboxes.forEach((item) => {

        item !== checkbox ? item.checked = false : item.checked = true;
        
    })
    
}
