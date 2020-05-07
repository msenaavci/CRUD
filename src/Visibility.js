import React, { Component } from "react";
import axios from 'axios'

export default class Visibility extends Component {
  constructor() {
    super();
    this.state = {
      visibility: [],
      isLoading: false
    };
  }

  handleEdit = id => {

  }
  addNewVis = event => {
    
  }

  handleDelete = id => {
    // let visibility = this.state.visibility;
    // let index = visibility.findIndex(vis => {
    //   return vis.visibility_id === id;
    // })
    // visibility.splice(index,1) ;
    // this.setState({
    //   visibility : visibility
    // })
    axios("http://qa.creactive.today:2001/Parlangi/xdata/par_lu_visibility"+id, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        Authorization: "Basic QmFzaWNVc2VyOkJhc2ljUGFzcw=="
      }
    })

  }

  handleSubmit = event => {
    event.preventDefault();
    axios("http://qa.creactive.today:2001/Parlangi/xdata/par_lu_visibility", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        Authorization: "Basic QmFzaWNVc2VyOkJhc2ljUGFzcw=="
      }
    })
   
    .then(visibility => {
        this.setState({visibility : visibility.data.value,
        isLoading: true})
    })
    .catch((error)=> {
        console.log('error'+ error)
      })
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <button>Click</button>
          {this.state.visibility.map((details, index) => {
              return <div><li key={details.visibility_id}>
              visibility : {details.visibility} <br/>
              visibility_url : {details.Visibility_url}
              <br/>
              <button onClick={this.handleDelete(details.visibility_id)}>delete</button>
              <button onClick={this.handleEdit(details.visibility_id)}>edit</button>
              </li>
              </div>
          })}
          <br/>
        {this.state.isLoading ? <div><input type='text'/><button onClick={this.addNewVis()}>Add New Visibility</button></div> : false}
          </form>
      </div>
    );
  }
}
