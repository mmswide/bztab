/**
 * Created by Andriy on 13.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, PixelRatio, TextInput} from 'react-native';
import {InputGroup, Input} from 'native-base';
import feedback from '../styles/feedback';
import inputThemes from '../styles/inputThemes';

export default class TextField extends React.Component {
    render() {
        return (
            <View style={feedback.starsFooterWrap}>
                <View style={{flex: 1}} theme={inputThemes.mainInput}>
                    <TextInput autoCorrect autoFocus={true} autoCapitalize='none' style={feedback.placeholderText} keyboardType={this.props.keyboardType} placeholder='Tap here to type...' value={this.props.comment} onChangeText={(freeText) => {this.props.setComment(freeText)}}/>
                </View>
            </View>

        );
    }
}
