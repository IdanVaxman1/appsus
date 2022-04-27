import {EmailApp} from './apps/email/pages/app-email.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
        <Route path="/email" component={EmailApp} />
    </Router>
}