
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
    },

    {
        image: images["Idiot.jpg"],
        title: "The Idiot",
        author: "Fyodor Dostoevsky",
        description: "Returning to Russia from a sanitarium in Switzerland, the Christ-like epileptic Prince Myshkin finds himself enmeshed in a tangle of love, torn between two women—the notorious kept woman Nastasya and the pure Aglaia—both involved, in turn, with the corrupt, money-hungry Ganya. In the end, Myshkin’s honesty, goodness, and integrity are shown to be unequal to the moral emptiness of those around him. ",
        amount: 1,
        price: 14.8,
        id: uniqid()
    },

    {
        image: images["NorwegianWood.jpg"],
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        description: "Toru, a quiet and preternaturally serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before. Toru begins to adapt to campus life and the loneliness and isolation he faces there, but Naoko finds the pressures and responsibilities of life unbearable. As she retreats further into her own world, Toru finds himself reaching out to others and drawn to a fiercely independent and sexually liberated young woman.",
        amount: 1,
        price: 13.25,
        id: uniqid()
    },

    {
        image: images["TheStoryOfTheHumanBody.jpg"],
        title: "The Story of the Human Body",
        author: "Daniel Lieberman",
        description: "A landmark book of popular science—a lucid, engaging account of how the human body evolved over millions of years and of how the increasing disparity between the jumble of adaptations in our Stone Age bodies and the modern world is fueling the paradox of greater longevity but more chronic disease. ",
        amount: 1,
        price: 18.9,
        id: uniqid()
    },

    {
        image: images["GunsGermsAndSteel.jpg"],
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond",
        description: "Societies that had a head start in food production advanced beyond the hunter-gatherer stage, and then developed writing, technology, government, and organized religion—as well as nasty germs and potent weapons of war—and adventured on sea and land to conquer and decimate preliterate cultures. A major advance in our understanding of human societies, Guns, Germs, and Steel chronicles the way that the modern world came to be and stunningly dismantles racially based theories of human history.",
        amount: 1,
        price: 20.5,
        id: uniqid()
    },

    {
        image: images["Fahrenheit451.jpg"],
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        description: "Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.",
        amount: 1,
        price: 10.2,
        id: uniqid()
    },

    {
        image: images["CancerWard.jpg"],
        title: "Cancer Ward",
        author: "Alexandr Solzhenitsyn",
        description: "One of the great allegorical masterpieces of world literature, Cancer Ward is both a deeply compassionate study of people facing terminal illness and a brilliant dissection of the “cancerous” Soviet police state.",
        amount: 1,
        price: 12.7,
        id: uniqid()
    },

    {
        image: images["Catch22.jpg"],
        title: "Catch 22",
        author: "Joseph Heller",
        description: "Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.",
        amount: 1,
        price: 15,
        id: uniqid()
    },

    {
        image: images["TheOriginOfSpecies.jpg"],
        title: "The Origin of Species",
        author: "Charles Darwin",
        description: "Darwin's theory of natural selection issued a profound challenge to orthodox thought and belief: no being or species has been specifically created; all are locked into a pitiless struggle for existence, with extinction looming for those not fitted for the task. Yet The Origin of Species (1859) is also a humane and inspirational vision of ecological interrelatedness, revealing the complex mutual interdependencies between animal and plant life, climate and physical environment, and—by implication—within the human world.",
        amount: 1,
        price: 17.5,
        id: uniqid()
    }

]

export default data;


