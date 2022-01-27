/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector("#btn").addEventListener("click", () => {
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => {
            document.querySelector("#message").remove();
            data.forEach(user => {
                const card = document.createElement("div");
                const login = document.createElement("div");
                const url = document.createElement("div");
                const textContainer = document.createElement("div");
                const avatar = new Image;

                avatar.src = user.avatar_url;
                avatar.style.width = "100px";
                login.textContent = `Login: ${user.login}`;
                url.textContent = `Avatar URL: ${user.avatar_url}`

                card.style.display = "flex";
                card.style.justifyContent = "space-between";
                card.style.alignItems = "center";
                card.style.padding = "1rem";
                card.style.width = "60%";
                card.style.margin = "0 auto";
                
                textContainer.append(login, url);
                card.append(avatar, textContainer);
                document.querySelector("#output").append(card);
            });
     })
        .catch(err => console.log(err));
});