import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

/* import specific icons */
import {
  faHeart,
  faAngleRight,
  faCalendarDays,
  faChevronRight,
  faUserSecret,
  faLongArrowRight,
  faArrowLeft,
  faCaretUp,
  faCaretDown,
  faSpinner,
  faTimes,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faPaperPlane,
  faPlus,
  faSave,
  faSearchPlus,
  faSearchMinus,
  faSearch,
  faMinus,
  faStar,
  faStarHalfAlt,
  faArrowsAltV,
  faBroom,
  faDownload,
  faFileInvoice,
  faTimesCircle,
  faPencilAlt,
  faCheck,
  faUserCircle,
  faEllipsisV,
  faEye,
  faEyeSlash,
  faExpand,
  faEllipsis,
  faEarthAmericas,
  faEllipsisH,
  faUserGroup,
  faLock,
  faGear,
  faBell,
  faQuestionCircle,
  faCog,
  faBars,
  faSortDown,
  faUser,
  faExclamationCircle,
  faAngleLeft,
  faPenNib,
  faTrash,
  faMagnifyingGlass,
  faSitemap,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faHeart,
  faUserSecret,
  faAngleRight,
  faCalendarDays,
  faChevronRight,
  faLongArrowRight,
  faArrowLeft,
  faCaretUp,
  faCaretDown,
  faSpinner,
  faTimes,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faPaperPlane,
  faPlus,
  faSave,
  faSearchPlus,
  faSearchMinus,
  faSearch,
  faMinus,
  faStar,
  faStarHalfAlt,
  faArrowsAltV,
  faBroom,
  faDownload,
  faFileInvoice,
  faTimesCircle,
  faPencilAlt,
  faCheck,
  faUserCircle,
  faEllipsisV,
  faEye,
  faEyeSlash,
  faExpand,
  faEllipsis,
  faEarthAmericas,
  faEllipsisH,
  faUserGroup,
  faLock,
  faGear,
  faBell,
  faQuestionCircle,
  faCog,
  faBars,
  faSortDown,
  faUser,
  faExclamationCircle,
  faAngleLeft,
  faPenNib,
  faTrash,
  faMagnifyingGlass,
  faSitemap,
  faWandMagicSparkles,
  faFacebookF,
  faTwitter,
  faLinkedin,
  faCalendarDays,
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})