/**
 * Created by Andriy on 11.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button} from 'native-base';
import feedback from '../styles/feedback';
import Radio from '../components/radio';
import RatingStars from '../components/stars';
import SliderComponent from '../components/slider';
import TextField from '../components/textField';

export default class ChatFooter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: true
        }
    }

    submitDisabled() {
        const {
            question,
            radioIndex,
            setRadio,
            starsRate,
            rateStars,
            sliderRate,
            rateSlider,
            setComment,
            comment,
            sendFedbacks
        } = this.props;

        if (question.type == 'm') {
            return radioIndex == null ? true : false
        } else if (question.type == 's') {
            return starsRate == 0 ? true : false;
        } else if (question.type == 'n') {
            return sliderRate == null ? true : false;
        } else if (question.type == 't') {
            return this.state.disabled ? true : false;
        } else if (question.type == 'email') {
            return this.state.disabled ? true : false;
        } else {
            return false;
        }

        return true;
    }

    onSubmit(submit) {
        this.setState({disabled: true});
        setTimeout(() => { this.setState({disabled: false}); }, 2000);
        submit();
    }

    render() {
        const {
            question,
            radioIndex,
            setRadio,
            starsRate,
            rateStars,
            sliderRate,
            rateSlider,
            setComment,
            comment,
            sendFedbacks,
            submit
        } = this.props;

        let component = null;

        if (question.type == 'server' || question.type == 'm') {
            component =
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}
                            keyboardShouldPersistTaps={true}>
                    <Radio
                        radios={question.options}
                        valueIndex={radioIndex}
                        setRadio={setRadio}
                        submit={() => this.onSubmit(submit)}
                    >
                    </Radio>
                </ScrollView>
        } else if (question.type == 's') {
            component =
                <RatingStars
                    starsRate={starsRate}
                    rateStars={rateStars}
                    submit={() => this.onSubmit(submit)}
                />
        } else if (question.type == 'nps' || question.type == 'n') {
            component =
                <SliderComponent
                    sliderRate={sliderRate}
                    rateSlider={rateSlider}
                    submit={() => this.onSubmit(submit)}
                />
        } else if (question.type == 't') {
            component = <TextField keyboardType="default" comment={comment} setComment={setComment}/>
        } else if (question.type == 'email') {
            component = <TextField keyboardType="email-address" comment={comment} setComment={setComment}/>
        } else if (question.type == 'last') {
            component = <Button style={[feedback.btnClaim]}
                                textStyle={feedback.btnClaimText} onPress={() => {sendFedbacks()}}>{'Finish \u2192'}</Button>
        }

        return (
            <View style={this.props.style}>
                <View style={feedback.hintContainer}>
                    <Text style={feedback.hintText}>{this.props.hintText}</Text>
                </View>
                <View style={feedback.footerContent}>

                    <View style={{flex: 4}}>
                        {component}
                    </View>
                    {
                        question.type == 'last' || question.type == 'nps' || question.type == 's' || question.type == 'n' || question.type == 'm' ? null : (<View style={{flex: 1.5}}>
                            <Button 
                                    style={[feedback.btnSubmit, {backgroundColor: this.props.primaryColor}]}
                                    textStyle={feedback.btnText}
                                    onPress={() => this.onSubmit(submit)}>{'Submit \u2192'}</Button>
                        </View>)
                    }
                </View>
            </View>
        );
    }
}
