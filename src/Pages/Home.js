import React, { Component } from 'react'

export default class Home extends Component {
  render() {
      return (
        <div>
          <div>
              Hello Home
          </div>
          <div>
              <img src={require("../images/dev1.jpg")}
                   height="541"
                   width="866"
                   alt="devochka1"
               />
          </div>
        </div>
      )
   }
}
