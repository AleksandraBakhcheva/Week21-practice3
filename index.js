let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    sendForm();
});

function sendForm() {
    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: new FormData(form)
        })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log("При отправке данных произошла ошибка! Пожалуйста, повторите снова."));
}