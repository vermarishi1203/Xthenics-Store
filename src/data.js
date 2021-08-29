import faker from "faker";

export const data = [
  {
    id: 1,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    quantity: 1,
  },
  {
    id: 2,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    quantity: 1,
  },
  {
    id: 3,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    quantity: 1,
  },
  {
    id: 4,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    quantity: 1,
  },
  {
    id: 5,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    quantity: 1,
  },
];
