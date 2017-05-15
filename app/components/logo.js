/**
 * Created by Andriy on 06.10.2016.
 */
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import { Container, Content, Icon  } from 'native-base';

export default class Logo extends React.Component {
    render(){
        return (
        	<Image source={{uri: this.props.url}} style={this.props.style} />
        );
    }
}
