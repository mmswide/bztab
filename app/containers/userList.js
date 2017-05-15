/**
 * Created by Andriy on 07.10.2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, Text, PixelRatio, TouchableWithoutFeedback, BackAndroid} from 'react-native';
import {InputGroup, Icon, Input, Button} from 'native-base';
import AlphabetListView from 'react-native-alphabetlistview';
import Header from '../components/header';
import ModalComponent from '../components/modal';
import userList from '../styles/userList';
import inputThemes from '../styles/inputThemes';
import modal from '../styles/modal'
import {SectionHeader, Cell} from '../components/alphabetListComponents';
import {fetchConfig, showModal, searchUsers} from '../actions';
import ListUserFooter from '../components/listUserFooter';
import dismissKeyboard from 'dismissKeyboard';


class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', function () {
            return true;
        });

        console.log(this.props.restaurant)
        // this.props.getConfig(this.props.restaurant.outletID, this.props.online);
    }

    componentWillMount() {
        this.props.getConfig(this.props.restaurant.outletID, this.props.online);
    }

    componentWillUnMount() {
        this.props.getConfig(this.props.restaurant.outletID, this.props.online);
    }

    render() {
        let serverName;

        return (
            <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
                <View style={userList.container}>
                    <View style={userList.header}>
                        <Header headerText={'Select your server account'}/>
                        { Object.keys(this.props.allUsers).length ? (
                            <InputGroup borderType='underline' style={userList.search} theme={inputThemes.mainInput}>
                                <Icon name='ios-search' style={{color: '#CACACA', fontSize: 33 / PixelRatio.get()}}/>
                                <Input style={{fontSize: 27 / PixelRatio.get()}}
                                       onChangeText={(key) => {
                                           this.props.searchUsers(key);
                                           this.refs.alphabetList ? this.refs.alphabetList.scrollToSection() : null
                                       }} placeholder='Search for your name'/>
                            </InputGroup>) : null
                        }
                    </View>
                    <View style={userList.users}>
                        {
                            Object.keys(this.props.allUsers).length ? (
                                Object.keys(this.props.users).length ? (
                                    <AlphabetListView
                                        ref='alphabetList'
                                        keyboardShouldPersistTaps={true}
                                        hideSectionList={true}
                                        data={this.props.users}
                                        cell={Cell}
                                        cellHeight={30}
                                        sectionHeader={SectionHeader}
                                        sectionHeaderHeight={22.5}
                                        cellProps={{
                                            showModal: this.props.showModal
                                        }}
                                    />) : (<Text style={userList.notFound}>Nothing found :(</Text>)
                            ) : (
                                <View style={userList.nameInput}>
                                    <InputGroup
                                        style={{flex: 2, borderWidth: 1 / PixelRatio.get(), borderColor: '#ccc'}}
                                        theme={inputThemes.mainInput}>
                                        <Input placeholder='Enter your name' onChangeText={(serverInput) => {
                                            serverName = serverInput
                                        }}/>
                                    </InputGroup>
                                    <Button onPress={() => {
                                        serverName ? this.props.showModal(true, {fname: serverName}) : null;
                                        dismissKeyboard()
                                    }}
                                            style={modal.btnSubmitName} textStyle={modal.btnText}>Submit name</Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={userList.footer}>
                        <ListUserFooter goToComponent={this.props.goToComponent}/>
                    </View>
                    <ModalComponent
                        modalVisible={this.props.modalVisible}
                        showModal={this.props.showModal}
                        selectedUser={this.props.selectedUser}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state) => {
    const props = {
        users: state.users.users,
        allUsers: state.users.allUsers,
        modalVisible: state.modals.modalVisible,
        selectedUser: state.modals.user,
        online: state.connection.onlines,
        restaurant: state.users.restaurant
    };

    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (visible, user) => {
            dispatch(showModal(visible, user));
        },
        goToComponent: (key) => {
            dispatch(Actions[key])
        },
        searchUsers: (key) => {
            dispatch(searchUsers(key));
        },
        getConfig: (restaurantId, online) => {
            dispatch(fetchConfig(restaurantId, online));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
