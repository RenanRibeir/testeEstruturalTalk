class SortDeliverymen {
  sortByDesc(key) {
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

  sortByAsc(key) {
    return (current, previous) => {
      if (current[key] < previous[key]) {
        return -1;
      } else if (current[key] > previous[key]) {
        return 1;
      } else {
        return 0;
      }
    };
  }

  handleSort(merchant, deliverymen) {
    if (merchant.type === "lunchbox" && merchant.locale === "Brasilia" || merchant.type === "jewelry") {
      return deliverymen.sort(this.sortByDesc("level"));
    }

    if (merchant.type === "lunchbox") {
      return deliverymen.sort(this.sortByAsc("avgDeliveryTime"));
    }
    
    if (merchant.type === "drugstore") {
      return deliverymen.sort(this.sortByAsc("averageDeliveryCost"));
    }
  }
}

module.exports = SortDeliverymen;
