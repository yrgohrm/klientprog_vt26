import { ref } from 'vue'
import { defineStore } from 'pinia'
import EventService from '../services/EventService.js'

export const useEventsStore = defineStore('events', () => {
    const events = ref([])

    async function updateEvents() {
        const newEvents = await EventService.getEvents()
        newEvents.forEach(eventItem => events.value.push(eventItem))
    }

    return {
        events,
        updateEvents
    }
})
