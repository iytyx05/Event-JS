// Задание №1
// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// w - white;
// SHIFT + B - black;
// SHIFT + G - gray;
// let body = document.querySelector("body");
// let btn1 = document.querySelector("#btn1")
// let btn2 = document.querySelector("#btn2")
// let btn3 = document.querySelector("#btn3")
// let btn4 = document.querySelector("#btn4")
// btn1.addEventListener("click", () => {
//     body.style.backgroundColor = "red"
// })
// btn2.addEventListener("click", () => {
//     body.style.backgroundColor = "green"
// })
// btn3.addEventListener("click", () => {
//     body.style.backgroundColor = "blue"
// })
// btn4.addEventListener("click", () => {
//     body.style.backgroundColor = "white"
// })
// window.addEventListener("keydown", (e) => {
//     console.log(`${e.key} + ${e.key}`)
//     if(e.key == "B" && e.shiftKey){
//     body.style.backgroundColor = "black" 
//     }       
// })

// window.addEventListener("keydown", (e) => {
//     console.log(`${e.key} + ${e.key}`)
//     if(e.key == "G" && e.shiftKey){
//     body.style.backgroundColor = "gray" 
//     }       
// })

// Задание №2
// Создайте переменную let i=0, по нажатию
// на кнопку выводите в консоль переменную i
// и увеличивайте её в 2 раза;
// let btn5 = document.querySelector("#btn5")
// let i = 1;
// function clickBtn() {
//     i *= 2
//     console.log(i)
// }

// btn5.addEventListener("click", clickBtn)



// Задание №3
// Создайте div размером 500px * 500px,
// по нажатию на неё выводите в консоль
// позицию места куда вы нажали
// относительно div- а;
// let div = document.createElement('div')
// let body = document.querySelector("body")
// div.style.width = "500px"
// div.style.height = "500px"
// div.style.border = "solid black 1px"
// body.append(div)


// div.addEventListener("click", (e) => {
//     console.log(`div - ${e.clientX} and ${e.clientY}`)
// })


// Задание №4
// Создайте input type color.
// При изменении инпута меняйте цвет
// заднего фона body на значение
// из этого инпута
// let inp = document.querySelector("#inp")
// let body = document.querySelector("body")
// inp.addEventListener("change", (e) => {
//     body.style.backgroundColor = inp.value
// })