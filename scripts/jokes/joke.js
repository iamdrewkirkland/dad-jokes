
    // Represents a joke object in HTML

export const jokeHTMLRep = (jokeObject) => {
    return `
        <section class="dadJokeContainer__item">
        <div>${jokeObject.question}</div>
        <div>${jokeObject.answer}</div>
        </section>
    `
}