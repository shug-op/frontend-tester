import { Button, ChakraProvider, Code, CSSReset, Text, Textarea } from '@chakra-ui/core';
import React, { Component } from 'react';
import axios from 'axios';

class GETTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            status:"working",
            response: ""
        }
    }

    handleInputChange = e => {
         this.setState({
             url:e.target.value,
         })
    }

    sendGetRequest = e => {
        axios.get(this.state.url)
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

    render() {
      return (
        <div>
            Send a GET request to: {this.state.url}
            <Textarea value={this.state.url} onChange={this.handleInputChange} placeholder="enter api endpoint url here" size="sm"/>
            <Button variantColor="teal" variant="outline" onClick={this.sendGetRequest}>Send</Button>
            <Text></Text>
            <Text>Status:</Text> 
            <Code>{this.state.status}</Code>
            <Text>Response:</Text>
            <Code>{JSON.stringify(this.state.response)}</Code>
        </div>
      )
    }
  }
export default GETTab;