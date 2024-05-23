class SortDeliverymen {
  handleSort(merchant,deliverymen) {

    if (merchant.type === "lunchbox" && merchant.locale === "Brasilia") {
      const a = deliverymen.sort((a, b) => {
        if (a["level"] > b["level"]) {
          return -1;
        } else if (a["level"] < b["level"]) {
          return 1;
        } else {
          return 0;
        }
      });

      return a;
    } else if (merchant.type === "lunchbox") {
      const a = deliverymen.sort((a, b) => {
        if (a["avgDeliveryTime"] < b["avgDeliveryTime"]) {
          return -1;
        } else if (a["avgDeliveryTime"] > b["avgDeliveryTime"]) {
          return 1;
        } else {
          return 0;
        }
      });

      return a;
    } else if (merchant.type === "jewelry") {
      return deliverymen.sort((a, b) => {
        if (a["level"] > b["level"]) {
          return -1;
        } else if (a["level"] < b["level"]) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (merchant.type === "drugstore") {
      return deliverymen.sort((a, b) => {
        if (a["averageDeliveryCost"] < b["averageDeliveryCost"]) {
          return -1;
        } else if (a["averageDeliveryCost"] > b["averageDeliveryCost"]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }
}

module.exports = SortDeliverymen;