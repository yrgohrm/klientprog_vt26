import { createApp } from 'vue'
import UserList from './components/UserList.js'

const app = {
    components: {
        UserList
    }
    // nothing here in this simple app
    // but setup() etc of the main
    // application goes here
}

const vueApp = createApp(app)

// vueApp.component('user-list', UserList)

vueApp.mount("#app")
