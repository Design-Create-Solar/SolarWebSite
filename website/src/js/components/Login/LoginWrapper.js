import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { BACK_BASE_URL } from '../MultiplePages/constants';

export default function LoginWrapper({ children }) {
    const [comp, setComp] = React.useState(
        <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            height: '90vh',
        }}>
            <h1 style={{ 
                letterSpacing: '2rem',
                backgroundImage: 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
                fontSize: 100,
            }}>
                Loading
            </h1>
        </div>
    );
    const history = useHistory();
    React.useEffect(() => {
        async function verify() {
            const res = await fetch(`${BACK_BASE_URL}/auth/verify`, {
                credentials: 'include',
                mode: 'cors',
                headers: {
                    "Access-Control-Allow-Credentials": true,
                    'Content-Type': 'application/json',
                },
            })
            if (res.status === 200) {
                const childrenWithHistory = React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { history })
                    }
                    return child;
                })
                setComp(<>{childrenWithHistory}</>);
            } else setComp(<Redirect to='/login' />);
        }
        verify();
    }, []);
    
    return comp;
}
