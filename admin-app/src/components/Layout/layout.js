import React from 'react'
import { Header } from '../Header/header'

/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  return(
    <>
       <Header/>
       {props.children}
    </>
   )

 }
 export default Layout