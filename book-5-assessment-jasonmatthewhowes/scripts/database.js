const database = {
  entrees: [
    { id: 1, name: "Hummus and Hot Sauce", price: 6 },
    { id: 2, name: "Chicken Fried Lamb Kabob", price: 14.25 },
    { id: 3, name: "Hot Chicken Greek Salad", price: 10.5 },
    { id: 4, name: "Brussel Sprout Moussaka", price: 11.5 },
    { id: 5, name: "Okrakopita", price: 8.4 },
    { id: 6, name: "Fried Onion and Grape Leaves", price: 6.95 },
    { id: 7, name: "Chess Baklava", price: 5.3 },
    { id: 8, name: "Gyro Biscuits", price: 8.95 },
    { id: 9, name: "Black Eye Pea Falafel", price: 7.8 },
    { id: 10, name: "Pecan Pastitsio", price: 12.49 },
  ],
  veggies: [
    { id: 1, name: "Okra", price: 2.65 },
    { id: 2, name: "Collard Greens", price: 2.05 },
    { id: 3, name: "Swiss Chard", price: 2.15 },
    { id: 4, name: "Corn", price: 1.75 },
    { id: 5, name: "Brussel Sprouts", price: 3 },
    { id: 6, name: "Sweet Potatoes", price: 2.4 },
    { id: 7, name: "Grits", price: 3.05 },
    { id: 8, name: "Fried Green Tomatoes", price: 3.89 },
    { id: 9, name: "Mac and Feta Cheese", price: 2.55 },
  ],
  sides: [
    { id: 1, name: "Chicken Fried Steak Poppers", price: 5.45 },
    { id: 2, name: "Bacon", price: 2.95 },
    { id: 3, name: "Turkey Wings", price: 4.8 },
    { id: 4, name: "BBQ Lamb Ribs", price: 9.25 },
    { id: 5, name: "Catfish Nuggets", price: 6.75 },
    { id: 6, name: "Mini Souvlaki", price: 5.2 },
  ],
  purchases: [
    {id: 1, entreesID: 9, veggiesID: 2, sidesID: 6, price: 15.05}
],

    comboChoices: {entreesID:"", veggiesID:"", sidesID:""}
};


export const getEntrees = () => {
    return database.entrees.map(entrees => ({...entrees}))
}
export const getVeggies = () => {
    return database.veggies.map(veggies => ({...veggies}))
}
export const getSides = () => {
    return database.sides.map(sides => ({...sides}))
}
export const getPurchases = () => {
    return database.purchases.map(purchases => ({...purchases}))
}


/*the below functions are triggered by click event listeners
each event listener is on the corresponding js file
Each one of these is  setting the object state for comboChoices for each choice. These will get reset by the function triggered by the button click

*/
export const setEntrees = (id) => {
    database.comboChoices.entreesID = id
}
export const setVeggie = (id) => {
    database.comboChoices.veggiesID = id
}
export const setSides = (id) => {
    database.comboChoices.sidesID = id
}



export const addCustomerOrder = () => {
    //copy current state of user selections
    const newOrder = {...database.comboChoices}

    //add primary key to object
    const lastIndex = database.purchases.length - 1
    newOrder.id = database.purchases[lastIndex].id + 1

    // add a timestamp 
    newOrder.timestamp = Date.now()

    // push new order to purchases array
    database.purchases.push(newOrder)
    //reset temp state for combochoices object
    database.comboChoices = {}
    //broadcast  custom eventlistener
    document.dispatchEvent(new CustomEvent("stateChanged"))
}