import { useDadJoke } from "./jokeDataProvider.js";
import { jokeHTMLRep } from "./joke.js";

// Builds a list of jokes from HTML representation by iterating through the array of objects.

// Targets single DOM node with class dadJokeContainer

const domTargetNode = document.querySelector(".dadJokeContainer");

// Function that generates a random integer 1-15
const randomIntegerInclusive = (min, max) => {
  max = Math.floor(max);
  min = Math.ceil(min);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomIntegerResults = randomIntegerInclusive(1, 15);
console.log(randomIntegerResults);

export const jokeList = () => {
  // Stores the array of objects from jokeDataProvider as a variable
  const arrayOfJokeObjects = useDadJoke();

  //Iterates through the array to represent each item as HTML
  for (const dadJokeObject of arrayOfJokeObjects) {
    
    // Check if random number equals the ID of the joke
    if (randomIntegerResults === dadJokeObject.id) {
      
        // Only display the joke with matching ID
      domTargetNode.innerHTML = jokeHTMLRep(dadJokeObject);
    }
  }
};
