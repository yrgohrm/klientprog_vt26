const pElems = document.getElementsByTagName('p');

let emptyCount = 0;
for (const elem of pElems) {
    if (elem.innerText.length === 0) {
        emptyCount++;
    }
}

console.log("Antal tomma: " + emptyCount);
