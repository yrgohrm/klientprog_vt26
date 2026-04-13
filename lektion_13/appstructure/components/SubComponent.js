import { ref } from 'vue'
import TestService from '../services/TestService.js'

export default {
    setup() {
        const num = ref(0)

        TestService.getNum().then(num => this.num = num)

        return { num }
    },
    template: `<div>{{num}}</div>`
}