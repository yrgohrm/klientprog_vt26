const userCount = prompt("Hur många?");
let count = Number(userCount);

if (count > 10) {
    count = 10;
}

for (let i = 0; i < count; ++i) {
    const p = document.createElement('p');
    p.innerText = `Lite fin text ${i}`;
    
    document.body.appendChild(p);
}