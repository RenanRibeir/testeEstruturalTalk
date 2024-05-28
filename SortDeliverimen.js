function sortBy(key) {
  return (current, previous) => {
    if (current[key] > previous[key]) {
      return -1;
    } else if (current[key] < previous[key]) {
      return 1;
    } else {
      return 0;
    }
  };
}

class SortDeliverymen {
  handleSort(merchant, deliverymen) {
    if (merchant.type === "lunchbox" && merchant.locale === "Brasilia") {
      const a = deliverymen.sort(sortBy("level"));

      return a;
    } else if (merchant.type === "lunchbox") {
      const a = deliverymen.sort(sortBy("avgDeliveryTime"));

      return a;
    } else if (merchant.type === "jewelry") {
      return deliverymen.sort(sortBy("level"));
    } else if (merchant.type === "drugstore") {
      return deliverymen.sort(sortBy("averageDeliveryCost"));
    }
  }
}

module.exports = SortDeliverymen;
