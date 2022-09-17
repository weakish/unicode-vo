import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { chars, custom_tag_samples, lines } from "./src/examples.bs.js"
import { vo, tateChuYoko } from "./src/Vertical.gen.ts"

Deno.test("vo", () => {
    for (const t of chars) {
        assertEquals(vo(t[0]), t[1], t[2])
    }
})

Deno.test("tateChuYoko", () => {
    for (const t of lines) {
        const actual = tateChuYoko(t[0], 2, "", "")
        assertEquals(actual, t[2], t[1])
        const extra_one = tateChuYoko(t[0], 3, "", "")
        assertEquals(extra_one, t[3], t[1])
        const extra_two = tateChuYoko(t[0], 4, "", "")
        assertEquals(extra_two, t[4], t[1])
    }
    for (const t of custom_tag_samples) {
        const actual = tateChuYoko(t[0], 2, "<TateChuYoko>", "</TateChuYoko>")
        assertEquals(actual, t[1], t[2])
    }
})