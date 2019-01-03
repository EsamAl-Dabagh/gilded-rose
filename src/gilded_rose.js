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
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > this.returnMinimumQuality()) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.decreaseQuality(this.items[i]);
          }
        }
      } else {
        if (this.items[i].quality < this.returnMaximumQuality()) {
          this.increaseQuality(this.items[i]);
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < this.returnMaximumQuality()) {
                this.increaseQuality(this.items[i]);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < this.returnMaximumQuality()) {
                this.increaseQuality(this.items[i]);
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.decreaseSellIn(this.items[i]);
      }
      if (this.isExpired(this.items[i])) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > this.returnMinimumQuality()) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.decreaseQuality(this.items[i]);
              }
            }
          } else {
            this.decreaseQuality(this.items[i], this.items[i].quality);
          }
        } else {
          if (this.items[i].quality < this.returnMaximumQuality()) {
            this.increaseQuality(this.items[i]);
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
