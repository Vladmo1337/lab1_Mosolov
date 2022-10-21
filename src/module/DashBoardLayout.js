import Header from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export function DashboardLayout({ win }) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between'
    }}><Header /><Main>{win}</Main><Footer /></div>
}