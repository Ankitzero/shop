const addShop = (shopdata) => {
    return {
        type: "ADD_SHOP",
        data: shopdata
    }
};
const deleteShop = (shopdata) => {
    return {
        type: "DELETE_SHOP",
        data: shopdata
    }
};
const filterShop = (shopdata, filterType) => {
    return {
        type: filterType,
        data: shopdata
    }
};
const showShop = () => {
    return {
        type: "SHOW_SHOPS"
    }
};

export {addShop, deleteShop, filterShop, showShop};