import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default class PendingFiles extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Link</th>
                        <th>Filename</th>
                        <th>Public URL</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.pendingFiles.map((file, index) => {
                            if(file.file_url.length > 41) file.file_url = file.file_url.substring(0,41) + "...";
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{file.file_url}</td>
                                    <td>{file.yandex_file_name}</td>
                                    <td>{file.public_url}</td>
                                    <td><Button variant="danger">X</Button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}
