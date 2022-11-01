import { getSides, setSides } from "./database.js"

const sideDishes = getSides()

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setSides(parseInt(event.target.value))
    }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"

export const Sides = () => {
    let html = "<ul>"
    const listItems = sideDishes.map(side => {
    return `<li> 
        <input type="radio" name="sideDish" value="${side.id}" /> ${side.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

return html
}

