/**
 * Created by Andriy on 11.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import feedback from '../styles/feedback';
import Slider from 'react-native-slider'

export default class SliderComponent extends React.Component {
    submit(rate) {
        this.props.rateSlider(rate);
        setTimeout(() => { this.props.submit(); }, 100);
    }

    render() {
        return (
          <View>
          <View style={feedback.sliderTextWrap}>
          <Text style={feedback.sliderTextLeft}>Unlikely</Text>
          <Text style={feedback.sliderTextRight}>Very likely</Text>
          </View>
            <View style={feedback.sliderFooterWrap}>
                <View style={feedback.slider}>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st0]} onPress={() => this.submit(0)}>
                        <Text style={[feedback.sliderNumber, feedback.sl0]}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st2]} onPress={() => this.submit(2)}>
                        <Text style={[feedback.sliderNumber, feedback.sl2]}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st4]} onPress={() => this.submit(4)}>
                        <Text style={[feedback.sliderNumber, feedback.sl4]}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st6]} onPress={() => this.submit(6)}>
                        <Text style={[feedback.sliderNumber, feedback.sl6]}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st8]} onPress={() => this.submit(8)}>
                        <Text style={[feedback.sliderNumber, feedback.sl8]}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st10]} onPress={() => this.submit(10)}>
                        <Text style={[feedback.sliderNumber, feedback.sl10]}>10</Text>
                    </TouchableOpacity>
                    </View></View>
                    <View style={feedback.sliderFooterWrap}>
                        <View style={feedback.sliderSecond}>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st1]} onPress={() => this.submit(1)}>
                        <Text style={[feedback.sliderNumber, feedback.sl1]}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st3]} onPress={() => this.submit(3)}>
                        <Text style={[feedback.sliderNumber, feedback.sl3]}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st5]} onPress={() => this.submit(5)}>
                        <Text style={[feedback.sliderNumber, feedback.sl5]}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st7]} onPress={() => this.submit(7)}>
                        <Text style={[feedback.sliderNumber, feedback.sl7]}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[feedback.sliderButton, feedback.st9]} onPress={() => this.submit(9)}>
                        <Text style={[feedback.sliderNumber, feedback.sl9]}>9</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>

        );
    }
}
