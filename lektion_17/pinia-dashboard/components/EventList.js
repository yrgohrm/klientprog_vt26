import { useEventsStore } from '../store/events.js'

export default {
    setup() {
        const eventsStore = useEventsStore()

        return {
            events: eventsStore.events,
            updateEvents: eventsStore.updateEvents
        }
    },
    template: `<div>
                 <!-- Att ha actions i vår store gör det lätt att uppdatera vårt state 
                      på samma vis från flera olika ställen utan att duplicera massa kod -->
                 <input type="button" value="Uppdatera" @click="updateEvents">
                 <ul>
                    <li v-for="event of events">
                        {{event.message}} med allvarlighet {{event.severity}}
                    </li>
                 </ul>
               </div>`
}