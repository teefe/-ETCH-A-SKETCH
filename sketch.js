const container = document.querySelector('.container');
const btn = document.querySelector('button');


let square = parseInt(prompt('Choose grid size btn 2 to 100'));
generateDivs(square);

btn.addEventListener('click',()=>{
    location.reload(true);
})

// Creating the div
function addElement (){
    const newDiv = document.createElement('div');
     newDiv.addEventListener('mouseover', ()=>{
         newDiv.style.backgroundColor = 'black';
     })
    container.appendChild(newDiv);
}
// The number of squares we need
function NumberOfSquares (amount){
    for (let index = 0; index < amount; index++) {
        addElement();
    }
}
// Divs genaration function
function generateDivs(amount) {
    let squares = amount*amount;
    NumberOfSquares(squares);
    container.style.cssText = `grid-template-columns: repeat(${amount},1fr);`
}
