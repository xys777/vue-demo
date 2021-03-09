import Home from './components/Home.vue';
import Data from './components/Data.vue';
import Hello from './components/HelloWorld.vue';
import ProductList from './components/ProductList.vue';
import OrderList from './components/OrderList.vue';
import Report from './components/Report.vue';
 
const routes = [
    { path: '/', component: Home ,name:'Home'},
    { path: '/data', component: Data ,name:'Data'},
    { path: '/hello', component: Hello ,name:'Hello'},
    { path: '/productList', component: ProductList ,name:'Product List'},
    { path: '/orderList', component: OrderList ,name:'Order List'},
    { path: '/report', component: Report ,name:'Report'},
];

export default routes;