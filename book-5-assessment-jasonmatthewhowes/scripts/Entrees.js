import { getEntrees, setEntrees } from "./database.js"

const entrees = getEntrees()

//listens for click change and sets temp entree in object
document.addEventListener("change", (event) => {
    if (event.target.name ==="entree") {
        setEntrees(parseInt(event.target.value))
    }
})


// function to create HTML for Entree list items

export const Entrees = () => {
    let html = "<ul>"
    const listItems = entrees.map(entree => {
    return `<li> 
        <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

return html
}
// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
