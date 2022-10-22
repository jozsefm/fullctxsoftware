export const normalize = (answer: string) => {
  let normlaizedAnswer = answer.toLowerCase().replace(/\s+/g, '').replace(/\W/g, '')
  return normlaizedAnswer
}