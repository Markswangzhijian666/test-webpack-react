import React ,{ Component } from 'react'
import PropTypes from "prop-types";
import './divider.less'

class Divider extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
          <>
            <div
                style={this.props.style}
              className={
                "divider" +
                (this.props.type ? " divider-"+this.props.type : " divider-horizontal") +
                (this.props.dashed ? " divider-dashed" : "") +
                (this.props.children
                  ? " divider-with-text" +
                    (this.props.orientation
                      ? " divider-with-text-" + this.props.orientation
                      : " divider-with-text-center")
                  : "") +
                (this.props.plain ? " divider-with-text-plain" : "") +
                (this.props.className ? ' '+this.props.className: '')
              }
            >
              {this.props.children ? (
                <span className="divider-with-text-inner">
                  {this.props.children}
                </span>
              ) : null}
            </div>
          </>
        );
    }
}
Divider.propTypes = {
  dashed: PropTypes.bool,
  type: PropTypes.string,
  orientation: PropTypes.string,
  plain: PropTypes.bool,
  className:PropTypes.string,
  style:PropTypes.object
};

export default Divider; 