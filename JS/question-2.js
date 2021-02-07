const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const dataContainer = document.querySelector(".result-container");

async function getInfo() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        const facts = data.results;

        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].name);

            if (i === 8) {
                break;
            }

            dataContainer.innerHTML += `<div class="testing">${facts[i].name}
        rating: ${facts[i].rating}
        </div>`;
        }

    } catch (error) {
        console.log("An error has accurred");
        dataContainer.innerHTML = errorMessage("An error occured when calling the API");
    }



}

getInfo();