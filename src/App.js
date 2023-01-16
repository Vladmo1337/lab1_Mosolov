import { DashboardLayout } from "./module/DashBoardLayout";
import { AuthForm } from "./containers/AuthForm";

export function App() {
    return <div style={{
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: 'column',
        height: '100vh'
    }}>
        <DashboardLayout>
        <AuthForm/>
        </DashboardLayout>
    </div>
}