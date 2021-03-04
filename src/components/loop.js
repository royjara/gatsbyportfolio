let outer = document.querySelector("#outer")
let content = document.querySelector("#content");

repeatContent(content, outer.offsetWidth);

function repeatContent(el, till) {
    let html = el.innerHTML;
    let counter= 0; // prevents infinite loop

    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}

let el = outer.querySelector('#loop');
el.innerHTML = el.innerHTML + el.innerHTML;