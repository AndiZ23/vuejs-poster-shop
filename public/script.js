var PRICE = 9.99;

new Vue({
    el: '#app',  // the Vue will be attached in the #app dom.
    data: {
        total: 0,  // will use a {{total}} somewhere in the html
        items: [    // a list for the data property
            { id:1, title: 'Item 1'},
            { id:2, title: 'Item 2'},
            { id:3, title: 'Item 3'}
        ],
        cart: []
    },
    methods: {
        addItem: function(index) {
            this.total += PRICE; // referring to the var within the data of this Vue object
            var item = this.items[index];

            // to find if the selected item has already been added in the cart.
            var found = false;
            for(var i=0; i<this.cart.length; i++){
                if(this.cart[i].id === item.id) {
                    found = true;
                    this.cart[i].qty++;
                }
            }

            // if it's not in cart, push it in
            if(!found){
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1,
                    price: PRICE
                });
            }
        }
    }
});