import faker from "faker";

export const data = [
  {
    id: 1,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  },
  {
    id: 2,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  },
  {
    id: 3,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  },
  {
    id: 4,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  },
  {
    id: 5,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  },
];
