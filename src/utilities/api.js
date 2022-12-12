import axios from "axios";

const bazaariAPI = axios.create({
  baseURL: "https://bazaari.cyclic.app/api",
});

export const fetchCategories = () => {
  return bazaariAPI.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const fetchItems = (category_name) => {
  return bazaariAPI
    .get(`/items?category_name=${category_name}`)
    .then(({ data }) => {
      return data.items;
    });
};

export const fetchItemByID = (item_id) => {
  return bazaariAPI.get(`/items/${item_id}`).then(({ data }) => {
    return data.item;
  });
};

export const fetchUsers = () => {
  return bazaariAPI.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const fetchBasket = ({ user }) => {
  return bazaariAPI.get(`/users/${user}/basket`).then(({ data }) => {
    return data.items;
  });
};

export const fetchOrders = ({ user }) => {
  return bazaariAPI.get(`/users/${user}/orders`).then(({ data }) => {
    return data.items;
  });
};

export const postToBasket = (item_id, user) => {
  const postItem = {
    item_id: item_id,
  };

  return bazaariAPI.post(`/users/${user}/basket`, postItem).then(({ data }) => {
    return data;
  });
};

export const postToOrders = (item_id, user) => {
  const postOrder = {
    item_id: item_id,
  };

  console.log(user, item_id);
  return bazaariAPI.post(`/users/${user}/orders`, postOrder).then;
};
