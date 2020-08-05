import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class Login extends React.Component {
    Login() {


    }

    componentWillMount() {
        this.setState({test: "42342342"});
    }

    render() {
        return (
            <div>
                <div className="card-header">Yandex Disk Gateway</div>
                <div className="card-body">
                    <form>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                value={this.state.test}
                                onChange={(v1, val) => {
                                    this.setState({test: val})
                                }}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Password **"
                                aria-label="Password"
                                type="password"

                            />
                        </InputGroup>
                        <Button variant="primary">Login</Button>
                    </form>
                </div>
            </div>
        )
    }

}
