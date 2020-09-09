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
              className={
                "divider " + this.props.dashed
                  ? " divider-dashed"
                  : " divider-solid"
              }
            ></div>
          </>
        );
    }
}
Divider.propTypes = {
    dashed: PropTypes.bool
}

export default Divider;