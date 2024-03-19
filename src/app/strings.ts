export enum Capability{
    DAMAGE,
    IMPACT,
    ATTACK,
    FEASIB,
    RISKTREAT
}

export const capabilities = [
    {
        name: 'Damage Scenarios Identification',
        explanation: 'Description: Part of the asset identification task. Identify a damage scenario for each compromised cybersecurity asset of the item. Expected input: damage description. Examples of external data sources: CWE, JVN, CAPEC, VulDB.',
        kind: Capability.DAMAGE
    },{
        name: 'Impact Rating',
        explanation: 'Description: Determine the impact of each damage scenario in the Safety, Financial, Operational, and Privacy categories as a rating. Expected input: impact ratings. Examples of external data sources: CVSS, NVD, JVN, CAPEC, VulDB.',
        kind: Capability.IMPACT
    },{
        name: 'Attack Path Analysis',
        explanation: 'Description: Identify the attack paths that implement each threat scenario. Expected input: tactics, techniques, and procedures (TTP). Examples of external data sources: ATT&CK, CAPEC, VulDB.',
        kind: Capability.ATTACK
    },{
        name: 'Feasibility Rating',
        explanation: 'Description: Determine the attack feasibility for each attack path. Expected input: feasibility rating. Examples of external data sources: CVSS, CWE, NVD, CAPEC, VulDB.',
        kind: Capability.FEASIB
    },{
        name: 'Risk Treatment Decision',
        explanation: 'Description: Determine a risk treatment option for each threat scenario by considering its calculated risk value. The available options are to avoid, reduce, share, or retain the risk. Expected input: mitigation and detection strategies. Examples of external data sources: CWE, ATT&CK, CAPEC, D3FEND, VulDB.',
        kind: Capability.RISKTREAT
    },
]

export enum CapabilityLevel{
    Undefined,
    Adhoc,
    Completeness,
    Integration,
    Augmentation
}

export const capabilityLevels = [
    {
        name: 'Undefined',
        question: 'No external data sources are used for this data-driven TARA section.',
        color: '#eb4034'
    },{
        name: 'Ad hoc',
        question: 'Do you use external data sources on an ad hoc basis for this data-driven TARA section?',
        color: '#eb4034'
    },{
        name: 'Standardization',
        question: 'Are you using a standard pool of data sources for this data-driven TARA section?',
        color: '#eb8f34'
    },{
        name: 'Integration',
        question: 'Is the pool of data sources integrated into the TARA creation process and accessible to this data-driven TARA section?',
        color: '#dfeb34'
    },{
        name: 'Augmentation',
        question: 'Is there a monitoring in place to scan data sources for information that could lead to a reassessment of risk or a redefinition of risk treatment options for this data-driven TARA section?',
        color: '#3aeb34'
    },
]

export enum MaturityLevel{
    None,
    Initial,
    Core,
    Extended,
    Visionary
  }

export const maturityLevels = [
    {
        name: 'None',
        explanation: '',
        kind: MaturityLevel.None
    },{
        name: 'Initial',
        explanation: '',
        kind: MaturityLevel.Initial
    },{
        name: 'Core',
        explanation: '',
        kind: MaturityLevel.Core
    },{
        name: 'Extended',
        explanation: '',
        kind: MaturityLevel.Extended
    },{
        name: 'Visionary',
        explanation: '',
        kind: MaturityLevel.Visionary
    }
]