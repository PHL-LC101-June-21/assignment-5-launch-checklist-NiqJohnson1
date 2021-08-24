// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // const mission = document.querySelector("div[data-testid=missionTarget]")
    missionTarget.innerHTML =
        ` <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="">`


}


function validateInput(testInput) {
    // validateInput() should take in a string as a parameter and return 
    // "Empty", "Not a Number", or "Is a Number" as appropriate.
    if (testInput === "") {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number'
    } else {
        return 'Is a Number'
    }

    // let pilot = document.querySelector("input[name=pilotName]");
    // let copilot = document.querySelector("input[name=copilotName]");
    // let fuelLevel = document.querySelector("input[name=fuelLevel]");
    // let cargoMass = document.querySelector("input[name=cargoMass]");

    // let valPilot = validateInput(pilot);
    // let valCopilot = validateInput(copilot);
    // let valfuelLevel = validateInput(fuelLevel);
    // let valcargoMass = validateInput(cargoMass);

    // if (pilot === "Empty" || copilot === "Empty" || fuelLevel === "Empty" || cargoMass === "Empty") {
    //     alert("All fields are required!");
    //     form.preventdefault()
    // } else if (valfuelLevel === 'Not a Number' || valcargoMass === 'Not a Number') {
    //     alert("Number values are required for Fuel and Cargo levels.");
    //     form.preventdefault()
    // } else if (!isNaN(valPilot) || !isNaN(valCopilot)) {
    //     alert("Text values are required for this field.")
    // }


};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let valPilot = validateInput(pilot);
    let valCopilot = validateInput(copilot);
    let valfuelLevel = validateInput(fuelLevel);
    let valcargoMass = validateInput(cargoMass);

    if (valPilot === "Empty" || valCopilot === "Empty" || valfuelLevel === "Empty" || valcargoMass === "Empty") {
        alert("All fields are required!");
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


    fuelLevel = validateInput(fuelLevel);
    let launchStatus = document.querySelector("h2[id=launchStatus]")

    if (fuelLevel < 10000) {
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle not ready for Launch';
        fuelStatus.innerHTML = 'Fuel levels are too low launch';
        launchStatus.style.color = 'red';
    } else if (cargoMass > 10000) {
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle not ready for Launch';
        cargoStatus.innerHTML = 'Too much cargo mass for the shuttle to launch';
        launchStatus.style.color = 'red';
    } else {
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'The Shuttle is ready for Launch';
        cargoStatus.innerHTML = 'Cargo mass is acceptable to launch';
        fuelStatus.innerHTML = 'Fuel level is ready to launch';
        launchStatus.style.color = 'green';
    }
}

async function myFetch() {
};

let planetsReturned = fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    console.log(response);

    planetsReturned = fetch().then(function (response) {
    });

    return planetsReturned
});

function pickPlanet(planets) {
    // pick a random planet from the array
    // Math.random for index
}
formSubmission()
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
