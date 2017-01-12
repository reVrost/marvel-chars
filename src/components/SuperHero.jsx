import React, { Component } from 'react';
import "./SuperHero.css";

class SuperHero extends Component {
  render() {
    const thumbnailStyle = {
       width: 75,
       height: 75,
       backgroundImage: "url("+this.props.thumbnail+")",
       borderRadius: "50%",
       backgroundRadius: "50%",
       backgroundRepeat: "no-repeat",
       backgroundSize: "75px 75px"
    }
    return (
      <div className="SuperHero animated bounceIn">
        <div className="SuperHero__Thumbnail" style={thumbnailStyle}></div>
        <div className="SuperHero__Profile">
            {this.props.name}
            <br/> <br/>
            <div style={{fontWeight: 200, color:"#c6c6c6"}}>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default SuperHero;
