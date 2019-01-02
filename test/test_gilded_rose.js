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

  describe("Backstage Passes", function() {

    describe("quality", function() {
      it("increases as SellIn value approaches", function() {
        const backstagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 12, 25);
        const shop = new Shop([backstagePass]);
        shop.updateQuality();
  
        expect(shop.items[0].quality).to.equal(26);
      });

      it("increases by 2 when sellIn is <= 10", function() {
        const backstagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25);
        const shop = new Shop([backstagePass]);
        shop.updateQuality();
  
        expect(shop.items[0].quality).to.equal(27);
      });

      it("increases by 3 when sellIn is <= 5", function() {
        const backstagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 25);
        const shop = new Shop([backstagePass]);
        shop.updateQuality();
  
        expect(shop.items[0].quality).to.equal(28);
      });

      it("drops to 0 when sellIn is 0", function() {
        const backstagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 25);
        const shop = new Shop([backstagePass]);
        shop.updateQuality();
  
        expect(shop.items[0].quality).to.equal(0);
      });
    });
    
  });

});
