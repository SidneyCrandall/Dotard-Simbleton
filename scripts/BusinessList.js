import { getBusiness, newyorkCompaniesfiltered, manufacturingFiltered, purchasingAgents } from "./BusinessData.js";
import { nameBusiness, agentNames } from "./Business.js";
import { findAgent } from "./findAgent.js"

const contentTarget = document.querySelector("#businessList");
const contentTarget1 = document.querySelector(".businessList--newYork");
const contentTarget2 = document.querySelector(".businessList--manufacturing");
const contentTarget3 = document.querySelector(".agents");
const contentTarget4 = document.querySelector(".foundCompanies");

const agentSearchInput = document.querySelector("#companySearch")
agentSearchInput.addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
        const agentResults = findAgent(keyPressEvent.target.value)
        contentTarget4.innerHTML = nameBusiness(agentResults)
    }
})


export const publishBuisnessList = () => {
    const businessArray = getBusiness();
    const filteredArray1 = newyorkCompaniesfiltered
    const filteredArray2 = manufacturingFiltered

    contentTarget.innerHTML = `<h1> Active Businesses </h1>`
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += nameBusiness(businessObject)
        }
    );
    // <h3> New York Based Companies </h3>
    contentTarget1.innerHTML = `<h3> New York Based Companies </h3>`
    filteredArray1.forEach(
        (businessObject) => {
            contentTarget1.innerHTML += nameBusiness(businessObject)
        }

    );

    contentTarget2.innerHTML = `<h4> Manufacturing Companies </h4>`
    filteredArray2.forEach(
        (businessObject) => {
            contentTarget2.innerHTML += nameBusiness(businessObject)
        }
    );
    contentTarget3.innerHTML = `<h5> Purchasing Agents </h5>`
    purchasingAgents.forEach(
        (businessObject) => {
            contentTarget3.innerHTML += agentNames(businessObject)
        }
    );
}