export const POST_TAGS = {
  launch: ['#personal', '#behindthescenes', '#product development'],
  why: ['#full context development', '#software engineering', '#introduction'],
  notCode: ['#full context development', '#technical', '#coding'],
  remix: ['#full context review', '#remix', '#frontend'],
  delightful: ['#full context analysis', '#code quality', '#productivity'],
  next: ['#full context review', '#next.js', '#frontend'],
  remixVsNext: ['#full context comparison', '#next.js', '#remix'],
}

export const POST_VIEWS = {
  launch: 0.15,
  remix: 6.4,
  delightful: 0.1,
  next: 5.8,
  remixVsNext: 0,
}

export const QB_VIEWS = {
  interviewTaboo: 0,
}

export const QB_STATUSES = {
  eastToWest: true,
  endOfInternet: false,
  interviewTaboo: true,
  remixDirtySecret: false,
  leetHarmful: true,
  future: false,
  fullctxIntreview:false,
}

export const QB_DATES = {
  eastToWest: { published: new Date('2022-06-18T00:01:01Z'), lastUpdated: null},
  endOfInternet: { published: new Date('2022-06-18T00:01:01Z'), lastUpdated: null},
  interviewTaboo: { published: new Date('2022-06-18T00:01:01Z'), lastUpdated: null},
  remixDirtySecret: { published: new Date('2022-06-18T00:01:01Z'), lastUpdated: null},
  leetHarmful: { published: new Date('2022-06-28T00:01:01Z'), lastUpdated: null},
  future: { published: new Date('2022-06-18T00:01:01Z'), lastUpdated: null},
  fullctxIntreview: { published: new Date('2022-06-29T00:01:01Z'), lastUpdated: null},
}

export const POST_DATES = {
  launch: { published: new Date('2021-12-09T00:01:01Z'), lastUpdated: new Date('2022-03-16T00:01:01Z')},
  why: { published: new Date('2021-12-09T00:01:01Z'), lastUpdated: null},
  notCode: { published: new Date('2022-02-18T00:01:01Z'), lastUpdated: null},
  remix: { published: new Date('2022-03-13T00:01:01Z'), lastUpdated: new Date('2022-03-18T00:01:01Z')},
  delightful: { published: new Date('2022-03-17T00:01:01Z'), lastUpdated: null},
  next: { published: new Date('2022-06-18T00:01:01Z'), lastUpdated: null},
  remixVsNext: { published: new Date('2022-03-26T00:01:01Z'), lastUpdated: null},
}

export const IMG_DATA = {
  launch: {
    src: '/img/blog/launching.jpg',
    alt: 'Space rocket epicly launching into the night sky, leaving behind a bright, blazing trail'
  },
  why: {
    src: '/img/blog/why.jpg',
    alt: '3 monitors displaying code, captured through eyeglasses laying on a desk in front of them.'
  },
  notCode: {
    src: '/img/blog/notCode.jpg',
    alt: 'A hand balancing a laptop on its corner, that displays code, there is a monitor in the backround also displaying code.'
  },
  remix: {
    preview: {
      src: '/img/blog/remixReview.jpg',
      alt: `The glowing, colorful Remix logo on top of a dark background that's composed of many different pictures representing the full context of software development such as coding, finances, design, money, etc...`
    },
    article: {
      src: '/img/blog/remixReviewArticle.jpg',
      alt: `The white Remix logo on top of a dark background that's composed of many different pictures representing the full context of software development such as coding, finances, design, money, etc...`
    }
  },
  delightful: {
    preview: {
      src: '/img/blog/delightful-preview.jpg',
      alt: "A teenage girl wondering if Josh W. Comeau's Delightful React File/Directory Structure is really that delightful?"
    },
    article: {
      src: '/img/blog/delightful-cover.jpg',
      alt: "A teenage girl wondering if Josh W. Comeau's Delightful React File/Directory Structure is really that delightful?"
    }
  },
  next: {
    preview: {
      src: '/img/blog/nextPreview.jpg',
      alt: ""
    },
    article: {
      src: '/img/blog/nextArticle.jpg',
      alt: ""
    }
  },
  remixVsNext: {
    preview: {
      src: '/img/blog/remixVsNext.jpg',
      alt: ""
    },
    article: {
      src: '/img/blog/remix-vs-next-cover.jpg',
      alt: ""
    }
  },
}