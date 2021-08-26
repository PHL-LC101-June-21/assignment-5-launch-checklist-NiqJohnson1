// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML =
        ` <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;


}


function validateInput(testInput) {

    if (testInput === "") {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number'
    } else {
        return 'Is a Number'
    }
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let valPilot = validateInput(pilot);
    let valCopilot = validateInput(copilot);
    let valfuelLevel = validateInput(fuelLevel);
    let valcargoMass = validateInput(cargoMass);

    if (valPilot === "Empty" || valCopilot === "Empty" || valfuelLevel === "Empty" || valcargoMass === "Empty") {
        alert("All fields are required!");
        preventDefault();
    } else if (valCopilot === "Is a Number" || valPilot === "Is a Number") {
        alert("Invalid entry, please enter valid information in each field.");
        preventDefault();
    } else if (valfuelLevel === 'Not a Number' || valcargoMass === 'Not a Number') {
        alert("Number values are required for Fuel and Cargo levels.");
        preventDefault();
    }

    let pilotStatus = document.querySelector("li[data-testid='pilotStatus']");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

    let copilotStatus = document.querySelector("li[data-testid='copilotStatus']");
    copilotStatus.innerHTML = `CoPilot ${copilot} is ready for launch`;

    let fuelStatus = document.querySelector("li[data-testid='fuelStatus']")
    let cargoStatus = document.querySelector("li[data-testid='cargoStatus']")


    let launchStatus = document.querySelector("h2[id=launchStatus]")

    if (fuelLevel > 10000 && cargoMass < 10000) {
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'The Shuttle is ready for Launch';
        fuelStatus.innerHTML = 'Fuel level is ready to launch';
        cargoStatus.innerHTML = 'Cargo mass is acceptable to launch';
        launchStatus.style.color = 'green';
    } else if (fuelLevel < 10000 && cargoMass > 10000) {
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle not ready for Launch';
        fuelStatus.innerHTML = 'Fuel levels are too low to launch';
        cargoStatus.innerHTML = 'Too much cargo mass for the shuttle to launch';
        launchStatus.style.color = 'red';
    } else if (fuelLevel < 10000) {
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle not ready for Launch';
        fuelStatus.innerHTML = 'Fuel levels are too low to launch';
        launchStatus.style.color = 'red';
    } else if (cargoMass > 10000) {
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle not ready for Launch';
        cargoStatus.innerHTML = 'Too much cargo mass for the shuttle to launch';
        launchStatus.style.color = 'red';
    }

}

async function myFetch() {

    let planetsReturned = [];

    planetsReturned = fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        return response.json();
    });
    return planetsReturned;
};

function randomPlanet(limit) {
    return Math.floor(Math.random() * Math.floor(limit))
}

function pickPlanet(planets) {
    var index = randomPlanet(planets.length)
    return planets[index];

}
formSubmission()
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
