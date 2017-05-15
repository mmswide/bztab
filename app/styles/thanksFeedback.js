/**
 * Created by Andriy on 07.10.2016.
 */
import {StyleSheet, PixelRatio} from 'react-native';

var thanksFeedback = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  overlay: {
      flex: 1,
      alignItems: 'center',
      width: undefined,
      height: undefined,
      alignSelf: 'stretch',
      backgroundColor: 'rgba(0,0,0,.3)',
      justifyContent: 'center',
  },
  signIn: {
      width: 350 / PixelRatio.get(),
      height: 110 / PixelRatio.get(),
    //  marginTop: 10 / PixelRatio.get(),
      borderRadius: 18 / PixelRatio.get(),
      backgroundColor: '#8E0404',
      borderColor: '#000000',
  },
  btnText: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 36 / PixelRatio.get(),
      padding: 27 /PixelRatio.get(),
  },
  linearGradient: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0)'
  },
  container: {
        flex: 1
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100 / PixelRatio.get(),
        paddingBottom: 100 / PixelRatio.get()
    },
    topText: {
        color: '#FFFFFF',
        fontSize: 42 / PixelRatio.get(),
        fontWeight: '600',
        width: 500 / PixelRatio.get(),
        textAlign: 'center'
    },
    middleText: {
        color: '#FFFFFF',
        fontSize: 33 / PixelRatio.get(),
        width: 500 / PixelRatio.get(),
        textAlign: 'center'
    },
    checkmark: {
        borderWidth: 4 / PixelRatio.get(),
        borderRadius: 70 / PixelRatio.get(),
        width: 140 / PixelRatio.get(),
        height: 140 / PixelRatio.get(),
        borderColor: '#efefef',
        textAlign: 'center',
        marginBottom: 20 / PixelRatio.get()
    },
    checkIcon: {
        color:'#efefef',
        fontSize: 150 / PixelRatio.get()
    },
    resetButton: {
        width: 200 / PixelRatio.get(),
        height: 66 / PixelRatio.get(),
        backgroundColor: '#8E0404',
        borderRadius: 25 / PixelRatio.get()
    },
    textStyleReset: {
        color: '#FFFFFF',
        fontSize: 28 / PixelRatio.get(),
        fontWeight: '600',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    resetButtonServer: {
        width: 150 / PixelRatio.get(),
        height: 30 / PixelRatio.get(),
        backgroundColor: '#485563',
        borderRadius: 25 / PixelRatio.get()
    },
    textStyleResetServer: {
        color: '#FFFFFF',
        fontSize: 18 / PixelRatio.get(),
        backgroundColor: 'rgba(0,0,0,0)'
    }
});

export default thanksFeedback;
