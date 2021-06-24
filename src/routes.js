import compHome from './components/Home.vue'
import compCustomer from './components/Customer/Customer.vue'
import compUser from './components/Customer/User.vue'
import CustomerStart from './components/Customer/CustomerStart'
import CustomerEdit from './components/Customer/CustomerEdit.vue'
import CustomerDetail from './components/Customer/CustomerDetail.vue'
export const routes=[
{
    path:'',
    component:compHome
},
{
    path:'/user/:id',
    component:compUser
},
{
    path:'/customer',
    component:compCustomer,
    children:[
        {
            path:'',
            component:CustomerStart
        },
        {
            path:':id',
            component:CustomerDetail
        },
        {
            path:':id/edit',
            component:CustomerEdit,
            name:'customerEdit'
        },
        {
            path:'*',
            component:compHome
        }
    ]
}

]