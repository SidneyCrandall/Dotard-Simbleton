import { getBusiness } from './BusinessData.js'

const agentCriteria = getBusiness();

export const findAgent = (agentResultsCriteria) => {
    return agentCriteria.find(agentObject => {
        return agentObject.purchasingAgent.nameFirst === agentResultsCriteria ||
            agentObject.purchasingAgent.companyName === agentResultsCriteria
    })
};