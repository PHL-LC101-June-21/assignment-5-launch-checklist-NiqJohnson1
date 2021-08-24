// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        const planet = pickPlanet(listedPlanets);
        addDestinationInfo(planet)
    })



    let form = document.querySelector("form");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        const pilotValue = pilot.value;
        const copilotValue = copilot.value;
        const fuelLevelValue = fuelLevel.value;
        const cargoMassValue = cargoMass.value;
        let list = document.getElementById('faultyItems')

        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue)

    });
});
