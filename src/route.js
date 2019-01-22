import React from 'react'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Product from './views/Dashboard/Product'
import ViewProduct from './views/Dashboard/ViewProduct'
// const Dashboard = import('./views/Dashboard');

const routes = [
    {
      path: '/',
      exact:true,
      render:(props)=>{
        return(<Login {...props}/>)
      }
    },
    {
      path: '/dashboard',
      exact:true,
      render:(props)=>{
        return(<Dashboard {...props}/>)
      }
    },
    {
      path: '/dashboard/product',
      exact:true,
      render:(props)=>{
        return(<Product {...props}/>)
      }
    },
    {
      path: '/dashboard/product/viewProduct',
      exact:true,
      render:(props)=>{
        return(<ViewProduct {...props}/>)
      }
    },
];

export default routes

//<Route path="/dashboard" exact component={Dashboard} />