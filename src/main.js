import './style.scss'
import './normalize.scss'

import { characters } from './data'

const button = document.querySelector(".main__button")
const image = document.querySelector(".card__image")
const text = document.querySelector(".card__text")
const card = document.querySelector(".card")
const counter = document.querySelector(".main__counter")
const lenCharacters = characters.length

let previousIndex = -1
const foundCharacters = new Set()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateCounter() {
  const foundCount = foundCharacters.size
  counter.textContent = `Найдено поздравлений: ${foundCount} / ${lenCharacters}`
  if (foundCharacters.size == lenCharacters) {
    counter.textContent = `🎉 Все поздравления собраны! 🎉`
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault()

  let randomIndex
  do {
    randomIndex = getRandomInt(0, lenCharacters - 1)
  } while (randomIndex === previousIndex)
  
  previousIndex = randomIndex

  const character = characters[randomIndex]

  foundCharacters.add(randomIndex)
  
  updateCounter()

  card.classList.add('card--hidden')
  
  setTimeout(() => {
    image.src = character.image
    image.alt = character.name
    text.textContent = character.text
    card.classList.remove('card--hidden')
  }, 300)
})

updateCounter()

