let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    sendForm();
});

let div = document.createElement("div");
div.style.color = "red";
document.querySelector("#catForm").append(div);

async function sendForm() {
    div.innerHTML = ``;
    try {
        await fetch("https://httpbin.org/post", {
        method: 'POST',
        body: new FormData(form)
        })
        .then(response => response.json())
        .then(user => {
        console.log(user);
        })
    }
    catch (error) {
        div.innerHTML = `<p>При отправке данных произошла ошибка! Пожалуйста, повторите снова.</p>`;
        console.log("При отправке данных произошла ошибка! Пожалуйста, повторите снова.");
        console.log(error.type);
        console.log(error.message);
    }
}