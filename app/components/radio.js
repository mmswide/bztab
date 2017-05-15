/**
 * Created by Andriy on 11.10.2016.
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, PixelRatio} from 'react-native';
import {Button} from 'native-base';
import feedback from '../styles/feedback';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class Radio extends React.Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems: 'center', alignSelf: 'center'}}>
                {this.props.radios.types.map((obj, i) => {
                    var onPress = (index) => {
                        var value;
                        if (i == 0)
                            value = 'Yes';
                        else
                            value = 'No';
                        this.props.setRadio(value, index);
                        setTimeout(() => { this.props.submit(); }, 100);
                    }
                    return (
                        <TouchableOpacity key={i} style={feedback.optionButton} onPress={() => onPress(i)}>
                            <Text style={feedback.optionButtonText}>{i == 0 ? 'Yes' : 'No'}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}
