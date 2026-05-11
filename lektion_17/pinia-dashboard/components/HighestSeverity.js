import { computed } from 'vue'
import { useEventsStore } from '../store/events.js'

export default {
    setup() {
        const eventsStore = useEventsStore()

        const highestSeverity = computed(() => {
            let highest = 0
            for (const eventItem of eventsStore.events) {
                if (eventItem.severity > highest) {
                    highest = eventItem.severity
                }
            }

            return highest
        })

        return {
            highestSeverity
        }
    },
    template: `<div>
                <img src="./images/Achtung.svg" width="20" v-if="highestSeverity >= 3">
                <img src="./images/Achtung-orange.svg" width="20" v-else-if="highestSeverity >= 2">
                <img src="./images/Achtung-yellow.svg" width="20" v-else-if="highestSeverity >= 1">
                Högsta allvarlighet: {{highestSeverity}}
               </div>`
}