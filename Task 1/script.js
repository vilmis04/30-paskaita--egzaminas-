 /* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", (event)=> {
    event.preventDefault();
    const kg = Number(document.querySelector("#search").value);
    console.log(typeof kg);
    const converted = {
        "lb": kg * 2.2046,
        "g": kg / 0.0010000,
        "oz": kg * 35.274
    }

    const output = document.querySelector("#output");
    while (output.firstChild) output.firstChild.remove();
    Object.entries(converted).forEach(item => {
        const element = document.createElement("div");
        element.style.textAlign = "center";
        element.style.fontSize = "3rem";
        element.textContent = `${kg} kg = ${item[1]} ${item[0]}`;
        output.append(element);
    });
});