import { clusters } from './clusters'

export const cxNodes = { // customer experience nodes
  CL: {
    id: 16,
    name: 'Customer Lifecycle',
    value: 50,
    cluster: clusters.CX,
  },
  UX: {
    id: 17,
    name: 'User Experience',
    value: 50,
    cluster: clusters.CX,
  },
  AWARE: {
    id: 18,
    name: 'Awareness',
    value: 30,
    cluster: clusters.CX,
  },
  ENGAGE: {
    id: 19,
    name: 'Engagement',
    value: 30,
    cluster: clusters.CX,
  },
  EVAL: {
    id: 20,
    name: 'Evaluation',
    value: 30,
    cluster: clusters.CX,
  },
  PURCH: {
    id: 21,
    name: 'Purchase',
    value: 30,
    cluster: clusters.CX,
  },
  EXP: {
    id: 22,
    name: 'Experience',
    value: 30,
    cluster: clusters.CX,
  },
  BOND: {
    id: 23,
    name: 'Bonding',
    value: 30,
    cluster: clusters.CX,
  },
  USFL: {
    id: 24,
    name: 'Useful',
    value: 30,
    cluster: clusters.CX,
  },
  USABL: {
    id: 25,
    name: 'Useable',
    value: 30,
    cluster: clusters.CX,
  },
  DES: {
    id: 26,
    name: 'Desirable',
    value: 30,
    cluster: clusters.CX,
  },
  FIND: {
    id: 27,
    name: 'Findable',
    value: 30,
    cluster: clusters.CX,
  },
  ACC: {
    id: 28,
    name: 'Accessible',
    value: 30,
    cluster: clusters.CX,
  },
  CRED: {
    id: 29,
    name: 'Credible',
    value: 30,
    cluster: clusters.CX,
  },
  VAL: {
    id: 30,
    name: 'Valuable',
    value: 30,
    cluster: clusters.CX,
  },
}

const ownId = 'CX_Cluster'

export const cxClusterConfig = {
  id: ownId,
  name: 'Customer Experience',
  options: {
    joinCondition: function (opts) {
      return opts.cluster === clusters.CX;
    },
    clusterNodeProperties: {
      id: ownId,
      borderWidth: 3,
      color: 'rgb(103, 183, 220)',
      shape: 'dot',
      value: 90,
      label: 'Customer Experience',
      ...{x: 445, y: 0},
    },
    clusterEdgeProperties: {
      color: {
        inherit: 'from',
        opacity: 0.3,
      },
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 0.1,
          type: "arrow"
        },
      },
      arrowStrikethrough: false,
      smooth: {
        enabled: true,
        type: 'curvedCW',
        forceDirection: 'none',
        roundness: 0.17
      },
      scaling: {
        min: 4,
        max: 24
      },
    }
  }
}