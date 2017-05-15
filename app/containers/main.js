import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import {View, Text, TextInput, PixelRatio, TouchableWithoutFeedback, Platform, BackAndroid, StatusBar} from 'react-native';
import Logo from '../components/logo';
import Footer from '../components/footer';
import mainStyles from '../styles/main';
import inputThemes from '../styles/inputThemes';
import {fetchInitials, fetchUsers, showWarning, setMode, sendFeedbackFromCache} from '../actions';
import {MessageBar, MessageBarManager} from'react-native-message-bar';
import CheckConnection from './checkConnection';
import dismissKeyboard from 'dismissKeyboard';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.props.getInitials();
    }

    componentDidMount() {
        MessageBarManager.registerMessageBar(this.refs.alert);

        BackAndroid.addEventListener('hardwareBackPress', function() {
            return BackAndroid.exitApp();
        });
    }

    componentWillUnmount() {
        MessageBarManager.unregisterMessageBar();
    }

    render() {
        const {config, getAllUsers} = this.props;
        let restaurantId;
        if (this.props.showWarning) {
            MessageBarManager.showAlert({
                viewLeftOffset: 50 / PixelRatio.get(),
                viewRightOffset: 50 / PixelRatio.get(),
                viewBottomOffset: 70 / PixelRatio.get(),
                position: 'bottom',
                message: this.props.showWarning,
                alertType: 'error',
                messageStyle: {textAlign: 'center', color: '#fff', fontSize: 33 / PixelRatio.get()},
                stylesheetError: {backgroundColor: '#F66679', strokeColor: '#FF0000'},
                onHide: () => this.props.warning('')
            })
        }

        console.log(config)
        let gradientColors = _.map(config.gradientColors);
        if (gradientColors.length == 0)
            gradientColors = ["#000000", "#0f0f0f"]

        return (
            <TouchableWithoutFeedback style={mainStyles.container} onPress={() => dismissKeyboard()}>
                <LinearGradient colors={gradientColors} style={mainStyles.linearGradient}>
                    <View style={mainStyles.logoView}><StatusBar hidden={true} />
                        {(Object.keys(config).length != 0) && (
                            <View>
                                <Logo style={mainStyles.logo} url={this.props.config.logoFile}/>
                                <Text style={mainStyles.reminderText}>The Restaurant ID is {this.props.config.outletID}</Text>
                            </View>
                        )}
                    </View>
                    <View style={mainStyles.inputGroup}>
                        <CheckConnection changeMode={this.props.setMode}
                                         sendFeedbackFromCache={this.props.sendFeedbackFromCache}/>

                            <TextInput style={mainStyles.input} theme={inputThemes.mainInput} autoFocus={true} placeholder='Restaurant ID' autoCapitalize='none' onChangeText={(RestaurantInput) => {
                                restaurantId = RestaurantInput
                            }}/>

                        <View>
                            <Button
                                onPress={() => {
                                    restaurantId ? this.props.getAllUsers(restaurantId, this.props.online) : null;
                                    dismissKeyboard();
                                }}
                                bordered textStyle={mainStyles.signInText} style={mainStyles.signIn}> Sign In </Button>
                        </View>
                        <Text style={mainStyles.versionText}>v1.7.7</Text>
                        <MessageBar ref="alert"/>
                    </View>
                    {(Platform.OS === 'ios') ? <KeyboardSpacer/> : null}
                    <View style={mainStyles.footer}>
                        <Footer style={mainStyles.footerText}/>
                    </View>
                </LinearGradient>
            </TouchableWithoutFeedback>

        );
    }
}

const mapStateToProps = (state) => {
    const props = {
        config: state.config.config,
        showWarning: state.alert.message,
        online: state.connection.onlines
    };

    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: (restaurantId, online) => {
            dispatch(fetchUsers(restaurantId, online));
        },
        getInitials: () => {
            dispatch(fetchInitials());
        },
        warning: (message) => {
            dispatch(showWarning(message));
        },
        setMode: (online) => {
            dispatch(setMode(online));
        },
        sendFeedbackFromCache: (online) => {
            dispatch(sendFeedbackFromCache(online));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
