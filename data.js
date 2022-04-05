import React from "react";

import Onequestion from "./onequestion";
import Header from "./header.js";
export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header
          data={this.props.data}
          length={this.props.data.questions.length}
          setcontent={this.props.setcontent}
          left={"Questions"}
          mid={"All Questions"}
        />
        {this.props.data.questions.map((question) => {
          return (
            <div key={question.qid}>
              {" "}
              <Onequestion
                item={question}
                setcontent={this.props.setcontent}
                data={this.props.data}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
