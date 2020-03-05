import { useDadJoke } from "./jokeDataProvider.js";
import { jokeHTMLRep } from "./joke.js";

    // Builds a list of jokes from HTML representation by iterating through the array of objects.

// Targets single DOM node with class dadJokeContainer

const domTargetNode = document.querySelector(".dadJokeContainer")

export const jokeList = () => {
    // Stores the array of objects from jokeDataProvider as a variable
    const arrayOfJokeObjects = useDadJoke() 

    //Iterates through the array to represent each item as HTML
    for (const dadJokeObject of arrayOfJokeObjects) {
        domTargetNode.innerHTML += jokeHTMLRep(dadJokeObject)        
    }
}
