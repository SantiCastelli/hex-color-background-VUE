// Implementar solución aquí

Vue.createApp({
    data() {
        return {
            bgColor: '#FFFFFF'
        }
    },

    methods: {
        changeBgColor(){
            let color = Math.floor(Math.random()*16777215).toString(16);
            this.bgColor = `#${color}`
        },
        
    }
}).mount('#app')




