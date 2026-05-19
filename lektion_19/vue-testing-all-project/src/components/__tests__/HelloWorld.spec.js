import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import HelloWorld from "../HelloWorld.vue"

describe("HelloWorld", () => {
    it("renders properly", () => {
        const text = "535egfdetg346drgdhgfgfhtrfjht3647647";
        const wrapper = mount(HelloWorld, { props: { msg: text } })
        expect(wrapper.text()).toContain(text)
    })
})
