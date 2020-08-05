import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import PendingFiles from "./PendingFiles";

export default class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file_url: '',
            yandex_file_name: '',
            pendingFiles: []
        };
        this.uploadFile = this.uploadFile.bind(this);
        this.addPendingFile = this.addPendingFile.bind(this);
        this.changePendingFilePublicUrlOnState = this.changePendingFilePublicUrlOnState.bind(this);
    }

    changePendingFilePublicUrlOnState(index, publicUrl) {
        let temp_pfiles = this.state.pendingFiles;

        try
        {
            temp_pfiles[index].public_url = publicUrl;
        }catch (e) {
            console.log(temp_pfiles);
        }

        this.setState({pendingFiles: temp_pfiles});
    }

    addPendingFile(file_url, yandex_file_name, getPublicUrlLink, id) {
        let t = this;
        let temp_files = this.state.pendingFiles;
        let pendingFile = {
            file_url: file_url,
            yandex_file_name: yandex_file_name,
            public_url: "Loading...",
            getPublicUrl: function () {
                let root_t = this;
                this.interval = setInterval(() => {
                    t.changePendingFilePublicUrlOnState(id,  "Checking...");
                    axios.get(getPublicUrlLink)
                        .then((response) => {
                            let data = response.data;
                            console.log(`Arr length is: ${t.state.pendingFiles.length} id is : ${id}`);
                            console.log(t.state.pendingFiles);
                            t.changePendingFilePublicUrlOnState(id, data.public_url);
                            clearInterval(root_t.interval);
                        })
                        .catch((response) => {
                            t.changePendingFilePublicUrlOnState(id,  "Not found...");
                        });
                }, 2000);
            },
            interval: null,
        };
        pendingFile.getPublicUrl();

        temp_files.push(pendingFile);

        this.setState({pendingFiles: temp_files});
    }

    uploadFile() {
        let t = this;
        axios.post('/api/upload', {
            file_url: this.state.file_url,
            yandex_file_name: this.state.yandex_file_name
        }).then(function (response) {
            let data = response.data;
            t.addPendingFile(t.state.file_url, t.state.yandex_file_name, data.url, t.state.pendingFiles.length );
        });
    }

    render() {

        return (
            <div>
                <div className="card-header">Yandex Disk Gateway</div>
                <div className="card-body">
                    <form>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="File URL"
                                aria-label="File URL"
                                value={this.state.file_url}
                                onChange={(event) => {
                                    this.setState({file_url: event.target.value})
                                }}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Provide yandex file name"
                                aria-label="Yandex File Name"
                                type="text"
                                value={this.state.yandex_file_name}
                                onChange={(event) => {
                                    this.setState({yandex_file_name: event.target.value})
                                }}
                            />
                        </InputGroup>
                        <Button variant="primary" onClick={this.uploadFile}>Upload</Button>

                    </form>
                    <br/>
                    <br/>
                    <PendingFiles pendingFiles={this.state.pendingFiles}/>
                </div>
            </div>
        );
    }
}
