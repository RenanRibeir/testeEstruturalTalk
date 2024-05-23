const SortDeliverymen = require("./SortDeliverimen");

const John = {
  id: 0,
  name: "John",
  level: 2,
  avgDeliveryTime: 15,
  rejectedDeliveries: 20,
  averageDeliveryCost: 20,
};
const Bob = {
  id: 0,
  name: "Bob",
  level: 2,
  avgDeliveryTime: 25,
  rejectedDeliveries: 20,
  averageDeliveryCost: 20,
};
const Marie = {
  id: 2,
  name: "Marie",
  level: 7,
  avgDeliveryTime: 20,
  rejectedDeliveries: 20,
  averageDeliveryCost: 20,
};
const Linus = {
  id: 3,
  name: "Linus",
  level: 10,
  avgDeliveryTime: 20,
  rejectedDeliveries: 20,
  averageDeliveryCost: 30,
};

const deliverymen = [John, Bob, Marie, Linus];

const merchants = [
  {
    id: 0,
    type: "drugstore",
    locale: "Fortaleza",
  },
  {
    id: 1,
    type: "lunchbox",
    locale: "Fortaleza",
  },
  {
    id: 2,
    type: "lunchbox",
    locale: "Brasilia",
  },
  {
    id: 3,
    type: "jewelry",
    locale: "São Paulo",
  },
];


test("Lunchbox from Brasilia merchant", () => {
  const sortedArray = new SortDeliverymen();
  //10 7 6 2
  const expectedArray = [Linus, Marie, John, Bob];

  expect(sortedArray.handleSort(merchants[2], deliverymen)).toEqual(
    expectedArray
  );
});
