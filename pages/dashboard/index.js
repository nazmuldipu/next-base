import { useSelector, useDispatch } from "react-redux";
import { loggedOut, getToken } from "../../store/authSlice";
import { useEffect } from 'react'
import Router from 'next/router'
import DashLayout from './../../components/layouts/dashLayout';

const Dashboard = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!token) {
            const tok = getToken(dispatch);
            if (!tok)
                Router.push(`/login`)
        }
    }, [token])

    const handleLogout = () => {
        dispatch(loggedOut());
        Router.push("/login");
    };

    return (
        <DashLayout>
            <div>Dashboard Page token = {token || "null"} <button onClick={handleLogout}>Logout</button></div>
        </DashLayout>
    );
}

export default Dashboard;