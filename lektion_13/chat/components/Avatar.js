import { computed } from 'vue';

export default {
    props: {
        name: String,
        online: Boolean
    },
    setup(props) {
        const url = computed(() => `https://robohash.org/${props.name}.png?set=set1&size=32x32`)
        return { url }
    },
    template: `<div class="avatar" style="position: relative;">
                    <div v-show="online" class="avatar-online-dot"></div>
                    <img :src="url" :alt="name" crossorigin="anonymous">
                </div>`
}