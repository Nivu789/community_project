import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { BASE_URL } from '../config/config';
import { Navigate } from 'react-router-dom';

const IsAdminAuthenticated = ({children}:{children:React.ReactNode}) => {

    const [authenticated, setAuthenticated] = useState<Boolean | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/user/auth`, {
                    headers: {
                        Authorization: localStorage.getItem("adminToken")
                    }
                });

                if (response.data.error) {
                    setAuthenticated(false);
                } else {
                    setAuthenticated(true);
                }
            } catch (error) {
                setAuthenticated(false);
            }
        };

        checkAuth();
    }, []);
  
    if (authenticated === null) {
        return <div>Loading....</div>;
    }

    if (authenticated) {
        return <Navigate to='/admin/dashboard' />;
    }

    return <div>{children}</div>;
}

export default IsAdminAuthenticated