window.scroll(0, 0);


let width = visualViewport.width;
let height = visualViewport.height;
console.log(width)
console.log(height)

let sections = document.querySelectorAll('section');

for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', (e) => {
        let step = (e.screenX > width / 2) ? 1 : -1;
        let x = width * (i + step);
        let y = height * (i + step);
        window.scroll(x, y);
        console.log(step, x, y)
    });
    sections[i].innerHTML += "<div class=\"arrow-wrapper\"> <div class=\"right arrow\"></div> </div> <div class=\"arrow-wrapper\"> <div class=\"left arrow\"></div> </div>";
}




