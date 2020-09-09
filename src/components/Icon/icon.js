import React ,{ Component } from 'react'
import PropTypes from 'prop-types'

class Icon extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return this.props.type == "icon" ? (
          <span
            className={"icon iconfont " + this.props.icon}
            {...this.props}
          ></span>
        ) : (
          ""
        );
    }
}
Icon.propTypes = {
  icon: PropTypes.string.isRequired
};
export default Icon;