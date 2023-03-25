import axios from "axios";

async function getData(id) {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + id)
    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/" + id)
    console.log("User:", user)
    console.log("Post:", post)
}

export default getData;

