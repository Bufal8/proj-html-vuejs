import { createApp } from 'vue'
import App from './App.vue'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


// Import FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkSlash, faBicycle, faPerson, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faLinkSlash , faBicycle, faPerson, faHeartPulse, faFacebookF, faTwitter, faInstagram)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')



