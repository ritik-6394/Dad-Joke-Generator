const API_key = "iesSUmTcKQ8KqZ2stQ+MGg==KXq5A6HxQJ1q4BLJ";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const btnEl = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const options = {
    method: 'GET',
    headers: { 'X-Api-Key': API_key,},
};


async function getjoke(){
    try {
        jokeEL.innerText = "Updating";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Generates Joke";
        // console.log(data[0].joke)
        jokeEL.innerText = data[0].joke;

    } catch (error) {
        jokeEL.innerText = "An error happend , try agian later";
        btnEl.disabled = false;
        btnEl.innerText = "Generates Joke";
        console.log(error);        
    }   
}

btnEl.addEventListener("click", getjoke);