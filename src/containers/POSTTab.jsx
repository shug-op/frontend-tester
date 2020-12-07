import { Button, ChakraProvider, Code, CSSReset, Switch, Text, Textarea } from '@chakra-ui/core';
import React, { Component } from 'react';
import axios from 'axios';

class POSTTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            status:"working",
            response: "",
            jsonpayloadinput: "",
            sendImage: false,
            selectedImage: null
        }
    }

    onFileChange = e => {
        this.setState({
            selectedImage: e.target.files[0]
        })
    }

    onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile", 
            this.state.selectedImage, 
            this.state.selectedImage.name 
        )
        console.log(this.state.selectedImage);
        axios.post(this.state.url, formData)
            .then(res=>{
                console.log(`success, ${JSON.stringify(res)}`);
                this.setState({
                    status: "working",
                    response: res
                })
            }).catch(e=>{
                console.log(`error, ${e}`)
                this.setState({
                    status:"error",
                    response:e
                })
            })

    }

    handleInputChange = e => {
         this.setState({
             url:e.target.value,
         })
    }

    handleJsonInputchange = e => {
        this.setState({
            jsonpayloadinput: e.target.value,
        })
    }

    handleSwitchChange = e => {
        this.setState({
            sendImage : e.target.value
        })
    }

    sendPostRequest = e => {
        let jsonParse;
        let success;
        try {
            success = true;
            jsonParse = JSON.parse(this.state.jsonpayloadinput);
        } catch {
            success=false;
            this.setState({
                status: "error with json input",
                response: ""
            })
        } if(success) {
            axios.post(this.state.url, jsonParse)
            .then(res=>{
                console.log(`success, ${JSON.stringify(res)}`);
                this.setState({
                    status: "working",
                    response: res
                })
            }).catch(e=>{
                console.log(`error, ${e}`)
                this.setState({
                    status:"error",
                    response:e
                })
            })
        }
    }

    render() {

        return (
            <div>
                Send a POST request to: {this.state.url}
                <Textarea value={this.state.url} onChange={this.handleInputChange} placeholder="enter api endpoint url here" size="sm"/>
                JSON Payload:
                <Textarea value={this.state.jsonpayloadinput} onChange={this.handleJsonInputchange} placeholder="enter json payload here" size="sm"/>
                <Text>Example: <Code>&#123;"name":"John", "age":30, "city":"New York"&#125;</Code></Text>
                <Button variantColor="teal" variant="outline" onClick={this.sendPostRequest}>Post JSON</Button>
                <br/>
                <Text>Status:</Text> 
                <Code>{this.state.status}</Code>
                <Text>Response:</Text>
                <Code>{JSON.stringify(this.state.response)}</Code>
                <br />
                <Text>Send an image: <Switch onChange={this.handleSwitchChange} value={this.state.sendImage}/></Text>
                {this.state.sendImage &&
                    <div>
                        <input type="file" onChange={this.onFileChange}/>
                        <button onClick={this.onFileUpload}>Upload</button>
                    </div>
                }
            </div>
        )
    }
  }
export default POSTTab;