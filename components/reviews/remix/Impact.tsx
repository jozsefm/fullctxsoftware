import { Flex, Text } from '@chakra-ui/react'
import { Paragraph, Quote } from 'components/blog/PostElements'
import { finalRemixStats } from 'constants/scores/remix'
import { useCallback, useEffect, useState } from 'react'
import { InternalLink } from 'components/reviews/common'
import Script from 'next/script'

const chartOverflowY: any = {
  base: 'scroll',
  'xl': 'visible'
}

const chartShadow: any = {
  base: 'none',
  'xl': '2xl'
}

const chartSX = {
  '@media screen and (min-width: 1em) and (max-width: 39em)': {
    'div': {
      left: '40vw !important'
    }
  },
  '@media screen and (min-width: 40em) and (max-width: 61em)': {
    'div': {
      left: '35vw !important',
    }
  },
  '@media screen and (min-width: 62em) and (max-width: 79em)': {
    'div': {
      left: '25vw !important',
    }
  },
  '@media screen and (min-width: 80em)': {
    'div': {
      left: '0 !important',
    }
  }
}

const biMb: any = {
  base: '10px',
  md: '30px'
}

const setupChart = (charter, total = 0) => {
  const am4core = window['am4core']
  const am4charts = window['am4charts']
  const am4themes_animated = window['am4themes_animated']
  const am4themes_dark = window['am4themes_dark']

  if (am4core && am4charts && am4themes_animated && am4themes_dark) {
    am4core.useTheme(am4themes_animated)
    am4core.useTheme(am4themes_dark)

    charter.chart = am4core.create('impact-diagram', am4charts.SankeyDiagram)

    const CXBase = finalRemixStats.CX.total / 4
    const PRBase = finalRemixStats.PR.total / 6
    const UTBase = finalRemixStats.UT.total / 2
    const COBase = finalRemixStats.CO.total
    const BOBase = finalRemixStats.BO.total / 4 

    charter.chart.data = [
      { from: 'Improved Customer Experience', to: 'Higher Conversion Rate', value: CXBase },
      { from: 'Higher Conversion Rate', to: 'Increased Sales', value: Math.min(CXBase, 2000) },
      { from: 'Increased Sales', to: 'Increased Revenue', value: Math.min(CXBase, 2000) + Math.min(PRBase, 2000) + Math.min(BOBase, 2000) },

      { from: 'Improved Customer Experience', to: 'Higher Customer Engagement', value: CXBase },
      { from: 'Higher Customer Engagement', to: 'Increased Customer Loyalty', value: Math.min(CXBase / 3, 3000) },
      { from: 'Increased Customer Loyalty', to: 'Increased Revenue', value: Math.min(CXBase / 3, 3000) },

      { from: 'Improved Customer Experience', to: 'Improved Customer Retention', value: CXBase },
      { from: 'Improved Customer Retention', to: 'Protecting Revenue', value: Math.min(CXBase, 5000) + Math.min(PRBase, 1000) / 3 },

      { from: 'Improved Customer Experience', to: 'More Organic Recommendations', value: CXBase },
      { from: 'More Organic Recommendations', to: 'Lower Cost of Customer Acquisition', value: Math.min(CXBase, 1000) },
      { from: 'Lower Cost of Customer Acquisition', to: 'Reduced Costs', value: Math.min(CXBase, 2000) },

      { from: 'Higher Customer Engagement', to: 'Lower Cost of Delay', value: Math.min(CXBase / 3, 1000) },
      { from: 'Lower Cost of Delay', to: 'Reduced Costs', value: Math.min((PRBase + Math.min(CXBase / 3, 1000)), 1000) },

      { from: 'Higher Customer Engagement', to: 'Lower Cost of Quality', value: Math.min(CXBase / 3, 1000) },
      { from: 'Lower Cost of Quality', to: 'Reduced Costs', value: Math.min(CXBase / 3, 1000) },

      { from: 'Increased Productivity', to: 'Higher Delivery Performance', value: PRBase },
      { from: 'Higher Delivery Performance', to: 'Improved Customer Retention', value: Math.min(PRBase / 3, 1000) },

      { from: 'Higher Delivery Performance', to: 'Increased Profitability', value: Math.min(PRBase / 3 , 2000) },
      { from: 'Increased Profitability', to: 'Increased Revenue', value: Math.min(PRBase / 3 , 2000) },


      { from: 'Higher Delivery Performance', to: 'On Time And Budget Product Delivery', value: Math.min(PRBase, 2000) / 3 },
      { from: 'On Time And Budget Product Delivery', to: 'Avoiding Costs', value: Math.min(Math.min(PRBase, 2000) / 3, 4000) },

      { from: 'Increased Productivity', to: 'Faster Adoption To Market Change', value: PRBase },
      { from: 'Faster Adoption To Market Change', to: 'Higher Competitive Advantage', value: Math.min(PRBase, 3000) },
      { from: 'Higher Competitive Advantage', to: 'Protecting Revenue', value: Math.min(Math.min(PRBase, 3000) / 2, 2000) },
      { from: 'Higher Competitive Advantage', to: 'Increased Revenue', value: Math.min(Math.min(PRBase, 3000) / 2, 1000) },

      { from: 'Increased Productivity', to: 'Improved Product Quality', value: PRBase },
      { from: 'Improved Product Quality', to: 'Increased Sales', value: Math.min(PRBase, 2000) },

      { from: 'Increased Productivity', to: 'Option To Cutting Costs', value: PRBase },
      { from: 'Option To Cutting Costs', to: 'Reduced Costs', value: Math.min(PRBase, 500) },

      { from: 'Increased Productivity', to: 'Lower Cost of Delay', value: PRBase },

      { from: 'Increased Productivity', to: 'Higher Employee Engagement', value: PRBase },
      { from: 'Higher Employee Engagement', to: 'Lower Cost of Hiring', value: Math.min(PRBase / 2, 1000) },
      { from: 'Lower Cost of Hiring', to: 'Reduced Costs', value: Math.min(Math.min(PRBase / 2, 1000) + Math.min(BOBase, 3000), 1000) },

      { from: 'Higher Employee Engagement', to: 'Increased Employee Retention', value: Math.min(PRBase / 2, 2000) },
      { from: 'Increased Employee Retention', to: 'Avoiding Costs', value: Math.min(Math.min(PRBase, 2000) / 2, 2000) },

      { from: 'Better Utilization', to: 'Increased Operational Efficiency', value: UTBase },
      { from: 'Increased Operational Efficiency', to: 'Reduced Costs', value: Math.min(UTBase, 2000) },

      { from: 'Better Utilization', to: 'Reuse of Existing Assets', value: UTBase },
      { from: 'Reuse of Existing Assets', to: 'Avoiding Costs', value: Math.min(UTBase, 2000) },

      { from: 'Lower Cost of Services', to: 'Reduced Costs', value: COBase },

      { from: 'Enabling Business Opportunities', to: 'Improving Product/Market Fit', value: BOBase },
      { from: 'Improving Product/Market Fit', to: 'Increased Sales', value: Math.min(BOBase, 2000) },

      { from: 'Enabling Business Opportunities', to: 'Creating New Products', value: BOBase },
      { from: 'Creating New Products', to: 'Increased Revenue', value: Math.min(BOBase, 4000) },

      { from: 'Enabling Business Opportunities', to: 'Accessing New Markets', value: BOBase },
      { from: 'Accessing New Markets', to: 'Increased Revenue', value: Math.min(BOBase, 2000) },

      { from: 'Enabling Business Opportunities', to: 'Improved Employer Branding', value: BOBase },
      { from: 'Improved Employer Branding', to: 'Lower Cost of Hiring', value: Math.min(BOBase, 3000) },
    ]
    
    charter.chart.dataFields.fromName = "from";
    charter.chart.dataFields.toName = "to";
    charter.chart.dataFields.value = "value";

    charter.chart.nodes.template.nameLabel.label.width = 200;
    charter.chart.nodes.template.nameLabel.label.truncate = false;
    charter.chart.nodes.template.nameLabel.label.wrap = true;
    charter.chart.nodes.template.nameLabel.label.fontSize = 12;

    charter.chart.links.template.colorMode = "gradient"
    const hoverState = charter.chart.links.template.states.create("hover");
    hoverState.properties.fillOpacity = 1;

    charter.chart.titles.template.fontSize = 18;
    charter.chart.titles.template.paddingBottom = 10;
    charter.chart.titles.create().text = "Remix: Business Impact Analysis";

    charter.chart.nodes.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    charter.chart.nodes.template.readerTitle = "Click to show/hide or drag to rearrange";
    charter.chart.nodes.template.showSystemTooltip = true;

    charter.chart.padding(0, 120, 0, 50)
    return
  } else if (total < 300) {
    total++
    setTimeout(() => setupChart(charter, total), 120)
  }
}

const BusinessImpact = () => {
  useEffect(() => {
    if (process.browser) {
      let charter = {
        chart: null
      }
      setupChart(charter)
      return () => charter.chart?.dispose()
    }
  }, [])

  return (<Flex  bg='#242424' w='100%' h='760px' mb={biMb} zIndex='1' borderRadius='md' overflowY={chartOverflowY} pos='relative'>
    <Flex pos='absolute' bg='#242424' left='-45%' minW='1350px' h='100%' p='20px' borderRadius='md' id='impact-diagram' boxShadow={chartShadow} sx={chartSX}/>
  </Flex>)
}

export default function Impact() {
  const [loadSecondBatch, setLoadSecondBatch] = useState(false)
  const startLoadingSecondBatch = useCallback(() => {
    setLoadSecondBatch(true)
  }, [])

  return (
    <>
      <Script src="/scripts/am4core.js" strategy="afterInteractive" onLoad={startLoadingSecondBatch}/>
      {loadSecondBatch ? <>
        <Script src="/scripts/am4charts.js" strategy="lazyOnload" />
        <Script src="/scripts/theme-animated.js" strategy="lazyOnload"/>
        <Script src="/scripts/theme-dark.js" strategy="lazyOnload" />
      </> : null}
      <Paragraph minorNext>
        <b>Description</b>: This chart shows the impact of the Financial API over the 4 Business Values and the detailed
        mechanism of how you get from the impact of Remix we identified so far to financial results. It can help you
        find the right selling points while discussing the benefits of the framework with business minded professionals.
      </Paragraph>
      <Paragraph minorNext>
        <b>How does this work?</b> The graph is weighted. It starts by dividing the total score of each type by the number of
        second-level factors they are connected to and propagates the resulting value until reaching the last elements where they accumulate.
        This shows the generally expected financial impact of Remix. There are checks at each new connection to cap the passed on
        value based on the real world impact of the next step. This ensures that the final values are realistic.
      </Paragraph>
      <Paragraph>
        <b>Remarks</b>: The impact of the improvements in customer experience might seem minuscule, but in reality they
        are substantial, it's just that the insane productivity boost scales it down drastically in comparison. Another important
        point to keep in mind is that productivity indirectly improves customer experience. It's represented on the chart, and discussed
        in much more detail in the book.
      </Paragraph>
      <BusinessImpact />
      <Flex w='95%' px='20px' mx='auto'>
        <Quote>
          <Text>
            Of course, this is still not the complete picture, but an overview of the most important mechanisms. If you are interested
            in understanding the elements and connections of the graph in detail, you can find it covered in <InternalLink href='/book'>
              Chapter 3
            </InternalLink> of the Full Context Development Book. It can be extremely helpful in selling your ideas to management
            and, more importantly, understanding the business impact of our work.
          </Text>
        </Quote>
      </Flex>
    </>
  )
}