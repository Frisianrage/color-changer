let colors = ['Red', 'SpringGreen', 'Yellow', 'Silver', 'Lavender', 'MidnightBlue', 'Aqua', 'Fuchsia', 'Lime']

const colorChange = () => {

    //change of color outside the container
    const firstNumber = Math.floor(Math.random()*10)
    const bodyColor = colors[firstNumber]
    document.querySelector('body').style.backgroundColor = bodyColor

    //change of color inside the container
    const secondNumber = Math.floor(Math.random()*10)
    const containerColor = colors[secondNumber]
    document.getElementById('container').style.backgroundColor = containerColor
}


const button = document.getElementById('btn')
button.addEventListener('click', colorChange)