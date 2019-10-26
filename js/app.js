

let cardOne = document.getElementById('one')
cardOne.addEventListener('click', removerNodo1)

function removerNodo1() {
      cardOne.remove(this)
}

let cardTwo = document.getElementById('two')
cardTwo.addEventListener('click', removerNodo2)

function removerNodo2() {
      cardTwo.remove(this)
}


let cardThree = document.getElementById('three')
cardThree.addEventListener('click', removerNodo3)

function removerNodo3() {
      cardThree.remove(this)
      // cardThree.removeChild(cardThree.childNodes[0])

}









    
