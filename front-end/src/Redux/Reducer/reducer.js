const init = {
    data: [],
}

export const productPageReducer = (state = init, action) => {
    switch (action.type) {
        case 'PRODUCT_PAGE':
            return {
                data: action.payload
            }
        default:
            return state;
    }
}