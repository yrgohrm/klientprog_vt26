import { ref } from 'vue'
import TestService from '../services/TestService.js'
import SubComponent from './SubComponent.js'

export default {
    components: {
        SubComponent
    },
    setup() {
        const str = ref("")

        TestService.getString().then(s => str = s)

        return { str }
    },
    template: `<div>
                    {{str}}
                    <sub-component/>
                    <sub-component/>
                    <sub-component/>
               </div>`
}