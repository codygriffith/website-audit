// Jokes provided from the lovely folks at https://icanhazdadjoke.com
import jokes from './data/jokes.json'
// const createLighthouse = require('lighthouse-lambda')


export const handler = async () => {
  // Generates a random index based on the length of the jokes array
  const randomIndex = Math.floor(Math.random() * jokes.length)
  const randomJoke = jokes[randomIndex]

  let results;

  console.log('ran')

  // createLighthouse('https://alenthea.com', { logLevel: 'info' })
  //   .then(({ chrome, results }) => {
  //         results = results;
  //         // Do something with `results`
  //         return chrome.kill().then(() => callback(null))
  //       })
  //       .catch((error) => {
  //         // Handle errors when running Lighthouse
  //         return chrome.kill().then(() => callback(error))
  //       })

  // Netlify Functions need to return an object with a statusCode
  // Other properties such as headers or body can also be included.
  return {
    statusCode: 200,
    body: JSON.stringify(randomJoke),
  }
}
