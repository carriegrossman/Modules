let string = "my extra string"

const myFunction = (word) => {
    console.log(word)
    return `${word} is my favorite word ${string}`
}
export default myFunction;
//we are exporting the function to import on main.js