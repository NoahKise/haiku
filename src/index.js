import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Haiku, masterFunction } from "./haiku.js";

function handlePoemCheck(e) {
    e.preventDefault();
    const userPoem = document.getElementById('haikuInput').value;
    const userHaikuObject = new Haiku(userPoem);
    const newSyllableFinalCount = masterFunction(userHaikuObject.haikuPoemArray());
    const divResult = document.getElementById('result');
    let response;
    if (newSyllableFinalCount === 17) {
        response = "You have a haiku!";
    } else {
        response = "Your poem has " + newSyllableFinalCount + " syllables. NOT A HAIKU";
    }
    const pResponse = document.createElement("p");
    pResponse.append(response);
    divResult.append(pResponse);
}

document.getElementById("haiku").addEventListener("submit", handlePoemCheck);
