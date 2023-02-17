// C is for Cooking COMPLETE
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"];

for (let y = 1; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
};

// Conjunction Function COMPLETE
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")

// Mod Squad COMPLETE
{
    const modSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
    console.log(HTMLRepresentation)
};

// Simon Says COMPLETE
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {

    let invalidLocation;
    if (location[1] > 2 || location[0] > 2) 
    {invalidLocation = true} 

    if (invalidLocation) {
        console.log("This location is invalid")
    } else (console.log('This location is valid'))
};

// Advanced: Lambda Llama COMPLETE
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const llamaName = possibleNames[randomizer]
        return llamaName + suffix
    }

return namer()
};

nameMaker = llamaNamer();
console.log(nameMaker);

// Below is same code with just one function. (Not recommended for bigger projects for oganization and troubleshooting!)
// const llamaNamer = () => {
//     const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
//     const randomizer = Math.floor(Math.random() * 7)
//     const name = possibleNames[randomizer]
//     const suffix = " the Llama"
//     return name + suffix
// };
    
// const nameMaker = llamaNamer();
// console.log(nameMaker);
