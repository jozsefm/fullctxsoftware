import { Flex, Text, Image } from '@chakra-ui/react';
import { clusters } from './clusters';
import { cxClusterConfig, cxNodes } from './cx'
import { irClusterConfig, irNodes } from './ir';

const groups = {
  BV: {
    id: 1,
    size: 4,
    order: 1,
  },
  FIN: {
    id: 2,
    size: 4,
    order: 2
  },
  USER: {
    id: 3,
    size: 7,
    order: 3
  }
}

export const clnc = {
  CX: cxClusterConfig,
  INCREV: irClusterConfig,
}

export const mnc = { //nodeConfig
  INCREV: {
    id: 1,
    name: 'Increase Revenue',
    group: [groups.BV, 0],
  },
  PRTREV: {
    id: 2,
    name: 'Protect Revenue',
    group: [groups.BV, 1],
  },
  REDCOS: {
    id: 3,
    name: 'Reduce Costs',
    group: [groups.BV, 2],
  },
  AVDCOS:{
    id: 4,
    name: 'Avoid Costs',
    group: [groups.BV, 3],
  },
  CX: {
    id: 5,
    name: 'Customer Experience',
    group: [groups.FIN, 0],
  },
  PROD: {
    id: 6,
    name: 'Productivity',
    group: [groups.FIN, 1],
  },
  UTIL: {
    id: 7,
    name: 'Utilization',
    group: [groups.FIN, 2],
  },
  BUSOP: {
    id: 8,
    name: 'Business Opportunity',
    group: [groups.FIN, 3],
  },
  FUNC: {
    id: 9,
    name: 'Functionality',
    group: [groups.USER, 0],
  },
  UX: {
    id: 10,
    name: 'User Experience',
    group: [groups.USER, 1],
  },
  RELPERF: {
    id: 11,
    name: 'Release Performance',
    group: [groups.USER, 2],
  },
  PRC: {
    id: 12,
    name: 'Price',
    group: [groups.USER, 3],
  },
  SUP: {
    id: 13,
    name: 'Support',
    group: [groups.USER, 4],
  },
  FEED: {
    id: 14,
    name: 'Feedback',
    group: [groups.USER, 5],
  },
  COM: {
    id: 15,
    name: 'Community',
    group: [groups.USER, 6],
  },
}

export const openClusters = {
  [`${clnc.CX.id}`]: 'CX',
  [`${clnc.INCREV.id}`]: 'INCREV',
}

export const closeClusters = {
  [`${mnc.CX.id}`]: 'CX',
  [`${mnc.INCREV.id}`]: 'INCREV',
}

export const descriptions = {
  get [`${clnc.CX.id}`]() {
    return this[mnc.CX.id]
  },
  get [`${clnc.INCREV.id}`]() {
    return this[mnc.INCREV.id]
  }
}

export const createLink = (source, target, w, description) => {
  const id = `${source}-${target}`
  descriptions[id] = description
  return {
    id,
    from: `${source}`,
    to: `${target}`,
    value: w
  }
}

export const createNode = (node, description?) => {
  descriptions[node.id] = description
  return node
}

const LOG_IN = 'Only logged in users can see this description'
const DESCRIPTION = 'Most of the descriptions are under active development including this one. However you can already learn more about this topic from the book.'

const generateNodeTextComponent = (description?) => {
  return ({ loggedIn }) => <Flex direction='column' align='center' p='30px'>
    {loggedIn ? <>
      <Text>{description || DESCRIPTION}</Text>
      <Image
        src='/img/under-dev.svg'
        width={400}
        height={400}
        alt='Image of busy developer coding'
        pos='relative'
        top='-40px'
      />
    </> : <Text>{LOG_IN}</Text>}
  </Flex>
}

const generateNodeTitleComponent = (Title, titleOnlyLoggedIn?) => {
  return ({ loggedIn }) => <Flex direction='column' align='center'>
    {(!titleOnlyLoggedIn || loggedIn) ? <Text textAlign='center' fontSize='lg' fontWeight='bold' m='12px' color='#222838'><Title/></Text> : null}
  </Flex>
}

const LOGGEDOUT_NAME = ''

export const nodes = (loggedIn) => [
  createNode({
    id: `${mnc.INCREV.id}`,
    label: mnc.INCREV.name,
    value: 90,
    ...{ x: -165, y: 0 },
    borderWidth: 0,
    color: 'rgb(103, 220, 117)',
    cluster: clusters.INCREV,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.INCREV.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.PRTREV.id}`,
    label: mnc.PRTREV.name,
    value: 80,
    ...{ x: -165, y: 215 },
    borderWidth: 0,
    color: 'rgb(103, 220, 117)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.PRTREV.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.AVDCOS.id}`,
    label: mnc.AVDCOS.name,
    value: 60,
    ...{x: -165, y: 580},
    borderWidth: 0,
    color: 'rgb(103, 220, 117)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.AVDCOS.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.REDCOS.id}`,
    label: mnc.REDCOS.name,
    value: 70,
    ...{x: -165, y: 404},
    borderWidth: 0,
    color: 'rgb(103, 220, 117)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.REDCOS.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.CX.id}`,
    label: mnc.CX.name,
    value: 90,
    ...{x: 445, y: 0},
    borderWidth: 0,
    color: 'rgb(103, 183, 220)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.CX.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.PROD.id}`,
    label: mnc.PROD.name,
    value: 70,
    ...{x: 445, y: 215},
    borderWidth: 0,
    color: 'rgb(220, 103, 206)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.PROD.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.UTIL.id}`,
    label: mnc.UTIL.name,
    value: 60,
    ...{x: 445, y: 412},
    borderWidth: 0,
    color: 'rgb(220, 103, 136)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.UTIL.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.BUSOP.id}`,
    label: mnc.BUSOP.name,
    value: 80,
    ...{x: 445, y: 571},
    borderWidth: 0,
    color: 'rgb(103, 113, 220)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.BUSOP.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.FUNC.id}`,
    label: mnc.FUNC.name,
    value: 80,
    ...{x: 1085, y: -10},
    borderWidth: 0,
    color: 'rgb(180, 128, 245)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.FUNC.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.UX.id}`,
    label: mnc.UX.name,
    value: 70,
    ...{x: 1085, y: 112},
    borderWidth: 0,
    color: 'rgb(245, 147, 128)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.UX.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.RELPERF.id}`,
    label: mnc.RELPERF.name,
    value: 60,
    ...{x: 1085, y: 228},
    borderWidth: 0,
    color: 'rgb(128, 143, 245)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.RELPERF.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.PRC.id}`,
    label: mnc.PRC.name,
    value: 50,
    ...{x: 1085, y: 324},
    borderWidth: 0,
    color: 'rgb(220, 210, 103)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.PRC.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.SUP.id}`,
    label: mnc.SUP.name,
    value: 55,
    ...{x: 1085, y: 416},
    borderWidth: 0,
    color: 'rgb(160, 220, 103)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.SUP.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.FEED.id}`,
    label: mnc.FEED.name,
    value: 50,
    ...{x: 1085, y: 507},
    borderWidth: 0,
    color: 'rgb(128, 245, 180)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.FEED.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${mnc.COM.id}`,
    label: mnc.COM.name,
    value: 50,
    ...{x: 1085, y: 597},
    borderWidth: 0,
    color: 'rgb(220, 103, 136)',
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{mnc.COM.name}</Text>
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.CL.id}`,
    label: loggedIn ? cxNodes.CL.name : LOGGEDOUT_NAME,
    value: 75,
    ...{x: 389, y: -291},
    borderWidth: 0,
    color: 'rgb(246, 166, 0)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.CL.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.UX.id}`,
    label: loggedIn ? cxNodes.UX.name : LOGGEDOUT_NAME,
    value: 75,
    ...{x: 195, y: -137},
    borderWidth: 0,
    color: 'rgb(103, 220, 152)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.UX.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.AWARE.id}`,
    label: loggedIn ? cxNodes.AWARE.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 329, y: -503},
    borderWidth: 0,
    color: 'rgb(246, 166, 0)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.AWARE.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.ENGAGE.id}`,
    label: loggedIn ? cxNodes.ENGAGE.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 500, y: -704},
    borderWidth: 0,
    color: 'rgb(246, 166, 0)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.ENGAGE.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.EVAL.id}`,
    label: loggedIn ? cxNodes.EVAL.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 774, y: -704},
    borderWidth: 0,
    color: 'rgb(246, 166, 0)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.EVAL.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.PURCH.id}`,
    label: loggedIn ? cxNodes.PURCH.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 892, y: -503},
    borderWidth: 0,
    color: 'rgb(246, 166, 0)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.PURCH.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.EXP.id}`,
    label: loggedIn ? cxNodes.EXP.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 835, y: -296},
    borderWidth: 0,
    color: 'rgb(246, 166, 0)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.EXP.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.BOND.id}`,
    label: loggedIn ? cxNodes.BOND.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 607, y: -194},
    borderWidth: 0,
    color: 'rgb(246, 166, 0)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.BOND.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.USFL.id}`,
    label: loggedIn ? cxNodes.USFL.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 131, y: -396},
    borderWidth: 0,
    color: 'rgb(103, 220, 152)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.USFL.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.USABL.id}`,
    label: loggedIn ? cxNodes.USABL.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 229, y: -709},
    borderWidth: 0,
    color: 'rgb(103, 220, 152)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.USABL.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.DES.id}`,
    label: loggedIn ? cxNodes.DES.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 495, y: -889},
    borderWidth: 0,
    color: 'rgb(103, 220, 152)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.DES.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.FIND.id}`,
    label: loggedIn ? cxNodes.FIND.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 780, y: -889},
    borderWidth: 0,
    color: 'rgb(103, 220, 152)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.FIND.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.ACC.id}`,
    label: loggedIn ? cxNodes.ACC.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 1045, y: -709},
    borderWidth: 0,
    color: 'rgb(103, 220, 152)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.ACC.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.CRED.id}`,
    label: loggedIn ? cxNodes.CRED.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 1099, y: -397},
    borderWidth: 0,
    color: 'rgb(103, 220, 152)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.CRED.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${cxNodes.VAL.id}`,
    label: loggedIn ? cxNodes.VAL.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: 933, y: -128},
    borderWidth: 0,
    color: 'rgb(103, 220, 152)',
    cluster: clusters.CX,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{cxNodes.VAL.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${irNodes.NOSALE.id}`,
    label: loggedIn ? irNodes.NOSALE.name : LOGGEDOUT_NAME,
    value: 75,
    ...{x: -386, y: -49},
    borderWidth: 0,
    color: 'rgb(103, 220, 117)',
    cluster: clusters.INCREV,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{irNodes.NOSALE.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${irNodes.CUSTENG.id}`,
    label: loggedIn ? irNodes.CUSTENG.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: -633, y: -95},
    borderWidth: 0,
    color: 'rgb(103, 220, 117)',
    cluster: clusters.INCREV,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{irNodes.CUSTENG.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${irNodes.CUSTLOYL.id}`,
    label: loggedIn ? irNodes.CUSTLOYL.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: -315, y: -278},
    borderWidth: 0,
    color: 'rgb(103, 220, 117)',
    cluster: clusters.INCREV,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{irNodes.CUSTLOYL.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${irNodes.FEED.id}`,
    label: loggedIn ? irNodes.FEED.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: -562, y: 76},
    borderWidth: 0,
    color: 'rgb(103, 220, 117)',
    cluster: clusters.INCREV,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{irNodes.FEED.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${irNodes.RECOM.id}`,
    label: loggedIn ? irNodes.RECOM.name : LOGGEDOUT_NAME,
    value: 60,
    ...{x: -546, y: -244},
    borderWidth: 0,
    color: 'rgb(103, 220, 117)',
    cluster: clusters.INCREV,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{irNodes.RECOM.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${irNodes.PROFIT.id}`,
    label: loggedIn ? irNodes.PROFIT.name : LOGGEDOUT_NAME,
    value: 75,
    ...{x: -167, y: -456},
    borderWidth: 0,
    color: 'rgb(223, 23, 23)',
    cluster: clusters.INCREV,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{irNodes.PROFIT.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${irNodes.MARKET.id}`,
    label: loggedIn ? irNodes.MARKET.name : LOGGEDOUT_NAME,
    value: 75,
    ...{x: -457, y: -456},
    borderWidth: 0,
    color: 'rgb(216, 198, 60)',
    cluster: clusters.INCREV,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{irNodes.MARKET.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  }),
  createNode({
    id: `${irNodes.SERVICE.id}`,
    label: loggedIn ? irNodes.SERVICE.name : LOGGEDOUT_NAME,
    value: 75,
    ...{x: -730, y: -455},
    borderWidth: 0,
    color: 'rgb(60, 216, 193)',
    cluster: clusters.INCREV,
  }, {
    title: generateNodeTitleComponent(
      () => <Text>{irNodes.SERVICE.name}</Text>,
      true
    ),
    text: generateNodeTextComponent()
  })
]

export const nodeColorMap = nodes(false).reduce((acc, node) => {
  acc[node.id] = node.color
  return acc
}, {})

export const impact = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
}

const generateTextComponent = (description?) => {
  return ({ loggedIn }) => <Flex direction='column' align='center' p='30px'>
    {!loggedIn ? <Text>{LOG_IN}</Text> : null}
    {loggedIn ? <>
      <Text>{description || DESCRIPTION}</Text>
      <Image
        src='/img/under-dev.svg'
        width={400}
        height={400}
        alt='Image of busy developer coding'
        pos='relative'
        top='-40px'
      />
    </> : null}
  </Flex>
}

const generateTitleComponent = (Title, ClusteredTitle?, titleOnlyLoggedIn?, clusterOnlyLoggedIn?) => {
  return ({ loggedIn, clustered }) => <Flex direction='column' align='center'>
    {(!titleOnlyLoggedIn || loggedIn) && !clustered ? <Text textAlign='center' fontSize='lg' fontWeight='bold' m='12px' color='#222838'><Title/></Text> : null}
    {(!clusterOnlyLoggedIn || loggedIn) && clustered ? <Text textAlign='center' fontSize='lg' fontWeight='bold' m='12px' color='#222838'><ClusteredTitle/></Text> : null}
  </Flex>
}

const getTitle = (...text) => () => <Text as='span'>{text[0]} {text[1] ? <><Text as='span' decoration='underline' fontStyle='italic'>{text[1]}</Text> {text[2]} <Text as='span' decoration='underline' fontStyle='italic'>{text[3]}</Text>{text[4] ? ' ' + text[4] : null}</>  : null}</Text>

export const edges = [
  createLink(mnc.PROD.id, mnc.AVDCOS.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Productivity', 'helps to', 'Avoid Costs')
    ),
    text: generateTextComponent()
  }),
  createLink(mnc.PROD.id, mnc.REDCOS.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Productivity', 'helps to', 'Reduce Costs')
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.PROD.id, mnc.UTIL.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Productivity', 'influences', 'Utilization')
    ),
    text: generateTextComponent() 
  }),
  
  createLink(mnc.UTIL.id, mnc.AVDCOS.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Utilization', 'helps to', 'Avoid Costs')
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.UTIL.id, mnc.REDCOS.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How', 'Utilization', 'helps to', 'Reduce Costs')
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.UTIL.id, mnc.PROD.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Utilization', 'influences', 'Productivity')
    ),
    text: generateTextComponent() 
  }),

  createLink(mnc.BUSOP.id, mnc.REDCOS.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Business Opportunities', 'can', 'Reduce Costs')
    ),
    text: generateTextComponent() 
  }),

  createLink(mnc.BUSOP.id, irNodes.MARKET.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Business Opportunities', 'open up', 'New Markets'),
      getTitle('How', 'Business Opportunities', 'help to', 'Increase Revenue'),
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.BUSOP.id, irNodes.SERVICE.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Business Opportunities', 'enable', 'New Services'),
      getTitle('How', 'Business Opportunities', 'help to', 'Increase Revenue'),
      true
    ),
    text: generateTextComponent() 
  }),

  createLink(mnc.PROD.id, mnc.RELPERF.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How', 'Productivity', 'influences', 'Release Performance')
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.PROD.id, mnc.PRC.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Productivity', 'influences', 'Price')
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.PROD.id, mnc.FEED.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Productivity', 'influences', 'Feedback')
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.PROD.id, mnc.SUP.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Productivity', 'influences', 'Support')
    ),
    text: generateTextComponent() 
  }),
  
  createLink(mnc.PROD.id, irNodes.PROFIT.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How', 'Productivity', 'influences', 'Profitability'),
      getTitle('How', 'Productivity', 'helps to', 'Increase Revenue'),
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.PROD.id, cxNodes.CL.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Productivity', 'influences the overall', 'Customer Experience'),
      getTitle('How', 'Productivity', 'influences', 'Customer Experience'),
      true
    ),
    text: generateTextComponent() 
  }),

  createLink(mnc.FUNC.id, mnc.BUSOP.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How', 'Functionality', 'can create', 'Business Opportunities')
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.FEED.id, mnc.BUSOP.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Feedback', 'can create', 'Business Opportunities')
    ),
    text: generateTextComponent() 
  }),

  createLink(mnc.COM.id, mnc.FEED.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Community', 'influences', 'Feedback')
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.COM.id, mnc.SUP.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Community', 'influences', 'Support')
    ),
    text: generateTextComponent() 
  }),

  createLink(cxNodes.CL.id, cxNodes.BOND.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How the', 'Customer Lifecycle', 'creats', 'financial impact'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.UX.id, cxNodes.CL.id, impact.sm, {
    title: generateTitleComponent(
      getTitle("What's the role of", 'User Experience', 'in the', 'Customer Lifecycle'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),

  createLink(cxNodes.AWARE.id, cxNodes.ENGAGE.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Awareness', 'leads to the', 'Engagement', 'phase'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.AWARE.id, cxNodes.EVAL.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Awareness', 'leads to the', 'Evaluation', 'phase'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.ENGAGE.id, cxNodes.EVAL.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Engagement', 'leads to the', 'Evaluation', 'phase'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.EVAL.id, cxNodes.PURCH.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Evaluation', 'leads to the', 'Purchase', 'phase'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.PURCH.id, cxNodes.EXP.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Purchase', 'leads to the', 'Experience', 'phase'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.EXP.id, cxNodes.BOND.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Experience', 'leads to the', 'Bonding', 'phase'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.BOND.id, cxNodes.AWARE.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How', 'Bonding', 'feeds back to', 'Awareness'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),

  createLink(cxNodes.USFL.id, cxNodes.EVAL.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How the', 'Useful', 'facet influences', 'Evaluation'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.USFL.id, cxNodes.EXP.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How the', 'Useful', 'facet influences', 'Experience'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.USABL.id, cxNodes.EXP.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How the', 'Usable', 'facet influences', 'Experience'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.DES.id, cxNodes.EVAL.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How the', 'Desirable', 'facet influences', 'Evaluation'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.DES.id, cxNodes.EXP.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How the', 'Desirable', 'facet influences', 'Experience'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.FIND.id, cxNodes.AWARE.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How the', 'Findable', 'facet influences', 'Awareness'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.FIND.id, cxNodes.EVAL.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How the', 'Findable', 'facet influences', 'Evaluation'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.FIND.id, cxNodes.EXP.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How the', 'Findable', 'facet influences', 'Experience'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.ACC.id, cxNodes.EVAL.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How the', 'Accessible', 'facet influences', 'Evaluation'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.ACC.id, cxNodes.EXP.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How the', 'Accessible', 'facet influences', 'Experience'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.CRED.id, cxNodes.EXP.id, impact.sm, {
    title: generateTitleComponent(
      getTitle('How the', 'Credible', 'facet influences', 'Experience'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.CRED.id, cxNodes.EVAL.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How the', 'Credible', 'facet influences', 'Evaluation'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.PURCH.id, cxNodes.VAL.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Purchase', 'drives', 'Value'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.BOND.id, cxNodes.VAL.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Bonding', 'drives', 'Value'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),

  createLink(cxNodes.BOND.id, irNodes.RECOM.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Bonding', 'leads to', 'Recommendations'),
      getTitle('How', 'Customer Experience', 'helps to', 'Increase Revenue'),
      true,
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.BOND.id, irNodes.CUSTLOYL.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Bonding', 'leads to', 'Customer Loyalty'),
      getTitle('How', 'Customer Experience', 'helps to', 'Increase Revenue'),
      true,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.BOND.id, irNodes.CUSTENG.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Bonding', 'leads to', 'Customer Engagement'),
      getTitle('How', 'Customer Experience', 'helps to', 'Increase Revenue'),
      true,
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.BOND.id, irNodes.FEED.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Bonding', 'leads to', 'Recieving Feedback'),
      getTitle('How', 'Customer Experience', 'helps to', 'Increase Revenue'),
      true,
    ),
    text: generateTextComponent() 
  }),

  createLink(cxNodes.BOND.id, mnc.PRTREV.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Bonding', 'helps to', 'Protect Revenue'),
      getTitle('How', 'Customer Experience', 'helps to', 'Protect Revenue'),
      true,
    ),
    text: generateTextComponent() 
  }),
  createLink(cxNodes.BOND.id, mnc.REDCOS.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Bonding', 'leads to', 'Reduce Costs'),
      getTitle('How', 'Customer Experience', 'helps to', 'Reduce Costs'),
      true,
    ),
    text: generateTextComponent() 
  }),

  createLink(irNodes.RECOM.id, irNodes.NOSALE.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How', 'Recommendations', 'lead to', 'Increased Number of Sales'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(irNodes.CUSTENG.id, irNodes.NOSALE.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Customer Engagement', 'leads to', 'Increased Number of Sales'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(irNodes.CUSTLOYL.id, irNodes.NOSALE.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Customer Loyalty', 'leads to', 'Increased Number of Sales'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(irNodes.FEED.id, irNodes.NOSALE.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Recieving feedback', 'leads to', 'Increased Number of Sales'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(irNodes.NOSALE.id, mnc.INCREV.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How the', 'Increased Number of Sales', '', 'Increases Revenue'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(irNodes.PROFIT.id, mnc.INCREV.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How', 'Profitability', '', 'Increases Revenue'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(irNodes.MARKET.id, irNodes.NOSALE.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Entering New Markets', 'leads to', 'Increased Number of Sales'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(irNodes.SERVICE.id, irNodes.NOSALE.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Offering New Services', 'leads to', 'Increased Number of Sales'),
      null,
      true
    ),
    text: generateTextComponent() 
  }),
  
  createLink(mnc.FUNC.id, cxNodes.USFL.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Functionality', 'influences the', 'Useful facet'),
      getTitle('How', 'Functionality', 'influences', 'Customer Experience'),
      true,
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.UX.id, cxNodes.UX.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('This connection is virtual'),
      getTitle('How', 'User Experience', 'influences', 'Customer Experience'),
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.RELPERF.id, cxNodes.BOND.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Release Performance', 'influences', 'Bonding'),
      getTitle('How', 'Release Performance', 'influences', 'Customer Experience'),
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.PRC.id, cxNodes.EVAL.id, impact.md, {
    title: generateTitleComponent(
      getTitle('How', 'Price', 'influences', 'Evaluation'),
      getTitle('How', 'Price', 'influences', 'Customer Experience'),
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.SUP.id, cxNodes.EXP.id, impact.xl, {
    title: generateTitleComponent(
      getTitle('How', 'Support', 'influences', 'Experience'),
      getTitle('How', 'Support', 'influences', 'Customer Experience'),
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.FEED.id, cxNodes.BOND.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How', 'Feedback', 'influences', 'Bonding'),
      getTitle('How', 'Feedback', 'influences', 'Customer Experience'),
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.COM.id, cxNodes.AWARE.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How', 'Community', 'influences', 'Awareness'),
      getTitle('How', 'Community', 'influences', 'Customer Experience'),
      true
    ),
    text: generateTextComponent() 
  }),
  createLink(mnc.COM.id, cxNodes.BOND.id, impact.lg, {
    title: generateTitleComponent(
      getTitle('How', 'Community', 'influences', 'Bonding'),
      getTitle('How', 'Community', 'influences', 'Customer Experience'),
      true
    ),
    text: generateTextComponent() 
  }),
]