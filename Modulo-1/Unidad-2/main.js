//======================================================================

/**
 * 
 * Function 1- calcular
 * 
 * @param {*} n1 
 * @param {*} operador 
 * @param {*} n2
 *  
 * Los tres parametros que recibe son el primer valor, el operador y el segundo
 * valor, que conformarán la operación, y se implementa en la funcion 
 * createResultString() si se detecta que el tipo de tecla es un operador o la
 * tecla '=' para calcular generando un string con valor numérico de la
 * operación. 
 * 
 */
    const calcular = (n1, operador, n2) => {
          const primerNum = parseFloat(n1)
          const segundoNum = parseFloat(n2)
          if (operador === 'sumar') return primerNum + segundoNum
          if (operador === 'restar') return primerNum - segundoNum
          if (operador === 'multiplicar') return primerNum * segundoNum
          if (operador === 'dividir') return primerNum / segundoNum
    }
 
//=============================================================================

/**
 * Funcion 2- getKeyType
 * 
 * @param {*} key 
 * 
 * Define el tipo de tecla en base al atributo data-action y la tecla obtenienda por parametro 
 * asignado con el atributo dataset el atributo personalizado a la tecla.
 * Es implementada en createResultString() para obtener el tipo de tecla y en base al tipo de tecla
 * obtenido generar el resultado, y en updateCalculatorState() para obtener el valor de la tecla y en
 * base a este setear el valor del atributo data-previous-key-type del elemento calculadora. 
 *  
 * 
 */

const getKeyType = key => {
  const { action } = key.dataset
  if (!action && key.type !== 'text') return 'numero'
  if (!action && key.type === 'text') return 'input'
  if (
    action === 'sumar' ||
    action === 'restar' ||
    action === 'multiplicar' ||
    action === 'dividir'
  ) return 'operador'
 
  return action
}

//============================================================================

/**
 * Función 3-createResultString
 * 
 * @param {*} key 
 * @param {*} numeroEnPantalla 
 * @param {*} state 
 * 
 * Recibe 3 parametros, el primero, key es la tecla presionada, dicho valor es almacenado
 * en la variable KeyContent y KeyType. El atributo numeroEnPantalla es utilizado como 
 * condicional y valor de retorno cuando es llamada la función. El atributo state
 * almacena 4 valores utilizados para definir el resultado devuelt segun los valores que toman los
 * atributos data-primer-valor, data-segundo-valor, data-operador y 
 * data-previous-key-type.  
 * Esta función es llamada en la "funcion principal" que escucha el evento click sobre cada tecla
 * recibiendo el target del evento, el numero en pantalla y los atributos dataset del elemento calculadora
 * 
 */

const createResultString = (key, numeroEnPantalla, state) => {
  const keyContent = key.textContent
  const keyValue = key.value
  const keyType = getKeyType(key)
  const {
    primerValor,
    operador,
    segundoValor,
    previousKeyType
  } = state

  if (keyType === 'numero') {
    return numeroEnPantalla === '0' ||
      previousKeyType === 'operador' ||
      previousKeyType === 'calcular'
      ? keyContent
      : numeroEnPantalla + keyContent 
  }

  if(keyType === 'input'){
      if(numeroEnPantalla === '0' ||
         previousKeyType === 'operador' ||
         previousKeyType === 'calcular') {  
            return parseInt(keyValue) || 0 
       } else {
            return numeroEnPantalla + parseInt(keyValue) 
      } 

  }

  if (keyType === 'decimal') {
    if (!numeroEnPantalla.includes('.')) return numeroEnPantalla + '.'
    if (previousKeyType === 'operador' || previousKeyType === 'calcular') return '0.'
    return numeroEnPantalla
  }

  if (keyType === 'operador') {
    return primerValor &&
      operador &&
      previousKeyType !== 'operador' &&
      previousKeyType !== 'calcular'
      ? calcular(primerValor, operador, numeroEnPantalla)
      : numeroEnPantalla
  }

  if (keyType === 'borrar') return 0

  if (keyType === 'calcular') {
    return primerValor
        ? previousKeyType === 'calcular'
        ? calcular(numeroEnPantalla, operador, segundoValor)
        : calcular(primerValor, operador, numeroEnPantalla)
      : numeroEnPantalla
  }
  
}

//======================================================================================

/**
 * 
 * Función 4-updateCalculatorState
 * 
 * @param {*} key 
 * @param {*} calculadora 
 * @param {*} valorCalculado 
 * @param {*} numeroEnPantalla 
 * 
 * Función que recibe 4 parametros, el primero representa la tecla, el segundo representa 
 * el elemento calculadora que contiene la pantalla y las teclas, el cual va a ser utilizado 
 * como referente para definir el output en pantalla. El parametro valorCalculado es un string
 * al igual que numeroEnPantalla y ambos valores son el output en pantalla, se mostrará uno
 * o el otro dependiendo del valor de dataset del parametro calculadora.
 * Es implementada en el evento principal que escucha el click de las teclas.
 * 
 */

const updateCalculatorState = (key, calculadora, valorCalculado, numeroEnPantalla) => {
  const keyType = getKeyType(key) 
  const {
    primerValor,
    operador,
    segundoValor,
    previousKeyType
  } = calculadora.dataset

  calculadora.dataset.previousKeyType = keyType

  if (keyType === 'operador') {
    calculadora.dataset.operador = key.dataset.action
    calculadora.dataset.primerValor = primerValor && operador && previousKeyType !== 'operador' && previousKeyType !== 'calcular'
      ? valorCalculado : numeroEnPantalla
  }

  if (keyType === 'calcular') {
    calculadora.dataset.segundoValor = primerValor && previousKeyType === 'calcular'
      ? segundoValor
      : numeroEnPantalla
  }

  if (keyType === 'borrar' && key.textContent === 'AC') {
        calculadora.dataset.primerValor = ''
        calculadora.dataset.segundoValor = ''
        calculadora.dataset.operador = ''
        calculadora.dataset.previousKeyType = ''
   }
}

//=====================================================================================

/**
 * Función 5-updateVisualState
 * 
 * @param {*} key 
 * @param {*} calculadora 
 * 
 * Recibe 2 parametros, el primero key que representa el tipo de tecla y calculadora que
 * para representar el elemetno calculadora de la vista.
 * La función se encarga de actualizar la vista de la calculadora como el botón de borrar
 * y añade una clase 'is-depressed' al botón de tipo operador si este es presionado y la
 * elimina en el momento que cualquier otro botón es presionado incluso otro operador.
 * 
 */
const updateVisualState = (key, calculadora) => {

  const keyType = getKeyType(key)

  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed')) 

  if (keyType === 'operador') key.classList.add('is-depressed')
  if (keyType === 'borrar' && key.textContent !== 'AC') key.textContent = 'AC'
  if (keyType !== 'borrar') {
      const clearButton = calculadora.querySelector('[data-action = borrar]')
      clearButton.textContent = 'CE'
  }
}

//=====================================================================================

const calculadora = document.querySelector('.calculadora')
const screen = calculadora.querySelector('.screen')
const keys = calculadora.querySelector('.keys')
const form = calculadora.querySelector('.formulario')

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return

  if(e.target.matches('button')){
    const key = e.target
    const numeroEnPantalla = screen.textContent
    const resultString = createResultString(key, numeroEnPantalla, calculadora.dataset)
  
    screen.textContent = resultString 
    updateCalculatorState(key, calculadora, resultString, numeroEnPantalla)
    updateVisualState(key, calculadora)

    //debug
    //console.log(createResultString(key, numeroEnPantalla, calculadora.dataset))
  }
  
})

form.addEventListener('change',e=>{
  if (!e.target.matches('input')) return
    const key = e.target
    const numeroEnPantalla = screen.textContent
    const resultString = createResultString(key, numeroEnPantalla, calculadora.dataset)

    screen.textContent = resultString 
    updateCalculatorState(key, calculadora, resultString, numeroEnPantalla)
    updateVisualState(key, calculadora)
    //debug
     /**console.log() */

})

//======================================================================================
