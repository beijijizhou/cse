import React from "react";
import Model from "../models/model.js";
import Nav from "./nav.js";
import Data from "./data.js";
export default class FakeStackOverflow extends React.Component {
  constructor(props) {
    super(props);
    var temp = new Model().data;
    
    this.setcontent = this.setcontent.bind(this);
    this.state = {
      navbar: 
        <Nav
          data={temp}
          setnavbar={this.setnavbar}
          setcontent={this.setcontent}
        />
      ,
      content: (
        <Data
          handleTitleClick={this.handleTitleClick}
          data={temp}
          setcontent={this.setcontent}
        />
      ),
    };
  }
  setcontent(newcontent) {
    this.setState({ content: newcontent });
  }
  setnavbar(newnav) {
    this.setState({ navbar: newnav });
  }
  render() {
    
    return (
      <div>
        {this.state.navbar}
        {this.state.content}
      </div>
    );
  }
}
