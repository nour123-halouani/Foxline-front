'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { setUserFromToken } from '@/_redux/reducers/authSlice';
import Loading from '../loading';

export default function AuthSuccessPage() {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            localStorage.setItem('accessToken', token);

            const user = jwtDecode(token);

            dispatch(setUserFromToken(user));

            router.replace('/customer/profile');
        } else {
            router.replace('/sign-in');
        }
    }, [dispatch, router]);

    return <Loading />;
}
