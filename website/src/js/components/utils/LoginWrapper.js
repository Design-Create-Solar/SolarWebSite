import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'

export default function LoginWrapper({ children }) {
    const history = useHistory()

    if (localStorage.getItem("auth-token")) {
        const childrenWithHistory = React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { history })
            }
            return child;
        })
        return (
            <>
                {childrenWithHistory}
            </>
        )
    }
    else {
        return (<Redirect to='/login' />)
    }

}
