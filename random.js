console.log(Math.floor(Math.random()*100+1))
console.log(Math.floor(Math.random()*100+1))
console.log(Math.floor(Math.random()*1000+1))
console.log(Math.floor(Math.random()*1000+1))

const randomColor = Math.floor(Math.random()*16777215).toString(16);
// document.body.style.backgroundColor = "#" + randomColor;
console.log("#"+randomColor)
// color.innerHTML = "#" + randomColor;
let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    console.log(r,g,b)