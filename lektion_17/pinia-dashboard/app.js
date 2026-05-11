import { createApp, onMounted } from 'vue'
import { createPinia } from 'pinia'

import { useEventsStore } from './store/events.js'
import HighestSeverity from './components/HighestSeverity.js'
import EventList from './components/EventList.js'
import SeverityCount from './components/SeverityCount.js'

const app = {
    components: {
        HighestSeverity,
        EventList,
        SeverityCount
    },
    setup() {
        const eventsStore = useEventsStore()

        onMounted(() => {
            eventsStore.updateEvents()
        })

        return {}
    }
}

createApp(app).use(createPinia()).mount('#app')
