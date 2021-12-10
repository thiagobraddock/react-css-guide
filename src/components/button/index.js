import React, { Component } from "react";
import { StyledButton } from './styles';

class Button extends Component {

    render() {
        return(
            <StyledButton onClick={ this.ola }>{ this.props.children }</StyledButton>
        );
    }

    ola() {
        alert("Ola");
    }

}

export default Button;