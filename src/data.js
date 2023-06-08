
import uniqid from "uniqid";
import images from './assets/images/books/exportAll.js'

const data = [
    {
        image: images["Behave.jpg"],
        title:"Behave",
        author:"Robert Sapolsky",
        description:"Sapolsky's storytelling concept is delightful but it also has a powerful intrinsic logic: he starts by looking at the factors that bear on a person's reaction in the precise moment a behavior occurs, and then hops back in time from there, in stages, ultimately ending up at the deep history of our species and its evolutionary legacy.",
        amount: 1,
        price: 22.3,
        id: uniqid()
    },

    {
        image: images["ThePlague.jpg"],
        title: "The Plague",
        author: "Albert Camus",
        description: "It tells the story from the point of view of a narrator of a plague sweeping the French Algerian city of Oran. The narrator remains unknown until the start of the last chapter, chapter 5 of part 5. The novel presents a snapshot of life in Oran as seen through the author's distinctive absurdist point of view.",
        amount: 1,
        price: 12.15,
        id: uniqid()
    }
]

export default data;


