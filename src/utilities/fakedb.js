// use local storage to manage cart data
const addToDb = id => {
    let recipeInformation = getRecipeInformation();
    // add quantity
    const quantity = recipeInformation[id];
    if (!quantity) {
        recipeInformation[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        recipeInformation[id] = newQuantity;
    }
    localStorage.setItem('favourites', JSON.stringify(recipeInformation));
}

const removeFromDb = id => {
    const recipeInformation = getRecipeInformation();
    if (id in recipeInformation) {
      delete recipeInformation[id];
      localStorage.setItem('favourites', JSON.stringify(recipeInformation)); // Update local storage
    }
  }
  

const getRecipeInformation = () => {
    let recipeInformation = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('favourites');
    if (storedCart) {
        recipeInformation = JSON.parse(storedCart);
    }
    return recipeInformation;
}

const deleteRecipeInformation = () => {
    localStorage.removeItem('favourites');
}

export {
    addToDb,
    removeFromDb,
    getRecipeInformation,
    deleteRecipeInformation
}