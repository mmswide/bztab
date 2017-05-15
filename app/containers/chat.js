/**
 * Created by Andriy on 13.10.2016.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Image, KeyboardAvoidingView, ScrollView, PixelRatio, Platform} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from '../components/header';
import {Button} from 'native-base';
import feedback from '../styles/feedback';
import {selectRadio, toPreviewQuest, rateStars, rateSlider, setComment, postFeedback, setMode, sendFeedbackFromCache, resetApp, sendFedbacks} from '../actions';
import ProgressBar from '../components/progressBar';
import ChatFooter from '../components/chatFooter';
import QuestionCloud from '../components/questionCloud';
import AnswerCloud from '../components/answerCloud';
import {MessageBar, MessageBarManager} from'react-native-message-bar';
import CheckConnection from './checkConnection';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class Chat extends React.Component {
    contentHeight: 0;
    scrollViewHeight: 0;

    scrollToBottom(animated = true) {
        const scrollHeight = this.contentHeight - this.scrollViewHeight;
        if (scrollHeight > 0) {
            this.refs.scrollView.scrollTo({y: scrollHeight, animated});
        }
    }

    componentDidMount() {
        MessageBarManager.registerMessageBar(this.refs.alert);
    }

    componentWillUnmount() {
        MessageBarManager.unregisterMessageBar();
    }

    render() {
        if (!this.props.questions.length || !this.props.conversation.length) {
            return null;
        }
        let currentQuestion = this.props.conversation[this.props.conversation.length - 1].question;

        let showBack = !!currentQuestion.id;
        let progress = (100 / (this.props.questions.length - 1)) * (this.props.conversation.length - 1);

        let answer = {
            id: currentQuestion.id,
            formId: this.props.formId
        };
        let hintText;
        if (currentQuestion.type == 'server' || currentQuestion.type == 'm') {
            answer.value = answer.chatValue = this.props.radioValue || (currentQuestion.options ? currentQuestion.options.types[0].value : null);
            answer.nResponse = 0;
            hintText = 'Tap on your answer, then press \'submit\'';
        } else if (currentQuestion.type == 's') {
            hintText = 'Tap on a star to choose your answer';
            answer.value = this.props.starsRate + '⭐';
            answer.chatValue = this.props.starsRate + ' stars';
            answer.nResponse = this.props.starsRate;
        } else if (currentQuestion.type == 'n' || currentQuestion.type == 'nps') {
            hintText = 'Tap on your answer';
            answer.value = this.props.sliderRate + '/10';
            answer.chatValue = this.props.sliderRate + ' out of 10';
            answer.nResponse = this.props.sliderRate;
        } else if (currentQuestion.type == 't') {
            hintText = 'Tap below to type an answer (optional), then press \'submit\'';
            answer.value = answer.chatValue = this.props.comment;
            answer.nResponse = 0;
        } else if (currentQuestion.type == 'email') {
            hintText = 'We will never share or sell your email address or send you spam.';
            answer.value = answer.chatValue = this.props.comment;
            answer.nResponse = 0;
        } else if (currentQuestion.type == 'last') {
            hintText = 'Tap below to finish!';
        }
        function getNextQuestion(nextId, questions, currentQuestion) {
            if (currentQuestion.type == 'last') {
                return false;
            }
            if (nextId === false) {
                return questions[questions.length - 1];
            }
            let nextQues = questions.filter(function(question) {
                return question._id === nextId;
            });
            let nextQuestion;
            if (nextQues.length === 1) {
                nextQuestion = nextQues[0];
            } else {
                nextQuestion = questions[currentQuestion.id + 1] || false;
            }
            return nextQuestion;
        }
        let nextQuestion = false;
        if (this.props.questions[currentQuestion.id].nextId !== undefined) {
            nextQuestion = getNextQuestion(this.props.questions[currentQuestion.id].nextId,
                this.props.questions, currentQuestion);
        } else if (this.props.questions[currentQuestion.id].conditions) {
            let conditions = this.props.questions[currentQuestion.id].conditions;
            let nextId = undefined;
            for (let i = 0; i < conditions.length; i++) {
                if (conditions[i].type === 'atMost') {
                    if (answer.nResponse <= conditions[i].limit) {
                        nextId = conditions[i].nextId;
                        break;
                    }
                }
                if (conditions[i].type === 'atLeast') {
                    if (answer.nResponse >= conditions[i].limit) {
                        nextId = conditions[i].nextId;
                        break;
                    }
                }
                if (conditions[i].type === 'valueEquals') {
                    if (answer.value === conditions[i].expectedValue) {
                        nextId = conditions[i].nextId;
                        break;
                    }
                }
            }
            nextQuestion = getNextQuestion(nextId, this.props.questions, currentQuestion);
        } else {
            nextQuestion = this.props.questions[currentQuestion.id + 1] || false;
        }

        if(this.props.showWarning) {
            MessageBarManager.showAlert({
                duration: 2000,
                message: this.props.showWarning,
                alertType: 'warning',
                viewTopOffset : 10, // Default is 0
                viewLeftOffset : 20, // Default is 0
                viewRightOffset : 20,
                viewBottomOffset : 160,
                position: 'bottom',
                stylesheetWarning : { backgroundColor : '#FFB80F', strokeColor : '#f29400' },
                messageStyle: {textAlign: 'center', color: '#fff', fontSize: 33}
            })
        }
        return (
            <KeyboardAvoidingView style={feedback.container}>
                <View style={feedback.header}>
                    <Header headerText={'Feedback'} progress={progress} toPreview={this.props.toPreview}
                            showBackBtn={showBack} scene={this.props.scene} goToComponent={this.props.goToComponent} resetApp={this.props.resetApp}/>
                    <ProgressBar progress={progress.toFixed()} space={20}/>
                    <View style={feedback.offlineMode}>
                        <CheckConnection
                            changeMode={this.props.setMode}
                            sendFeedbackFromCache={this.props.sendFeedbackFromCache}
                            customStyle={{color: 'red', fontSize: 13 / PixelRatio.get()}}/>
                    </View>
                </View>
                <ScrollView
                    style={feedback.chat} ref='scrollView'
                    onContentSizeChange={(w, h) => {
                        this.contentHeight = h;
                        this.scrollToBottom();
                    }}
                    onLayout={ev => this.scrollViewHeight = ev.nativeEvent.layout.height}
                >
                    {this.props.conversation.map((result, i) => {
                        if (result.answer) {
                            return (<View key={i}>
                                <QuestionCloud secondaryColor={this.props.config.secondaryColor} withAvatar message={result.question.question}/>
                              {/*  <AnswerCloud animate={true} tertiaryColor={this.props.config.tertiaryColor} withAvatar message={result.answer.chatValue}/> */}
                              <AnswerCloud animate={true} tertiaryColor={this.props.config.tertiaryColor} message={result.answer.chatValue}/>
                              <Button style={feedback.undoButton} textStyle={feedback.undoButtonText} onPress={() => this.props.toPreview()}>
                              {'\u2190 Undo'}
                              </Button>
                            </View>);
                        } else {
                            return (<QuestionCloud key={i} secondaryColor={this.props.config.secondaryColor} withAvatar message={result.question.question} animate={true}/>)
                        }
                    })}
                    <Text>{"\n"}{"\n"}</Text>
                    <MessageBar ref="alert"/>
                </ScrollView>
                <ChatFooter
                    primaryColor={this.props.config.primaryColor}
                    style={feedback.footer}
                    hintText={hintText}
                    question={currentQuestion}
                    radioIndex={this.props.radioIndex}
                    setRadio={this.props.setRadio}
                    starsRate={this.props.starsRate}
                    rateStars={this.props.rateStars}
                    sliderRate={this.props.sliderRate}
                    rateSlider={this.props.rateSlider}
                    setComment={this.props.setComment}
                    comment={this.props.comment}
                    conversation={this.props.conversation}
                    goToComponent={this.props.goToComponent}
                    submit={() => this.props.submit(currentQuestion, answer, nextQuestion, this.props.online)}
                    sendFedbacks={() => this.props.sendFedbacks({
                        outletID: this.props.restaurantId,
                        staff: this.props.selectedUser,
                        formId: this.props.formId,
                        questionId: Math.random().toString(36).substring(17)
                    }, this.props.online)}
                />

                {(Platform.OS === 'ios') ? <KeyboardSpacer/> : null}
            </KeyboardAvoidingView>

        );
    }
}

const mapStateToProps = (state) => {
    const props = {
        config: state.config.config,
        questions: state.questions.questions,
        conversation: state.conversation,
        radioValue: state.radios.radioValue,
        radioIndex: state.radios.radioIndex,
        starsRate: state.stars.value,
        sliderRate: state.slider.value,
        comment: state.comment.value,
        warningMessage: state.alert.message,
        showWarning: state.alert.message,
        online: state.connection.online,
        scene: state.routes.scene.sceneKey,
        formId: state.guid.value,
        restaurantId: state.users.restaurant.outletID,
        selectedUser: state.modals.user,
    };

    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRadio: (value, index) => {
            dispatch(selectRadio(value, index))
        },
        submit: (question, answer, nextQuestion, online) => {
            dispatch(postFeedback(question, answer, nextQuestion, online))
        },
        toPreview: () => {
            dispatch(toPreviewQuest())
        },
        rateStars: (value) => {
            dispatch(rateStars(value));
        },
        rateSlider: (value) => {
            dispatch(rateSlider(value));
        },
        setComment: (value) => {
            dispatch(setComment(value));
        },
        goToComponent: (key) => {
            dispatch(Actions[key])
        },
        setMode: (online) => {
            dispatch(setMode(online));
        },
        sendFeedbackFromCache: (online) => {
            dispatch(sendFeedbackFromCache(online));
        },
        resetApp: () => {
            dispatch(resetApp());
        },
        sendFedbacks: (whoServedAnswer, online) => {
            dispatch(sendFedbacks(whoServedAnswer, online));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
