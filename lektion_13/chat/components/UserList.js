import { ref } from 'vue'
import UserService from '../services/UserService.js'
import UserItem from './UserItem.js'

export default {
    components: {
        UserItem
    },
    setup() {
        const users = ref([])

        UserService.getUsers().then(u => users.value = u)

        return { users }
    },
    template: `<div class="user-list">
                    <user-item :user="user" v-for="user in users"></user-item>
               </div>`
}