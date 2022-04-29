function Common() {
    let self = this;
/* properties */
    this.promoBar =
    {
        promoItems: null,
        currentItem: 0,
        numberOfItems: 0,

    };
/* methods */
    this.initialisePromo = function () {
    /* get items in promo bar */
        let promoItems = $("#promo > div");
    /* set values */
        this.promoBar.promoItems = promoItems;
        this.promoBar.numberOfItems = promoItems.length;
    /*initiate promo loop to show next item */
        this.startDelay();
    }

        this.startDelay = function () {
        /* wait 4 secs then show nxt message */
            setTimeout(function () {
                self.showNextPromoItem()
            }, 4000);
        }
    this.showNextPromoItem = function () {
    /* fade out items */

    }
}
$(document).ready(function () {
    /* instantiate new common class */
    app.common = new Common();
});