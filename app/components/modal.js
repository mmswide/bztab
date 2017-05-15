/**
 * Created by Andriy on 10.10.2016.
 */

import React, {Component} from 'react';
import {View, Text, ListView, TouchableHighlight, Image} from 'react-native';
import {Button} from 'native-base';
import modal from '../styles/modal';
import {connect} from 'react-redux';
import {confirmUser} from '../actions';
import {Actions} from 'react-native-router-flux';
var Modal = require('react-native-modalbox');

class ModalComponent extends React.Component {
    render() {
        let selectedUser = this.props.selectedUser;
        return (
            <Modal
                style={modal.modal}
                isOpen={this.props.modalVisible}
                onClosed={() => {
                    this.props.showModal(false, selectedUser);
                    this.props.confirmUser(false)
                }}
            >{!_.isEmpty(selectedUser) ?
                <View style={modal.container}>
                    <View style={modal.innerContainer}>
                        {selectedUser.icon ?
                            <Image source={{uri: selectedUser.icon.url}} style={modal.avatarIcon}/> :
                            <Text style={modal.avatar}>{selectedUser.fname.charAt(0).toUpperCase()}</Text>
                        }
                        <Text style={modal.text}>Are you <Text style={{fontWeight: 'bold'}}>{selectedUser.fname}</Text>?</Text>
                        <View style={modal.btnWrap}>
                            <Button style={[modal.btnYes, {backgroundColor: this.props.config.primaryColor}]} textStyle={modal.btnText} onPress={() => {
                                this.props.confirmUser(true);
                                this.props.goToComponent('thanksDining');
                                this.props.showModal(false, selectedUser)
                            }}>Yes</Button>
                            <Button style={modal.btnNo} textStyle={modal.btnTextNo}
                                    onPress={() => {
                                        this.props.showModal(false, {})
                                    }}>No</Button>
                        </View>
                        <Text style={modal.text}>{"\n"}Please answer, then hand this tablet to the customer</Text>
                    </View>
                </View> : null
            }
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    const props = {
        config: state.config.config,
        confirmedUser: state.modals.confirmedUser,
    };

    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        confirmUser: (user) => {
            dispatch(confirmUser(user));
        },
        goToComponent: (key) => {
            dispatch(Actions[key])
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
