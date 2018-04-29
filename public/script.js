new Vue({
    el: '#app',  // the Vue will be attached in the #app dom.
    data: {
        total: 0,  // will use a {{total}} somewhere in the html
        items: [
            { title: 'Item 1'},
            { title: 'Item 2'},
            { title: 'Item 3'}
        ]
    },
    methods: {
        addItem: function() {
            this.total += 9.99; // referring to the [total] of this Vue object
        }
    }
});