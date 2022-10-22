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
          value: 300,
          own: true,
          desc: 'Good for working with static sites, best for multi-page ones'
        },
        {
          value: 500,
          own: true,
          desc: 'Ideal for small to large-scale projects with lots of dynamic parts'
        },
        {
          value: 100,
          own: true,
          desc: 'Can be used to deliver even complex SPAs'
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
          desc: 'Supports the creation of AMP pages'
        },
      ],
      total: 2000
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
          value: 500,
          own: true,
          desc: 'Optimal for Level 1 - local userbase'
        },
        {
          value: 500,
          own: true,
          desc: "Optimal for Level 2 - national userbase"
        },
        {
          value: 500,
          own: true,
          desc: 'Optimal for Level 3 - multi-national userbase'
        },
        {
          value: 200,
          own: true,
          desc: 'OK for Level 4 - global userbase'
        },
      ],
      total: 1700
    },
    {
      type: 'CX',
      scores: [
        {
          value: 1000,
          own: true,
          desc: "Can deliver the user experience expected of today's top web-sites and applications."
        },
      ],
      total: 1000
    },
    {
      type: 'CO',
      scores: [
        {
          value: 200,
          own: true,
          desc: "It's a safe bet for projects looking for long-term cost reductions"
        },
        {
          value: 200,
          own: true,
          desc: "It's relatively easy to hire for"
        },
      ],
      total: 400
    }
  ]
}

export const stage3score = {
  stage: 3,
  results: [
    {
      type: 'BO',
      scores: [
        {
          value: -50,
          own: true,
          desc: "Impossible to create real, SPA style, dynamic, client-side navigation with the built-in router"
        },
        {
          value: -200,
          own: true,
          desc: 'The need to custom build your app can rule out Next for low-complexity projects where time-to-market is top priority'
        },
        
      ],
      total: -250
    },
    {
      type: 'PR',
      scores: [
        {
          value: 100,
          own: true,
          desc: 'A number of community packages help with faster development speed'
        },
        
      ],
      total: 100
    },
    {
      type: 'CO',
      scores: [
        {
          value: -100,
          own: true,
          desc: "All SSG, ISR and SSR can eat into the budget on large projects if you are not careful"
        },
        
      ],
      total: -100
    }
  ],
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
          desc: 'Thanks to the variety of deployment targets, most projects can find an option that can fit into their processes'
        },
        {
          value: 400,
          own: true,
          desc: "Good support for efficient fullstack development => improved developer productivity"
        },
        {
          value: 500,
          own: true,
          desc: "Many best practices are built-in or enforced leading to great organizational scalability"
        },
      ],
      total: 1400
    },
    {
      type: 'UT',
      scores: [
        {
          value: 1000,
          own: true,
          desc: 'Good support for efficient fullstack development => high utilization of developers'
        },
        {
          value: 100,
          own: true,
          desc: "Many best practices are built-in or enforced, leading to shorter ramp-up times for internal project switching"
        },
      ],
      total: 1100
    },
  ]
}

export const stage5score = {
  stage: 5,
  results: [
    {
      type: 'PR',
      scores: [
        {
          value: 1000,
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
          value: 100,
          own: true,
          desc: 'Framer Handshake & URL Imports'
        }
      ],
      total: 1500
    },
    {
      type: 'UT',
      scores: [
        {
          value: 500,
          desc: 'With the right skills and processes, some tools can enable your designers to contribute to development'
        },
        {
          value: 100,
          own: true,
          desc: 'Framer Handshake & URL Imports'
        }
      ],
      total: 600
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
          own: true,
          desc: 'Next.js has many established best practices and can utilize the maturity of React + (Node / Serverless) to set up scalable and maintainable projects'
        },
        {
          value: -100,
          own: true,
          desc: 'The router limitations, however, can bite you in the back in certain setups'
        },
        {
          value: -100,
          own: true,
          desc: 'Scaling self-hosted Next apps that use ISR pages can be complicated or even force you to use SSR instead'
        },
        {
          value: 200,
          own: true,
          desc: "Optimizing frontend performance is very well supported by Next and the wider ecosystem"
        },
        {
          value: 200,
          own: true,
          desc: "There's a rendering mode available for every use-case out there"
        },
        {
          value: 500,
          own: true,
          desc: 'Gradual migration to the framework is possible through well-documented methods'
        },
        {
          value: -100,
          desc: 'But incremental adoption can also create extra complexity'
        },
      ],
      total: 1100
    },
    {
      type: 'CX',
      scores: [
        {
          value: 100,
          own: true,
          desc: 'Persistent shared layouts and link prefetching gives back some of the nice UX enabled by SPA style, true client-side navigation'
        },
        {
          value: 100,
          own: true,
          desc: "Using the right rendering strategy can improve the perceived performance of the sites that in turn stimulates user engagement"
        },
        {
          value: 500,
          own: true,
          desc: "With the automatic paged-based code splitting and all the available manual tools, we can deliver top site performance and UX for our customers"
        },
      ],
      total: 700
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
          value: 1000,
          desc: "Next.js can utilize the full ecosystem of React development and testing tools"
        },
        {
          value: 1000,
          desc: "Choosing the right deployment target can remove a lot of the development work"
        },
        {
          value: 300,
          own: true,
          desc: 'Top-quality official docs to learn from and use as the go-to reference'
        },
        {
          value: 100,
          desc: 'Plenty of community created, free and paid learning materials to lower the learning-curve'
        },
        {
          value: 400,
          own: true,
          desc: 'One of the best online communities out there in the JS world to get help and guidance from'
        },
        {
          value: 400,
          own: true,
          desc: 'Tons of built-in features help to speed up regular development tasks (including the preview mode)'
        },
        {
          value: 100,
          desc: 'The community built tools for handling concerns like SEO (and more...) help in doing the same, too'
        },
        {
          value: 200,
          own: true,
          desc: 'API routes simplify designing API endpoints and speed up delivery'
        },
        {
          value: 100,
          own: true,
          desc: 'The new _middleware allows efficient handling of cross-cutting concerns in an integrated way'
        },
        {
          value: 50,
          own: true,
          desc: "Superb zero-config support for all styling approaches and tools"
        },
        {
          value: 50,
          own: true,
          desc: "PostCSS preconfigured and polyfills handled out of the box"
        },
        {
          value: 50,
          own: true,
          desc: "Debug overlay with rich contextual information to speed up handling issues"
        },
        {
          value: 50,
          own: true,
          desc: "Easy exception handling with the documented patterns"
        },
        {
          value: 200,
          own: true,
          desc: "Local development has one of the quickest feedback loops in the JS ecosystem"
        },
        {
          value: 100,
          own: true,
          desc: "There are some useful VSCode plugins to speed up common coding tasks"
        }
      ],
      total: 4100
    },
    {
      type: 'CX',
      scores: [
        {
          value: 200,
          own: true,
          desc: 'The official and community implementation of common web-app functionalities help to lower time to market and incease customer engagement'
        },
      ],
      total: 200
    },
    {
      type: 'UT',
      scores: [
        {
          value: 100,
          own: true,
          desc: 'Developers will spend less time picking up Next.js and more time shipping with it as it has some of the best training materials'
        }
      ],
      total: 100
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
          value: 300,
          own: true,
          desc: 'Existing projects can most likely integrate Next.js into their platform of choice easily, with a few major exceptions'
        },
        {
          value: 300,
          own: true,
          desc: 'New projects can choose from a wide range of modern deployment infrastructure to create their most effective setup'
        },
      ],
      total: 600
    },
    {
      type: 'CO',
      scores: [
        {
          value: 500,
          own: true,
          desc: 'Building and deploying a site or app is usually not free. With Next.js, you have many options to find a setup that works for you financially'
        },
        {
          value: 50,
          own: true,
          desc: "You don't have to worry too much about vendor lock-in and excessively high costs resulting from it - if you go with a static export, use Node or AWS"
        },
      ],
      total: 550
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
          desc: 'You can choose basically any setup or provider to operate and monitor your Next.js project. Some can offer tremendous savings on the required dev/ops effort'
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
          value: 400,
          desc: 'The wide range of supported ops, maintenance and customer support tools and providers enable you to handpick a setup that fits your budget'
        },
      ],
      total: 400
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

export const nextjsScores = [stage1score, stage2score, stage3score, stage4score, stage5score, stage6score, stage7score, stage8score, stage9score, stage10score]

export const finalNextJsStats = nextjsScores.reduce((totalStats, stageScores) => {
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