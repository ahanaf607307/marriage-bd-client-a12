import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAdmin from '../../Hook/useAdmin'
import useAuth from '../UseAuth/useAuth'

function AdminRoute({children}) {
    const [isAdmin , isAdminLoadig] = useAdmin()
    const {user , loading} = useAuth()
    const location = useLocation()
    if(loading || isAdminLoadig) {
        return <h1>Loading..</h1>
    }
    if(user && isAdmin) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;

}

export default AdminRoute
