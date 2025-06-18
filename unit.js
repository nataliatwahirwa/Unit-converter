/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//Fetch the button, input and fields  element from html doc.
//Add event listener to convert button 
//retrieve the current value of an input field 
//length , volumne, mass should be function parameters 
//function to convert length , volume , mass - take input 
//diplay in the fields <p> tag

//round numbers to 3d.p
//Generate all conversions when user clicks 'Convert'
 

const convertBtn = document.getElementById("convert-btn")
let inputNumber = document.getElementById("input-el")
const lengthOutput = document.getElementById("length")
const volumeOutput = document.getElementById("volume")
const massOutput = document.getElementById("mass")

//inputNumber.value = retrieve the current value of an input field

convertBtn.addEventListener("click", function(){
    lengthOutput.textContent = `${inputNumber.value} meters = ${Number(inputNumber.value * 3.281).toFixed(3)} feet | 
    ${inputNumber.value} feet = ${Number(inputNumber.value / 3.281).toFixed(3)} meters `
    
    volumeOutput.textContent = `${inputNumber.value} litres = ${Number(inputNumber.value * 0.264 ).toFixed(3)} gallons | 
    ${inputNumber.value} gallons = ${Number(inputNumber.value / 0.264).toFixed(3)} litres `

    massOutput.textContent = `${inputNumber.value} kilos = ${Number(inputNumber.value * 2.204 ).toFixed(3)} pounds | 
    ${inputNumber.value} pounds = ${Number(inputNumber.value / 2.204).toFixed(3)} kilos `



})
