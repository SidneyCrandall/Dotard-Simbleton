export const nameBusiness = (businessObject) => {
    return `
        <section class="company">
            <h2 class="companyName">${businessObject.companyName}</h2>
            <div class="companyAddress"> ${businessObject.addressFullStreet}</div>
            <div class="companyAddress"> ${businessObject.addressCity}, ${businessObject.addressStateCode}, ${businessObject.addressZipCode}</div>
        </section>
    `
}