import 'reactflow/dist/style.css';

import {Router} from "react-router-dom";

import history from './history';
import Routes from "./routes";
import {GlobalStyle} from "./styles/global";

function App() {

    return (
        <>
            <Router history={history}>
                <Routes />
            </Router>
            <GlobalStyle />
        </>
    )
}

export default App
