import  React, { Component } from  'react'
import {connect } from  'react-redux'
import  { Snackbar }  from  '@material-ui/core';
class  PopUp  extends  Component {
       constructor(props) {
           super(props);
           this.state  = {
                   flash:  ""
           };
       }

       componentWillReceiveProps(nextProps){
           this.setState({flash:  nextProps.flash})
       }

       handleClose  = () => {
           this.setState({flash:  ""});
       };

       render() {
           return (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    open={this.state.flash !== ""}
                    message={this.state.flash}
                />
           )
       }
}
function  mapStateToProps(state) {
       return {flash:  state.flash.msg}
};
export default connect(mapStateToProps)(PopUp)