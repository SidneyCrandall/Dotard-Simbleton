import {getBusiness} from "./BusinessData.js"
import { nameBusiness } from "./Business.js";

const contentTarget = document.querySelector("#businessList")


export const publishBusinessList = () => {
 const businessArray = getBusiness()
     
 contentTarget.innerHTML = "<h1>Active Businesses</h1>";
    
     businessArray.forEach(
        (businessesObj) => {
            contentTarget.innerHTML += nameBusiness(businessesObj)
        }
    );
}
    
    
    
    //const nameBusiness = () => {