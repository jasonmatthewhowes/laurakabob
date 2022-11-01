import { getVeggies, getEntrees, getSides, getPurchases } from "./database.js"

const veggies = getVeggies()
const entrees = getEntrees()
const sides = getSides()

// use .find method to find the corresponding objects to grab their prices. Use primary keys to find the price.

const buildOrderListItem = (order) => {

    const foundVeggie = veggies.find (
        (veggie) => {
            return veggie.id === order.veggiesID
        }
    )
    const foundEntree = entrees.find (
        (entree) => {
            return entree.id === order.entreesID
        }
    )
    const foundSide = sides.find (
        (side) => {
            return side.id === order.sidesID
        }
    )



    const total = foundVeggie.price + foundEntree.price + foundSide.price
    const totalString = total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })    
    
    return `<li>
        Receipt #${order.id} = ${totalString} 
    </li>`
}

export const Sales = () => {
    //grab array of sales
    const sales = getPurchases()
    let html = "<ul>"
    const listItems = sales.map ((sales) =>{
        return buildOrderListItem(sales)
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}

    /* original code provided
    return `
        <ul>
            ${sales.map(
                (sale) => {
                    // Reflect: What is the scope of this `return` keyword?
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </ul>
    `
}
*/
