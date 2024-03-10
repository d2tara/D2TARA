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
        explanation: 'Part of the asset identification task. Identify a damage scenario for each compromised cybersecurity asset of the item.',
        kind: Capability.DAMAGE
    },{
        name: 'Impact Rating',
        explanation: 'Determine the impact of each damage scenario in the Safety (S), Financial (F), Operational (O), and Privacy (P) categories as a rating.',
        kind: Capability.IMPACT
    },{
        name: 'Attack Path Analysis',
        explanation: 'Identify the attack paths that implement each threat scenario. Attack path analysis can be done top-down in an attack tree analysis, or bottom-up by starting with known vulnerabilities and weaknesses, which are either discovered in a vulnerability analysis or publicly disclosed.',
        kind: Capability.ATTACK
    },{
        name: 'Feasibility Rating',
        explanation: 'Determine the attack feasibility for each attack path.',
        kind: Capability.FEASIB
    },{
        name: 'Risk Treatment Decision',
        explanation: 'Determine a risk treatment option for each threat scenario by considering its calculated risk value. The available options are to avoid, reduce, share, or retain the risk. Avoiding the risk results in an item adjustment to remove the source of the risk. All other options require the specification of cybersecurity goals.',
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
        question: 'Data sources have not yet been considered. TARA is performed on the basis of expert knowledge.',
        color: '#eb4034'
    },{
        name: 'Ad hoc',
        question: 'Have you retrieved information from external data sources on an ad hoc basis?',
        color: '#eb4034'
    },{
        name: 'Completeness',
        question: 'Did you use relevant external data sources while ensuring completeness of information?',
        color: '#eb8f34'
    },{
        name: 'Integration',
        question: 'Are relevant data sources integrated into the TARA process so that you can easily access and process the results?',
        color: '#dfeb34'
    },{
        name: 'Augmentation',
        question: 'Have you established a monitoring mechanism to scan data sources for information that could lead to a reassessment of risk or a redefinition of risk treatment options?',
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