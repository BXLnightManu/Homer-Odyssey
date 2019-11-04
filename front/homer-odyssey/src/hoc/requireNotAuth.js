import React, { Component } from 'react';
import { connect } from  'react-redux';

export  default  function requireNotAuth (ComposedComponent) {
    class NoAuthentication extends Component {
        componentWillMount() {
            if(this.props.authenticated)
                this.props.history.push("/profile");
        }
        componentWillUpdate() {
            if(this.props.authenticated)
                this.props.history.push("/profile");
        }
        render() {
             return <ComposedComponent {...this.props} />
        }
    }
    function  mapStateToProps(state) {
        return { authenticated: state.auth.token };
    }   
    return connect(mapStateToProps)(NoAuthentication);
} 