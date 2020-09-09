import React ,{ Component} from 'react'
import PropTypes from 'prop-types'
import './btn.less'

class ButtonCom extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    } 
    render(){
        return (
          <button
            {...this.props}
            className={
              "btn " +
              (this.props.size ? " btn-" + this.props.size : " btn-ml") +
              (this.props.type ? " btn-" + this.props.type : "") +
              (this.props.disabled ? " btn-disabled" : "")
            }
          >

            <span>{this.props.children}</span>
          </button>
        );
    }
}

ButtonCom.propTypes = {
//   children: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ButtonCom