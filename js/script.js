let timeoutId = null;

function fun1() {
    
    let rtl = document.getElementById("rtl").value;
    let rtr = document.getElementById("rtr").value;
    let rbr = document.getElementById("rbr").value;
    let rbl = document.getElementById("rbl").value;
    
    let block = document.getElementById("block");
    
    document.querySelector("#ttl").value = rtl + 'px';
    document.querySelector("#ttr").value = rtr + 'px';
    document.querySelector("#tbr").value = rbr + 'px';
    document.querySelector("#tbl").value = rbl + 'px';

    block.style.borderRadius = rtl + "px " +rtr + "px " +rbr + "px " +rbl + "px ";

    if (timeoutId !== null) {
        clearTimeout(timeoutId);
    }

    let hideBlock = block.querySelector(".hide-block");

    if (!hideBlock) {
        createNotification(); 
    } else {
        hideBlock.style.display = "block"; 
    }

    timeoutId = setTimeout(function () {
        hideBlock.style.display = "none"; 
        timeoutId = null; 
    }, 5000);
    hideBlock.style.display = "flex";
}

document.getElementById("rtl").addEventListener("input", fun1);
document.getElementById("rtr").addEventListener("input", fun1);
document.getElementById("rbr").addEventListener("input", fun1);
document.getElementById("rbl").addEventListener("input", fun1);

function createNotification() {
    const hideBlock = document.createElement("div");
    hideBlock.className = "hide-block";
    const h2 = document.createElement("h2");
    h2.className = "changed-item";
    h2.textContent = "Вы изменили фигуру!";
    hideBlock.appendChild(h2);

    let block = document.getElementById("block");
    block.appendChild(hideBlock);
}