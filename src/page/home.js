
import Header from "./Header"
import {Navigation,Navigation2} from '../components/navigation'
import productsPage from './products'
import footerPage from "./Footer"

var HomePage = function () {
    return `
        <header class="bg-sky-500 grid">
        ${Header()}
        </header>

        <main class="grid mt-10">
            ${Navigation()}
            ${productsPage()}
        </main>

        <footer class="mt-20">
            ${footerPage()}
        </footer>
    `
}

export default HomePage
