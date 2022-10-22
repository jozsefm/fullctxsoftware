export const stage1score = {
  stage: 1,
  results: [
    {
      type: 'BO',
      scores: [
        {
          value: 1000,
          own: true,
          desc: 'Basic support for any kind of web project'
        },
        {
          value: -400,
          own: true,
          desc: 'Not ideal for static sites or infrequently updated content'
        },
        {
          value: 500,
          own: true,
          desc: 'Optimal for working with highly dynamic or frequently updated content'
        },
        {
          value: -500,
          own: true,
          desc: 'Does not support delivering real SPAs'
        },
        {
          value: -100,
          own: true,
          desc: 'Not a tool to be used by the top 0.01% of products'
        },
        {
          value: 100,
          own: true,
          desc: 'Super capable of delivering on SEO'
        },
        {
          value: 100,
          own: true,
          desc: 'Specific match for privacy focused sites'
        },
      ],
      total: 700
    }
  ]
}

export const stage2score = {
  stage: 2,
  results: [
    {
      type: 'BO',
      scores: [
        {
          value: -100,
          own: true,
          desc: "Can't shine on projects targeting local business"
        },
        {
          value: 200,
          own: true,
          desc: "OK for national level projects"
        },
        {
          value: 500,
          own: true,
          desc: "Optimal for large-scale, multi-national projects"
        },
        {
          value: 200,
          own: true,
          desc: "OK for global products"
        },
        {
          value: 100,
          own: true,
          desc: 'Optimal for loading speed sensitive products'
        },
        {
          value: 100,
          own: true,
          desc: 'Optimal in low connection quality areas'
        },
      ],
      total: 1000
    },
    {
      type: 'CX',
      scores: [
        {
          value: 200,
          own: true,
          desc: 'Big plus for Usability on bad network connections'
        },
        {
          value: 1000,
          own: true,
          desc: 'Great UX thanks to fast loading and update speeds'
        },
      ],
      total: 1200
    },
    {
      type: 'CO',
      scores: [
        {
          value: -200,
          own: true,
          desc: 'Early adoption is risky for projects looking for long-term cost reductions'
        },
      ],
      total: -200
    }
  ]
}

export const stage4score = {
  stage: 4,
  results: [
    {
      type: 'PR',
      scores: [
        {
          value: 500,
          own: true,
          desc: 'The variety of deployment targets offers an option for most projects that can fit into their processes'
        },
        {
          value: 50,
          own: true,
          desc: 'A fresh start levels the playing field and opens up opportunities to keep more employees happy'
        },
        {
          value: -100,
          own: true,
          desc: "If you struggle with process quality, don't adopt a tool that has no battle tested best practices"
        },
        {
          value: 500,
          own: true,
          desc: "A match made in heaven for efficient fullstack development => improved developer productivity"
        },
      ],
      total: 950
    },
    {
      type: 'UT',
      scores: [
        {
          value: 1500,
          own: true,
          desc: 'A match made in heaven for efficient fullstack development => high utilization of developers'
        },
      ],
      total: 1500
    },
  ]
}

export const stage3score = {
  stage: 3,
  results: [
    {
      type: 'PR',
      scores: [
        {
          value: 300,
          own: true,
          desc: 'Offers efficient tools and convention to work with primarily backend/DB data'
        },
        {
          value: -200,
          own: true,
          desc: 'Troublesome to integrate with complex, client-side only data processing'
        },
      ],
      total: 100
    }
  ]
}

export const stage5score = {
  stage: 5,
  results: [
    {
      type: 'PR',
      scores: [
        {
          value: 800,
          desc: 'Pre-made UI resources are available for most common project needs'
        },
        {
          value: 200,
          desc: 'Integration options with the dominant design tools'
        },
        {
          value: 200,
          desc: 'Dedicated tooling for fast UI design & development'
        },
        {
          value: 50,
          own: true,
          desc: 'Remix 💗 Tailwind'
        },
      ],
      total: 1250
    },
    {
      type: 'UT',
      scores: [
        {
          value: 500,
          desc: 'With the right skills and processes, some tools can enable your designers to contribute to development'
        },
      ],
      total: 500
    },
    {
      type: 'CO',
      scores: [
        {
          value: 500,
          desc: 'pre-made UI resources are very competitive in pricing (many completely free)'
        },
      ],
      total: 500
    }
  ]
}

export const stage6score = {
  stage: 6,
  results: [
    {
      type: 'PR',
      scores: [
        {
          value: 500,
          desc: 'Remix can utilize the maturity of React + Serverless to follow scalable and maintainable architectural practices'
        },
        {
          value: 100,
          own: true,
          desc: 'The Remix abstractions simplify designing API endpoints and HTTP communication for common use cases'
        },
        {
          value: 400,
          desc: 'Gradual migration to the framework is possible to do through the standard methods'
        },
        {
          value: -100,
          desc: 'But each migration method has its drawbacks'
        },
        {
          value: -50,
          own: true,
          desc: 'Developers need to get used to handle API calls as form submissions with custom form field to encode data'
        },
        {
          value: -50,
          own: true,
          desc: "It's not yet clear how will the Remix route/loader convention scale up with UI complexity and traffic"
        },
      ],
      total: 800
    },
    {
      type: 'CO',
      scores: [
        {
          value: -50,
          own: true,
          desc: 'Interaction heavy apps should think carefully about route/loader composiion to keep operational costs down'
        },
      ],
      total: -50
    },
  ]
}

export const stage7score = {
  stage: 7,
  results: [
    {
      type: 'PR',
      fullW: true,
      scores: [
        {
          value: 300,
          own: true,
          desc: "The used architecture and conventions greatly reduce the required development effort to deliver performant web applications on typical enterprise projects"
        },
        {
          value: 200,
          own: true,
          desc: 'High-quality official docs to learn from'
        },
        {
          value: -50,
          own: true,
          desc: "Missing coverage of some usual but less-central topics"
        },
        {
          value: 200,
          own: true,
          desc: 'Developing community around the project to get help and guidance from'
        },
        {
          value: 100,
          own: true,
          desc: "Easy exception handling with the provided error boundary functionality"
        },
        {
          value: -50,
          own: true,
          desc: "The best official way of handling CSS can result in lots of boilerplate code"
        },
        {
          value: 100,
          own: true,
          desc: "Local development has a quick feedback loop in most cases out of the box"
        },
        {
          value: -50,
          own: true,
          desc: "Some tooling requires manual setup: TypeScript, CSS pre/post compilers even server hot-reload in a few cases"
        },
        {
          value: 50,
          own: true,
          desc: "Easier to navigate your codebase thanks to colocation across the client/server boundary"
        },
        {
          value: 100,
          own: true,
          desc: 'The "Stacks" functionality of the CLI can automatically set up complex application stacks which removes a lot of initial complexity from projects'
        },
        {
          value: 1000,
          desc: "Using the right deployment targets can remove a lot of the otherwise necessary development work"
        },
        {
          value: 1000,
          desc: "Can utilize the full ecosystem of React development and testing tools"
        },
      ],
      total: 2800
    },
    {
      type: 'CX',
      scores: [
        {
          value: 200,
          own: true,
          desc: 'The built-in implementation of common web-app functionalities help new projects to lower time-to-market'
        },
        {
          value: 200,
          own: true,
          desc: "Similarly the efficient API creation and built-in data handling solution speeds up delivery"
        },
        {
          value: 50,
          own: true,
          desc: "Easy to implement optimistic UI updates improve UX directly and also through better DX"
        },
        {
          value: 50,
          own: true,
          desc: "Gracefully handling errors on the UI leads to a better user experience"
        },
      ],
      total: 500
    },
    {
      type: 'UT',
      scores: [
        {
          value: 100,
          own: true,
          desc: 'Experienced React developers will spend more time developing and less time learning as Remix is easy to pick up for them'
        },
        {
          value: 50,
          own: true,
          desc: "The focus on web standards makes it an easier switch target for non-js backend developers than most SPA metaframeworks"
        },
      ],
      total: 150
    },
  ]
}

export const stage8score = {
  stage: 8,
  results: [
    {
      type: 'PR',
      scores: [
        {
          value: 500,
          own: true,
          desc: 'Existing projects or developers heavily invested in certain cloud providers can most likely integrate Remix into their platform of choice without problems'
        },
        {
          value: 500,
          own: true,
          desc: 'New projects can choose from nearly the full range of modern deployment infrastructure to create their most effective setup'
        },
      ],
      total: 1000
    },
    {
      type: 'CO',
      scores: [
        {
          value: 500,
          own: true,
          desc: 'Building and deploying a site or app is usually not free. With Remix, you have many options to find a setup that works for you financially'
        },
        {
          value: 100,
          own: true,
          desc: "You don't have to worry about vendor lock-in and excessivly high costs resulting from it - unless you adopt too many host specific features"
        },
      ],
      total: 600
    },
  ]
}

export const stage9score = {
  stage: 9,
  results: [
    {
      type: 'PR',
      scores: [
        {
          value: 2000,
          desc: 'You can choose basically any setup or provider to operate and monitor your Remix project. Some can offer tremendous savings on the required dev/ops effort'
        },
        {
          value: 500,
          desc: 'Integration of the industry leading customer support services is possible through the standard web tools'
        },
      ],
      total: 2500
    },
    {
      type: 'UT',
      scores: [
        {
          value: 100,
          desc: 'If you have hardware and infrastructure to use, you can choose a setup that utilizes it'
        },
      ],
      total: 100
    },
    {
      type: 'CO',
      scores: [
        {
          value: 500,
          desc: 'The wide range of supported ops, maintenance and customer support tools and providers enable you to handpick a setup that fits your budget'
        },
      ],
      total: 500
    },
  ]
}

export const stage10score = {
  stage: 10,
  results: [
    {
      type: 'BO',
      scores: [
        {
          value: 1000,
          desc: 'The web platform offers amazing tools for gaining insights into application usage and user needs, that in turn enables a lot of product improvements and new business opportunities.'
        }
      ],
      total: 1000
    },
    {
      type: 'CX',
      scores: [
        {
          value: 100,
          desc: "When your users *want* to give feedback, you can adopt the necessary tools to let them do it delightfully"
        },
      ],
      total: 100
    },
    {
      type: 'PR',
      scores: [
        {
          value: 1000,
          desc: 'Ready-made, high-quality solutions for feedback and insight collection takes a lot of effort off the development teams'
        },
      ],
      total: 1000
    },
    {
      type: 'CO',
      scores: [
        {
          value: 500,
          desc: 'The wide range of available solutions (and the possibility to build your own) ensures you can find the tools that fit your budget'
        },
      ],
      total: 500
    },
  ]
}

const baseStat = {
  total: 0,
  min: Number.POSITIVE_INFINITY,
  max: Number.NEGATIVE_INFINITY,
  average: 0,
  count: 0,
  ownTotal: 0,
  ownMin: Number.POSITIVE_INFINITY,
  ownMax: Number.NEGATIVE_INFINITY,
  ownAverage: 0,
  ownCount: 0,
}

export const remixScores = [stage1score, stage2score, stage3score, stage4score, stage5score, stage6score, stage7score, stage8score, stage9score, stage10score]

export const finalRemixStats = remixScores.reduce((totalStats, stageScores) => {
  const combinedStats = stageScores.results
    .reduce((currentStats, result, i) => {

      currentStats[result.type] = result.scores
        .reduce((combinedScore, score) => {
          combinedScore.count++
          combinedScore.total += score.value

          if (score.value < combinedScore.min) {
            combinedScore.min = score.value
          }

          if (score.value > combinedScore.max) {
            combinedScore.max = score.value
          }

          combinedScore.average = (combinedScore.average * i + score.value) / (i + 1)

          if (score['own']) {
            combinedScore.ownCount++
            combinedScore.ownTotal += score.value

            if (score.value < combinedScore.ownMin) {
              combinedScore.ownMin = score.value
            }
            
            if (score.value > combinedScore.ownMax) {
              combinedScore.ownMax = score.value
            }

            combinedScore.ownAverage = (combinedScore.ownAverage * (combinedScore.ownCount - 1) + score.value) / combinedScore.ownCount
          }

          return combinedScore
        }, { ...baseStat })
      
      return currentStats
    }, {})

    Object.keys(combinedStats).forEach((type) => {
      const total = totalStats[type]
      const combined = combinedStats[type]
      
      total.count += combined.count
      total.total += combined.total

      if (combined.min < total.min) {
        total.min = combined.min
      }

      if (combined.max > total.max) {
        total.max = combined.max
      }

      total.average = (total.average * (total.count - 1) + combined.average) / total.count

      totalStats.finalScore += combined.total

      if (combined.ownTotal) {
        total.ownCount += combined.ownCount
        total.ownTotal += combined.ownTotal

        if (combined.ownMin < total.ownMin) {
          total.ownMin = combined.ownMin
        }

        if (combined.ownMax > total.ownMax) {
          total.ownMax = combined.ownMax
        }

        total.ownAverage = (total.ownAverage * (total.ownCount - 1) + combined.ownAverage) / total.ownCount

        totalStats.ownFinalScore += combined.ownTotal
      }
    })

    return totalStats
  }, {
    PR: { ...baseStat, count: 0 },
    BO: { ...baseStat, count: 0 },
    CX: { ...baseStat, count: 0 },
    UT: { ...baseStat, count: 0 },
    CO: { ...baseStat, count: 0 },
    finalScore: 0,
    ownFinalScore: 0
})