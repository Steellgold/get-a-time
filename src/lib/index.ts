export const rndDate = (): [Date, number] => {
  const randomDate = new Date(Math.floor(Math.random() * Date.now()))
  return [randomDate, randomDate.getTime()]
}