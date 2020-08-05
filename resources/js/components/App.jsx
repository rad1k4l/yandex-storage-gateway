import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";


import FileUpload from "./Yandex/FileUpload";
import Login from './Login'

class App extends React.Component {

    render() {

        return (
            <Router>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <ul>
                                    <li>
                                        <Link to="/login-r">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/yandex/upload">Yandex Upload</Link>
                                    </li>
                                </ul>
                                <Switch>
                                    <Route path="/login-r">
                                        <Login/>
                                    </Route>
                                    <Route path="/yandex/upload">
                                        <FileUpload/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;

if (document.getElementById('ya-disk')) {
    ReactDOM.render(<App/>, document.getElementById('ya-disk'));
}
