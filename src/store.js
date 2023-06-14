import { reactive } from "vue";

export const store = reactive({
    vociMenu: [
        {
            name: "HOME",
            active: true
        }, {
            name: "ABOUT US",
            active: false
        }, {
            name: "FACILITIES",
            active: false
        }, {
            name: "MEMBERSHIP",
            active: false
        }, {
            name: "TESTIMONIALS",
            active: false
        },
        {
            name: "BLOG",
            active: false
        }
    ],
});