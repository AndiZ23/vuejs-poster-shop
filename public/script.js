new Vue({
    el: '#app',  // the Vue will be attached in the #app dom.
    data: {
        total: 0  // will use a {{total}} somewhere in the html
    },
    methods: {
        addItem: function() {
            this.total += 9.99; // referring to the [total] of this Vue object
        }
    }
});

// Directives: all starts with 'v-'
// v-if -> a "if" statement
// v-bind: -> binding a variable to a HTML attribute