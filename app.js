document.querySelector("section .esas .asagi .items").style.display = "none";
let a = 0;
let clickSayi = 0;
let arr = [];

document.querySelector("section .esas .asagi .div1 button").addEventListener("click", function (e) {
    e.preventDefault();
    clickSayi++;
    if (clickSayi % 2 == 0) {
        document.querySelector("section .esas .asagi .div1 .add").style.display = "block";
    };
    if (document.querySelector("section .esas .asagi .div1 input").value !== "" && document.querySelector("section .esas .asagi .div1 input").value.trim() != "") {
        document.querySelector("section .esas .asagi .items").style.display = "block";
        a++;
        document.querySelector("section .asagi .items").innerHTML += (`
        <div class="item">
            <div class="divide">
                <span>${a}</span> <p>${document.querySelector("section .esas .asagi .div1 input").value}</p>
            </div>
            <i onclick="remove(this)" class="fa-solid fa-x"></i>
        </div>
        `);
        arr.push(document.querySelector("section .esas .asagi .div1 input").value);
        document.querySelector("section .esas .asagi .div1 input").value = "";
        document.querySelector("section .esas .asagi .div1 .add").style.display = "none";
    }
    else {
        document.querySelector("section .esas .asagi .div1 input").value = "";
        clickSayi = 0;
    };
});

function remove(x) {
    x.parentElement.remove();
    a = 0;
    document.querySelectorAll("section .items .item span").forEach(f => {
        a++;
        f.textContent = a;
    });
    if (document.querySelector("section .items").innerText == "") {
        document.querySelector("section .esas .asagi .items").style.display = "none";

    }
    else {
        document.querySelector("section .esas .asagi .items").style.display = "block";
    };
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x.previousElementSibling.querySelector("p").textContent) {
            arr.splice(i, 1);
            break;
        };
    };
};

document.querySelector("section .div1 .add .fa-x").addEventListener("click", function () {
    document.querySelector("section input").value = "";
});

document.querySelector("section .fa-arrow-down").addEventListener("click", function () {
    document.querySelectorAll("section .items p").forEach(f => {
        f.textContent = "";
    });
    if (document.querySelector("section .nese i").classList.contains("fa-arrow-up") == true) {
        document.querySelector("section .nese i").classList.remove("fa-arrow-up");
        document.querySelector("section .nese i").classList.add("fa-arrow-down");
        arr.sort().forEach((element, index) => {
            if (index < document.querySelectorAll(".items p").length) {
                document.querySelectorAll(".items p")[index].textContent = element;
            };
        });
    }
    else if (document.querySelector("section .nese i").classList.contains("fa-arrow-up") == false) {
        document.querySelector("section .nese i").classList.add("fa-arrow-up");
        document.querySelector("section .nese i").classList.remove("fa-arrow-down");
        arr.sort().reverse().forEach((element, index) => {
            if (index < document.querySelectorAll(".items p").length) {
                document.querySelectorAll(".items p")[index].textContent = element;
            };
        });
    };
});