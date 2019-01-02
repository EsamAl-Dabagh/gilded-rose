var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  describe("Aged Brie", function() {

    it("quality increases with age", function() {
      const brie = new Item("Aged Brie", 30, 49);
      const shop = new Shop([brie]);
      shop.updateQuality();

      expect(shop.items[0].quality).to.equal(50);
    });

    it("quality doesn't surpass 50", function() {
      const brie = new Item("Aged Brie", 30, 49);
      const shop = new Shop([brie]);
      shop.updateQuality();
      shop.updateQuality();

      expect(shop.items[0].quality).to.equal(50);
    });

  });

  describe("Sulfuras, Hand of Ragnaros", function() {
    it("doesn't decrease in quality", function() {
      const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 100, 50);
      const shop = new Shop([sulfuras]);
      shop.updateQuality();

      expect(shop.items[0].quality).to.equal(50);
    });
  });

});
