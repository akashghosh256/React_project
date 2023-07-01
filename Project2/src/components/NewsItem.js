import React, { Component } from "react";
// import props from "prop-types";

export class NewsItem extends Component {
    // constructor(){
    //     super();
    //     console.log("hello i am a constructor from newsitem component");
    // }
  render() {
    let {title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width:"18rem"}}>

            {/* if image url is not available then use this default image url */}
          <img src={imageUrl?imageUrl:"https://images.wsj.net/im-772438/social"} className="card-img-top" alt="..." />
          <div className="card-body"  style={{ height: "14rem", overflow: "hidden" }}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;







