class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
    this.minimumQuality = 0;
    this.maximumQuality = 50;
    this.expiry = 0;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      let item = this.items[i];

      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > this.returnMinimumQuality()) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            this.decreaseQuality(item);
          }
        }
      } else {
        if (item.quality < this.returnMaximumQuality()) {
          this.increaseQuality(item);
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              if (item.quality < this.returnMaximumQuality()) {
                this.increaseQuality(item);
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < this.returnMaximumQuality()) {
                this.increaseQuality(item);
              }
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        this.decreaseSellIn(item);
      }
      if (this.isExpired(item)) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > this.returnMinimumQuality()) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                this.decreaseQuality(item);
              }
            }
          } else {
            this.decreaseQuality(item, item.quality);
          }
        } else {
          if (item.quality < this.returnMaximumQuality()) {
            this.increaseQuality(item);
          }
        }
      }
    }

    return this.items;
  }

  returnMinimumQuality() {
    return this.minimumQuality;
  }

  returnMaximumQuality() {
    return this.maximumQuality;
  }

  decreaseQuality(item, num = 1) {
    item.quality -= num;
  }

  increaseQuality(item, num = 1) {
    item.quality += num;
  }

  isExpired(item) {
    return item.sellIn < this.expiry;
  }

  decreaseSellIn(item, num = 1) {
    item.sellIn -= num;
  }
}
module.exports = {
  Item,
  Shop
}
