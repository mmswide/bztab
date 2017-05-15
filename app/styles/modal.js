/**
 * Created by Andriy on 10.10.2016.
 */


import {StyleSheet, PixelRatio} from 'react-native';

var modal = StyleSheet.create({
    modal: {
      height: 420 / PixelRatio.get(),
      width: 600 / PixelRatio.get(),
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 600 / PixelRatio.get(),
        height: 420 / PixelRatio.get(),
        padding: 35 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
    },
    avatar: {
        flexDirection:'row',
        color: '#fff',
        fontSize: 48 / PixelRatio.get(),
        backgroundColor: '#434448',
        width: 100 / PixelRatio.get(),
        height: 100 / PixelRatio.get(),
        borderRadius: 50 / PixelRatio.get(),
        textAlign: 'center',
        paddingTop: 16 / PixelRatio.get(),
        marginBottom: 20 / PixelRatio.get(),
        overflow: 'hidden',
        elevation: 6,
    },
    avatarIcon: {
        flexDirection:'row',
        width: 120 / PixelRatio.get(),
        height: 120 / PixelRatio.get(),
        borderRadius: 60 / PixelRatio.get(),
        paddingTop: 16 / PixelRatio.get(),
        marginBottom: 20 / PixelRatio.get(),
        overflow: 'hidden'
    },
    text: {
        color: '#000',
        fontSize: 30 / PixelRatio.get(),
        textAlign: 'center'
    },
    btnWrap: {
        flexDirection: 'row',
        marginTop: 20 / PixelRatio.get()
    },
    btnYes: {
        backgroundColor: '#8E0404',
        width: 150 / PixelRatio.get(),
        height: 75 / PixelRatio.get(),
        marginRight: 5 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
        elevation: 3,
    },
    btnNo: {
        borderColor: '#434448',
        borderWidth: 1 / PixelRatio.get(),
        backgroundColor: 'rgba(0,0,0,0)',
        width: 150 / PixelRatio.get(),
        marginLeft: 18 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
        height: 75 / PixelRatio.get(),
        elevation: 0,
    },
    btnSubmitName: {
        backgroundColor: '#0ADAFF',
        width: 150 / PixelRatio.get(),
        marginLeft: 5 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
        height: 40 / PixelRatio.get(),
    },
    btnContinue: {
        backgroundColor: '#0ADAFF',
        width: 150 / PixelRatio.get(),
        height: 40 / PixelRatio.get(),
        marginBottom: 15 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get()
    },
    btnText: {
        fontSize: 36 / PixelRatio.get(),
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 24 / PixelRatio.get(),
    },
    btnTextNo: {
        fontSize: 36 / PixelRatio.get(),
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#434448',
        padding: 24 / PixelRatio.get(),
    }
});

export default modal;
