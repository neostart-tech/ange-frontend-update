import * as counterup from 'counterup2'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            counterup: counterup
        }
    }
})