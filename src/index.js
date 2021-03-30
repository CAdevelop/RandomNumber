import './normalize.css'
import './styles.css'

document.getElementById('action').addEventListener('click', ()=> {
    var min= parseInt(document.getElementById('min').value)
    var max= parseInt(document.getElementById('max').value)
    var result= random(min,max)
    document.getElementById('result').textContent= result
})

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }