import { data } from "./data.js";

export const getSneakersByCategory = (category) => {
  return data.filter((sneaker) => {
    return sneaker.category.find((item) => item.name === category);
  });
};

export const getSneakersByName = (name) => {
  return data.filter((sneaker) => {
    return sneaker.name.toLowerCase().includes(name.toLowerCase());
  });
};

export const getSneakerById = (id) => {
  return data.find((sneaker) => {
    return sneaker.id === Number(id);
  });
};
