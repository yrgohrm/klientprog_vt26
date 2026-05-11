import { computed } from 'vue'
import { useEventsStore } from '../store/events.js'

export default {
    setup() {
        const eventsStore = useEventsStore()

        const severities = computed(() => {
            const severityCount = {}
            for (const { severity } of eventsStore.events) {
                if (severityCount[severity] === undefined) {
                    severityCount[severity] = 1
                }
                else {
                    severityCount[severity]++
                }
            }

            const severityList = []
            for (const severity in severityCount) {
                severityList.push({
                    severity,
                    count: severityCount[severity]
                })
            }

            return severityList
        })

        return {
            severities,
            updateEvents: eventsStore.updateEvents
        }
    },
    template: `<div>
                 <!-- Att ha actions i vår store gör det lätt att uppdatera vårt state 
                      på samma vis från flera olika ställen utan att duplicera massa kod -->
                 <input type="button" value="Uppdatera" @click="updateEvents">
                 <ul>
                    <li v-for="severity of severities">
                        {{severity.count}} händelser av nivå {{severity.severity}}
                    </li>
                 </ul>
               </div>`
}