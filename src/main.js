// import '../style.css'
import HomePage from './page/home'
import productsPage from './page/products'
import notFoundPage from './page/notFound'
import productsDetail from './page/product-detail'
import Cart from './page/Cart'

import Dashboard from './page/admin/dashboard'
import bookUpdate from './page/admin/book-update'
import { render,router } from '../lib'
// import Navigo from 'navigo';
import './style/main.css'
// import Header from './components/Header'

// document.querySelector('#app').innerHTML = HomePage()
var app = document.querySelector("#app")

// render(HomePage(), app);


//Router
// const router = new Navigo('/',{linksSelector :"a"});
// defined router
router.on('/',function(){
    console.log("render HomePage");
    render(HomePage,app)
})

router.on('/products',function(){
    console.log("render ProductsPage");
    render(productsPage(),app)
})


router.on('/admin',function(){
    render(Dashboard ,app)
})

router.on('/admin/updateBook/:id',function({data}){
    render(() =>bookUpdate(data.id), app)
})

router.on('/cart',function(){
    render(Cart,app)
})

router.on('/products/detail/:id',function({data}){
    render(() => productsDetail(data.id),app)
})

router.on('/PageNotFound',function(){
    render(notFoundPage(), app)
})

router.resolve();