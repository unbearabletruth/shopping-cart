
import uniqid from "uniqid";
import images from './assets/images/exportAll.js'

const data = [
    {
        image: images["Behave.jpg"],
        title:"Behave",
        author:"Robert Sapolsky",
        amount: 1,
        id: uniqid()
    },

    {
        image: images["ThePlague.jpg"],
        title: "The Plague",
        author: "Albert Camus",
        amount: 1,
        id: uniqid()
    }
]

export default data;


