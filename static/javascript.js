let colors = [
    "color: rgba(220, 51, 206, 1);",
    "color: rgba(51, 220, 189, 1);",
    "color: rgba(220, 186, 51, 1);",
    "color: rgba(220, 51, 51, 1);",
    "color: rgba(51, 79, 220, 1);",
    "color: rgba(88, 220, 51, 1);",
    "color: rgba(220, 51, 206, 1);",
    "color: rgba(51, 220, 189, 1);",
    "color: rgba(220, 186, 51, 1);",
    "color: rgba(220, 51, 51, 1);",
    "color: rgba(51, 79, 220, 1);",
    "color: rgba(88, 220, 51, 1);",
]


let shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let createAndAppendElements = (containerName, count, newTagId, newTagName, newTagClassName, style) => {
    const container = document.querySelector(containerName);
    for (let i = 0; i < count; i++) {
        const newElement = document.createElement(newTagName);
        newElement.className = newTagClassName
        newElement.id = newTagId
        if (newTagName === 'p') {
            newElement.textContent = '2tieatie';
        }
        if (style) {
            newElement.style = style
        }
        container.appendChild(newElement);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const numbersArray = Array.from({ length: 11 }, (_, index) => index + 15);
    const shuffledArray = shuffleArray(numbersArray);
    const shuffledColors = shuffleArray(colors)
    console.log(window.innerWidth)
    const n = window.innerWidth / 400 - 1
    let side
    for (let i = -1; i < 10; i++) {
        console.log(i % 2)
        if (i % 2) {
            side = 'right'
        } else {
            side = 'left'
        }
        createAndAppendElements('.running-lines', 1, `t-f-${i}`, 'div', 'ticker-wrapper__first-half',
            `top: ${i * 10}vh;
                  animation: ${side} ${shuffledArray[i + 1]}s infinite linear forwards;
                  ${shuffledColors[i+1]}
                `)
        createAndAppendElements('.running-lines', 1, `t-s-${i}`, 'div', 'ticker-wrapper__second-half',
            `top: ${i * 10}vh;
                  animation: ${side} ${shuffledArray[i + 1]}s infinite linear forwards;
                  animation-delay: ${shuffledArray[i + 1]/2}s;
                  ${shuffledColors[i+1]}
                `)
        createAndAppendElements(`#t-f-${i}`, n, `t-l-${i}`, 'p', 'line-content');
        createAndAppendElements(`#t-s-${i}`, n, `t-l-${i}`, 'p', 'line-content');
    }


    const elementsHTML = document.getElementsByTagName('img')
    const elements = [...elementsHTML];
    elements.forEach( (element) => {
        element.addEventListener('mouseover', () => {
            element.style.height = "250px"
            element.style.width = "250px"
        })
        element.addEventListener('mouseleave', () => {
            element.style.height = "200px"
            element.style.width = "200px"
        })
    } )


})

