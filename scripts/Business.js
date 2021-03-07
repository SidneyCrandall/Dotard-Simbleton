export const nameBusiness = (businessObject) => {
    return `
        <div class="company">
        <fieldset>
            <h2 class="companyName">${businessObject.companyName}</h2>
            <div class="companyAddress">${businessObject.addressFullStreet}</div>
            <div class="companyAddress">${businessObject.addressCity}, ${businessObject.addressStateCode},${businessObject.addressZipCode} </div>
            </fieldset>
            </div>
            `
}
export const agentNames = (businessObject) => {
    return `
        <div class="company">
        <fieldset>
            <h2 class="agentName">${businessObject.agentName}</h2>
            <div class="companyAddress">${businessObject.company}, ${businessObject.phoneNumber} </div>
            </fieldset>
            </div>
            `
}