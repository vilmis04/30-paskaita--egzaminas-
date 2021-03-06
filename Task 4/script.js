/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => {
            data.forEach(carMaker => {

                const card = createCard();
                const brandContainer = createContainer();
                const modelContainer = createContainer();

                brandContainer.textContent = carMaker.brand;
                brandContainer.style.width = "20rem";
                brandContainer.style.fontSize = "2rem";
                brandContainer.style.fontWeight = "bold";

                carMaker.models.forEach(model => {
                    const container = document.createElement("div");
                    modelContainer.style.width = "20rem";
                    container.textContent = model;
                    modelContainer.append(container);
                });

                card.style.border = "1px solid black";
                card.style.borderRadius = "10px";
                card.style.padding = "1rem";
                card.append(brandContainer, modelContainer);

                document.querySelector("#output").append(card);
            });
     })
        .catch(err => console.log(err));

function createCard () {
    const card = document.createElement("div");
    card.style.display = "flex";
    card.style.justifyContent = "space-between";
    card.style.alignItems = "center";
    card.style.margin = "3rem auto";

    return card;
}

function createContainer() {
    const elem = document.createElement("div");
    elem.style.display = "flex";
    elem.style.flexDirection = "column";
    elem.style.justifyContent = "center";
    elem.style.alignItems = "center";
    elem.style.margin = "0 3rem";
    return elem;
}