export const pageIds = {
  intro: '1a63fef98bc4444aa459fe6df372d688',
  'chapter-1': '5f70e858fa7e490d885279012987ab8c',
  'chapter-2' : '2585cd41d3ea4ce8a6a78ac63d77ffe4',
  'chapter-3' : '078b9347b1304012b2bd5a8f9198303c',
  'chapter-4': 'd35f4876dd914f4088c3d92334486b53',
  'chapter-5' : '33104890dead4798bf3f78f1c31e3032',
  'chapter-6': 'f1e5a67f96dd4f089b49f689caa8012a',
  'chapter-7': '44cf4641cfc346d0ae97270454bffc44',
  'chapter-8': 'db1b8aff4e9942f2911768220d3ade2c',
  'chapter-9' : '7eb325a04f8d4817b2ca03ab38e969d3',
  'chapter-10' : 'fc726e9aad7c464cab0334586e2ad93a',
  'chapter-11' : 'eed4388fab1e4f6fb45ba1f2a189db08',
  'chapter-12' : 'f160f10038d8445a94be2e2fd7fb8876',
  'chapter-13' : '7e904bcbeb1a47dc8edf02458b2142a4',
  'guide-1' : 'b971436bb0bb453f969a48eff20b2e76',
  'guide-2' : '972d1bbf471e4e0fb6d9fa823b46fe44',
  'guide-3' : '6d0b2bc40c6e45d09c13a20e1ef62914',
  'guide-4' : '2e4b059bdee54a8bbf84c4d4df3c93ed',
}

export const freeUrls = ['', 'intro', 'chapter-1', 'chapter-2']

export const navConfig = [
  { type: 'group', title: 'Table of Contents' },
  { type: 'element', path: 'intro', emoji: '📣', title: 'Introduction', sub: 'Words from the author', alt: "Don't skip it!", free: true },
  { type: 'element', path: 'chapter-1', title: 'Chapter 1', emoji: '👩‍💻', sub: 'Redefine Software Development', alt: 'Discovering The Axioms', free: true },
  { type: 'element', path: 'chapter-2', title: 'Chapter 2', emoji: '⚰️', sub: 'R.I.P. Car & CPU-B', alt: 'Defining Business Value', free: true },
  { type: 'element', path: 'chapter-3', title: 'Chapter 3', emoji: '📈', sub: 'The Big Boring', alt: 'Influencing Business Value' },
  { type: 'element', path: 'chapter-4', title: 'Chapter 4', emoji: '🤓', sub: 'Debugging The User', alt: 'Defining User Value' },
  { type: 'element', path: 'chapter-5', title: 'Chapter 5', emoji: '📦', sub: "Productception", alt: 'Users & Development' },
  { type: 'element', path: 'chapter-6', title: 'Chapter 6', emoji: '🖱️', sub: 'Compile to Human Native', alt: 'Influencing User Value' },
  { type: 'element', path: 'chapter-7', title: 'Chapter 7', emoji: '⌨️', sub: 'The Way of The Developer', alt: 'Our Role in The Organization' },
  { type: 'element', path: 'chapter-8', title: 'Chapter 8', emoji: '📊', sub: 'Organization Theory', alt: 'Defining Organization Value' },
  { type: 'element', path: 'chapter-9', title: 'Chapter 9', emoji: '⚡', sub: 'Maximizing Performance', alt: 'Organization & Development' },
  { type: 'element', path: 'chapter-10', title: 'Chapter 10', emoji: '🌀', sub: 'WARP Drive', alt: 'Influencing Organization Value' },
  { type: 'element', path: 'chapter-11', title: 'Chapter 11', emoji: '🛡️', sub: 'The Final Quest of Programming', alt: 'Defining Development Value' },
  { type: 'element', path: 'chapter-12', title: 'Chapter 12', emoji: '⚖️', sub: 'Tech Evaluation', alt: 'Defining Technology Value' },
  { type: 'element', path: 'chapter-13', title: 'Chapter 13', emoji: '👩‍🏭', sub: 'Work Methodology', alt: 'Full Context Development' },
  { type: 'group', title: 'How to' },
  { type: 'element', path: 'guide-1', title: 'Guide 1', emoji: '🧭', sub: 'Business Context Definition', overviewAlt: 'How-To #1' },
  { type: 'element', path: 'guide-2', title: 'Guide 2', emoji: '🧭', sub: 'User Context Definition', overviewAlt: 'How-To #2' },
  { type: 'element', path: 'guide-3', title: 'Guide 3', emoji: '🧭', sub: 'Organization Context Definition', overviewAlt: 'How-To #3' },
  { type: 'element', path: 'guide-4', title: 'Guide 4', emoji: '🧭', sub: 'Project Context Definition', overviewAlt: 'How-To #4' }
]

export const footerConfig = navConfig.reduce((acc, curr, idx, nav) => {
  if (curr.type === 'element') {
    let prev = nav[idx - 1]
    let next = nav[idx + 1]
    prev = prev?.type === 'group' ? nav[idx - 2] : prev
    next = next?.type === 'group' ? nav[idx + 2] : next
    const config = {
      current: curr.path,
      prev: prev ? {
        title: prev.sub || prev.title,
        link: prev.path,
        type: prev.path.split('-')[0]
      } : null,
      next: next ? {
        title: next.sub,
        link: next.path,
        type: next.path.split('-')[0]
      } : null
    }

    if (curr.path === 'chapter-13') {
      // @ts-ignore
      config.next.message = 'Read the first guide'
    }

    if (curr.path === 'guide-1') {
      // @ts-ignore
      config.prev.message = 'Read the last chapter'
    }

    if (config.prev?.link === 'intro') {
      config.prev.type = 'chapter'
    }

    acc[curr.path] = config
  }
  return acc
}, {})