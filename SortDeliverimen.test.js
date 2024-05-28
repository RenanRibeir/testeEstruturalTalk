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

  compareByNames(
    sortedArray.handleSort(merchants[2], [John, Bob, Marie, Linus]),
    expectedArray
  );
});

test("Lunchbox merchant", () => {
  const sortedArray = new SortDeliverymen();
  //15 20 20 30
  const expectedArray = [John, Marie, Linus, Bob];

  compareByNames(
    sortedArray.handleSort(merchants[1], [John, Bob, Marie, Linus]),
    expectedArray
  );
});

test("Jewelry merchant", () => {
  const sortedArray = new SortDeliverymen();
  //10 7 6 2
  const expectedArray = [Linus, Marie, John, Bob];

  compareByNames(
    sortedArray.handleSort(merchants[3], [John, Bob, Marie, Linus]),
    expectedArray
  );
});

test("Drugstore merchant", () => {
  const sortDeliverymen = new SortDeliverymen();
  // 20 20 25 30
  const expectedArray = [John, Bob, Marie, Linus];
  const sortedArray = sortDeliverymen.handleSort(merchants[0], [
    John,
    Bob,
    Marie,
    Linus,
  ]);

  compareByNames(sortedArray, expectedArray);
});

function compareByNames(sortedArray, expectedArray) {
  const sortedNames = sortedArray.map((current) => current.name);
  const expectedNames = expectedArray.map((current) => current.name);

  console.log("expected: ", expectedNames);
  console.log("sorted: ", sortedNames);

  expect(sortedNames).toEqual(expectedNames);
}
