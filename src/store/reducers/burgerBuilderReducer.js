import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.8,
    meat: 1.4,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedSt);
}
const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1}
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedSt);
}

const setIgredients = (state, action) => {
    return updateObject( state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
    });
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject( state, { error: true });
}
const reducer = (state= initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);

        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);

        case actionTypes.SET_INGREDIENT:
            return setIgredients (state, action);

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);

        default:
            return state;
    }
};

export default reducer;