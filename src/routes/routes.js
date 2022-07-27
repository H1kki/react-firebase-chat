import Login from '../components/Login'
import Chat from "../components/Chat";

export const publicRoutes = [
    {path: '/login', Component: Login, exact: true}
]

export const privateRoutes = [
    {path: '/chat', Component: Chat, exact: true}
]