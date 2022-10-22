import { clusters } from './clusters'

export const irNodes = { // customer experience nodes
  NOSALE: {
    id: 31,
    name: 'Increased Number of Sales',
    cluster: clusters.INCREV,
  },
  CUSTENG: {
    id: 32,
    name: 'Customer Engagement',
    cluster: clusters.INCREV,
  },
  CUSTLOYL: {
    id: 33,
    name: 'Customer Loyalty',
    cluster: clusters.INCREV,
  },
  RECOM: {
    id: 34,
    name: 'Recommendations',
    cluster: clusters.INCREV,
  },
  FEED: {
    id: 35,
    name: 'Recieving feedback',
    cluster: clusters.INCREV,
  },
  PROFIT: {
    id: 36,
    name: 'Profitability',
    cluster: clusters.INCREV,
  },
  SERVICE: {
    id: 37,
    name: 'New Services',
    cluster: clusters.INCREV,
  },
  MARKET: {
    id: 38,
    name: 'New Markets',
    cluster: clusters.INCREV,
  }
}

const ownId = 'IR_Cluster'

export const irClusterConfig = {
  id: ownId,
  name: 'Increase Revenue',
  options: {
    joinCondition: function (opts) {
      return opts.cluster === clusters.INCREV;
    },
    clusterNodeProperties: {
      id: ownId,
      borderWidth: 3,
      color: 'rgb(103, 220, 117)',
      shape: 'dot',
      value: 90,
      label: 'Increase Revenue',
      cluster: clusters.INCREV,
      ...{ x: -165, y: 0 },
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