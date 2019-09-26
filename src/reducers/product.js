import * as types from '../constants/ActionTypes';


var initialState = [
    {
        id: 1,
        type: 'sweets',
        name: 'sweets',
        price: 10,
        image: 'sweets-1.jpeg'
    },
    {
        id: 2,
        type: 'CupCakes',
        name: 'CupCake',
        price: 15,
        image: 'cupcake-1.jpeg'
    },
    {
        id: 3,
        type: 'DoughNuts',
        name: 'DoughNuts',
        price: 12,
        image: 'doughnut-2.jpeg'
    },
    {
        id: 4,
        type: 'cakes',
        name: 'Birthday cake',
        price: 10,
        image: 'cake-1.jpeg'
    },
    {
        id: 5,
        type: 'cakes',
        name: 'Avocado cake',
        price: 15,
        image: 'cake-2.jpeg'
    },
    {
        id: 6,
        type: 'DoughNuts',
        name: 'DoughNuts',
        price: 12,
        image: 'doughnut-1.jpeg'
    }
];

let filterType = (state, filter) => {
    return state.filter((item) => {
        return item.type.toUpperCase() === filter.toUpperCase();
    })
}


const products = (state, actions) => {
    state = initialState;
    switch (actions.type) {
        case types.FILTER_PRODUCT:
            let { type, name } = actions.filter;
            console.log(type,name)
            if (type === 'all') {
                if (name === '') {
                    return [...state];
                }
                else {
                    return state.filter((item) => {
                        return item.name.toUpperCase().indexOf(name.toUpperCase()) !== -1;
                    })
                }
            }
            else {
                if (name === '') {
                    return filterType(state, type);
                }
                else {
                    return filterType(state, type).filter((item2) => {
                        return item2.name.toUpperCase().indexOf(name.toUpperCase()) !== -1;
                    })
                }
            }


        default: return [...state];
    }
}

export default products;