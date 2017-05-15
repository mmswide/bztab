/**
 * Created by Andriy on 07.10.2016.
 */
import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {View, Text, ScrollView, Image} from 'react-native';
import thanksFeedback from '../styles/thanksFeedback';
import LinearGradient from 'react-native-linear-gradient';
import {resetApp, searchUsers} from '../actions';

class Main extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    const { config } = this.props;
    console.log(config);
      return (
        <Image source={{uri: config.bgFile1}} style={thanksFeedback.backgroundImage}>
          <View style={thanksFeedback.overlay}>
              <ScrollView keyboardShouldPersistTaps={true}>
                  <View style={thanksFeedback.content}>
                      <Text style={thanksFeedback.checkmark}>
                          <Icon name='ios-checkmark' style={thanksFeedback.checkIcon}/>
                      </Text>
                      <Text style={thanksFeedback.topText}>Thanks for your feedback! {"\n"}{"\n"}</Text>

                      <Text style={thanksFeedback.middleText}>If someone else on your table would like to give feedback, please tap below to restart {"\n"}{"\n"}</Text>
                      <View>
                          <Button bordered textStyle={thanksFeedback.btnText} style={[thanksFeedback.signIn, {backgroundColor: this.props.config.primaryColor}]}
                                  //onPress={() => {this.props.resetApp(); this.props.searchUsers(''); this.props.goToComponent('userList');}
                                  onPress={() => {this.props.resetApp(); this.props.goToComponent('thanksDining');}
                                }>
                              Restart </Button>
                      </View>

                      <Text style={thanksFeedback.middleText}>{"\n"}Otherwise, please now return this tablet to {this.props.server.fname}, your server. {"\n"}{"\n"}</Text>
                      <View>
                          <Button textStyle={thanksFeedback.textStyleResetServer}
                                  style={thanksFeedback.resetButtonServer}
                                  onPress={() => {this.props.resetApp(); this.props.searchUsers(''); this.props.goToComponent('userList');}
                                }>
                              Server Reset </Button>
                      </View>
                  </View>
              </ScrollView>
          </View>
          </Image>
      );
  }
}

const mapStateToProps = (state) => {
    const props = {
        config: state.config.config,
        server: state.modals.user,
        reward: state.users.restaurant.reward
    };

    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToComponent: (key) => {
            dispatch(Actions[key])
        },
        resetApp: () => {
            dispatch(resetApp())
        },
        searchUsers: (key) => {
            dispatch(searchUsers(key));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
