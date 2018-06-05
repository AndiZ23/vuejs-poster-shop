var PRICE = 9.99;
var LOAD_NUM = 10;

new Vue({
    el: '#app',  // the Vue will be attached in the #app dom.
    data: {
        total: 0,  // will use a {{total}} somewhere in the html
        items: [],   // a list for the data property
        cart: [],
        results: [],
        newSearch: 'anime', // Use 'anime' as the default search
        lastSearch: '',
        loading: false,
        price: PRICE
    },
    methods: {
        onSubmit: function(){
            //before do the ajax call, we should empty out the items list
            // --> to give some visualized feedback that the system is reloading the search
            this.items=[];
            this.loading = true;

            this.$http
                .get('/search/'.concat(this.newSearch))
                .then(function(res) {
                    this.lastSearch = this.newSearch;
                    this.results = res.data;
                    this.items = this.results.slice(0,LOAD_NUM); // JS' slice function for array
                    this.loading=false;
                });
        },
        addItem: function(index) {
            this.total += PRICE; // referring to the var within the data of this Vue object
            var item = this.items[index];

            // to find if the selected item has already been added in the cart.
            var found = false;
            for(var i=0; i<this.cart.length; i++){
                if(this.cart[i].id === item.id) {
                    found = true;
                    this.cart[i].qty++;
                    break;
                }
            }

            // if it's not in cart, push it in
            if(!found){
                this.cart.push({ // an object with 4 data properties
                    id: item.id,
                    title: item.title,
                    qty: 1,
                    price: PRICE
                });
            }
        },
        inc: function(item){
            item.qty++;
            this.total += PRICE;
        },
        dec: function(item){
            item.qty--;
            this.total -= PRICE;
            // but we need to prevent zero and minus qty
            if(item.qty <=0){
                for (var i=0; i<this.cart.length;i++){
                    if(this.cart[i].id === item.id){
                        this.cart.splice(i, 1); // remove from the list (by index and how many)
                        break;
                    }
                }
            }
        }
    },
    filters: {
        currency: function(price){
            return '$'.concat(price.toFixed(2));
        }
    },
    mounted: function(){
        // mounted: a part of a Vue instance lifecycle:
        //  - mount the instance to the DOM,
        //  - update the DOM when data changes
        // mounted functions will be called after the instance has been mounted.
        this.onSubmit();
    }
});

var elem = document.getElementById("product-list-bottom");
var watcher = scrollMonitor.create(elem);
watcher.enterViewport(function() {
   console.log('Entered Viewport');
});
