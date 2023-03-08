

const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> {{1 + 1 }} </p>`

    data() {
    return {
        quote: 'holaxd',
        author: 'batman'
    
    }
    
    },
    methods: {
    changeQuote() {
        console.log('Hola')
        this.author = 'Alex'
    
        this.capitalize()
    },
    capitalize() {
    this.quote = this.quote.toUpperCsse()
    }
    
    }
    
    
    })
    
    
    
app.mount('#myApps')
















