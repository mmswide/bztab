/**
 * Created by Andriy on 10.10.2016.
 */

import {StyleSheet, PixelRatio} from 'react-native';

var feedback = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    header: {
        height: 180 / PixelRatio.get(),
        borderBottomWidth: 2 / PixelRatio.get(),
        borderColor: '#EEEEEE'
    },
    headerText: {
        color: '#fff',
        fontSize: 33 / PixelRatio.get(),
        alignSelf: 'center',
        marginTop: 13 / PixelRatio.get()
    },
    chat: {
        flex: 8,
        paddingLeft: 30 / PixelRatio.get(),
        paddingRight: 30 / PixelRatio.get(),
        paddingTop: 15 / PixelRatio.get()
    },
    footer: {
        flex: 2,
        height: 220 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContent: {
        flexDirection: 'row',
        padding: 30 / PixelRatio.get(),
        alignItems: 'center'
    },
    btnSubmit: {
        backgroundColor: '#CCCCCC',
        width: 180 / PixelRatio.get(),
        marginRight: 10 / PixelRatio.get(),
        borderRadius: 20 / PixelRatio.get(),
        marginLeft: 40 / PixelRatio.get(),
        marginBottom: 5 / PixelRatio.get(),
        alignSelf: 'flex-end',
        overflow: 'hidden',
        height: 70 / PixelRatio.get()
    },
    btnClaim: {
        backgroundColor: '#0e0e0e',
        width: 280 / PixelRatio.get(),
        alignSelf: 'center',
        height: 90 / PixelRatio.get(),
        borderRadius: 35 / PixelRatio.get(),
    },
    btnClaimText: {
        fontSize: 36 / PixelRatio.get(),
        padding: 18 / PixelRatio.get(),
        fontWeight: '600',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    btnText: {
        fontSize: 33 / PixelRatio.get(),
        padding: 10 / PixelRatio.get(),
        fontWeight: '600',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    hintContainer: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        borderBottomWidth: 2 / PixelRatio.get(),
        borderColor: '#EEEEEE',
        paddingBottom: 5 / PixelRatio.get()
    },
    placeholderText:{
      fontWeight: '600',
      fontSize: 36 / PixelRatio.get(),
      color: 'red',
    },
    hintText: {
        textAlign: 'center',
        fontSize: 27 / PixelRatio.get(),
        fontStyle: 'italic',
        flex: 1
    },
    labelStyle:{
        fontSize: 33 / PixelRatio.get(),
        color: '#000000',
    },
    labelWrapStyle: {
        marginLeft: 10 / PixelRatio.get(),
        marginTop: 5 / PixelRatio.get()
    },
    progressWrap: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginLeft: 30 / PixelRatio.get(),
        marginRight: 30 / PixelRatio.get()
    },
    progress: {
        borderTopWidth: 2 / PixelRatio.get(),
        borderColor: '#80ADAD',
        paddingTop: 5 / PixelRatio.get(),
    },
    progressText: {
        fontSize: 16 / PixelRatio.get(),
        textAlign: 'right'
    },
    avatar: {
        flexDirection:'row',
        backgroundColor: '#fff',
        width: 30 / PixelRatio.get(),
        height: 30 / PixelRatio.get(),
        borderRadius: 15 / PixelRatio.get(),
        position: 'absolute',
        overflow: 'hidden'
    },
    avatarQuest: {
        bottom: -20 / PixelRatio.get(),
        left: -45 / PixelRatio.get()
    },
    avatarAnswer: {
        bottom: -20 / PixelRatio.get(),
        right: -45 / PixelRatio.get()
    },
    questWrap: {
        marginLeft: 45 / PixelRatio.get(),
        marginBottom: 20 / PixelRatio.get()
    },
    questTailImg: {
        position: 'absolute',
        left: -25,
        bottom: 2,
        height: 20 / PixelRatio.get(),
        resizeMode: 'contain'
    },
    quest: {
        fontSize: 36 / PixelRatio.get(),
        fontWeight: '600',
        backgroundColor: '#8E0404',
        width: 420 / PixelRatio.get(),
        padding: 30 / PixelRatio.get(),
        borderRadius: 27 / PixelRatio.get(),
        overflow: 'hidden',
        color: '#FFFFFF'
    },
    answWrap: {
        marginRight: 10 / PixelRatio.get(),
        marginBottom: 5 / PixelRatio.get(),
        alignSelf: 'flex-end'
    },
    answTailImg: {
        position: 'absolute',
        right: -25,
        bottom: 2,
        height: 20 / PixelRatio.get(),
        resizeMode: 'contain'
    },
    answer: {
        fontSize: 20 / PixelRatio.get(),
        backgroundColor: '#EFEFEF',
        width: 250 / PixelRatio.get(),
        padding: 20 / PixelRatio.get(),
        borderRadius: 27 / PixelRatio.get(),
        color: '#000',
        overflow: 'hidden'
    },
    optionButton: {
        marginLeft: 30 / PixelRatio.get(),
        marginRight: 30 / PixelRatio.get(),
        padding: 20 / PixelRatio.get(),
        backgroundColor: '#4a4a4a',
        borderRadius: 12 / PixelRatio.get(),
        elevation: 6,
        justifyContent:'center', alignItems: 'center', alignSelf: 'center'
    },
    optionButtonText: {
      fontSize: 33 / PixelRatio.get(),
      color: '#fff',
    },
    undoButton: {
      marginRight: 10 / PixelRatio.get(),
      marginBottom: 20 / PixelRatio.get(),
      alignSelf: 'flex-end',
      backgroundColor: 'white',
      elevation: 0,
    },
    undoButtonText: {
      color: 'black',
    },
    slider: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60 / PixelRatio.get()
    },
    sliderSecond: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 3 / PixelRatio.get(),
        marginLeft: 35 / PixelRatio.get(),
        marginRight: 35 / PixelRatio.get(),
        marginBottom: 18 / PixelRatio.get(),
        height: 60 / PixelRatio.get()
    },
    sliderButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12 / PixelRatio.get(),
        marginRight: 12 / PixelRatio.get(),
        height: 70 / PixelRatio.get(),
        width: 70 / PixelRatio.get(),
        borderRadius: 35 / PixelRatio.get(),
        borderWidth: 2 / PixelRatio.get(),
    },
    sliderNumber: {
        fontWeight: '300',
        fontSize: 39 / PixelRatio.get(),
    },
    sl0: {
        color: '#de1755',
    },
    st0: {
        borderColor: '#de1755',
    },
    sl1: {
        color: '#e3283c',
    },
    st1: {
        borderColor: '#e3283c',
    },
    sl2: {
        color: '#ec5842',
    },
    st2: {
        borderColor: '#ec5842',
    },
    sl3: {
        color: '#f27638',
    },
    st3: {
        borderColor: '#f27638',
    },
    sl4: {
        color: '#f7891b',
    },
    st4: {
        borderColor: '#f7891b',
    },
    sl5: {
        color: '#ffad1f',
    },
    st5: {
        borderColor: '#ffad1f',
    },
    sl6: {
        color: '#ceac22',
    },
    st6: {
        borderColor: '#ceac22',
    },
    sl7: {
        color: '#9aae2a',
    },
    st7: {
        borderColor: '#9aae2a',
    },
    sl8: {
        color: '#63af32',
    },
    st8: {
        borderColor: '#63af32',
    },
    sl9: {
        color: '#45bb55',
    },
    st9: {
        borderColor: '#45bb55',
    },
    sl10: {
        color: '#0abb5a',
    },
    st10: {
        borderColor: '#0abb5a',
    },
    sliderTrack: {
        height: 3 / PixelRatio.get()
    },
    sliderThumbStyle: {
        height: 65 / PixelRatio.get(),
        width: 65 / PixelRatio.get(),
        backgroundColor: '#8E0404',
        borderWidth: 7 / PixelRatio.get(),
        borderColor: '#fff',
        borderRadius: 35 / PixelRatio.get(),
        overflow: 'hidden'
    },
    sliderSelectedValue: {
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0 / PixelRatio.get(),
        top: -20 / PixelRatio.get()
    },
    sliderImg: {
        height: 100 / PixelRatio.get(),
        resizeMode: 'contain',
        alignItems: 'center'
    },
    sliderValue: {
        fontSize: 36 / PixelRatio.get(),
        fontWeight: '600'
    },
    starsFooterWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sliderFooterWrap: {
        flex: 1,
        marginTop: 8 / PixelRatio.get(),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sliderTextWrap: {
      flexDirection: 'row',
    },
    sliderTextLeft: {
      flex: 1,
      fontSize: 18 / PixelRatio.get(),
      marginTop: 6 / PixelRatio.get(),
      color: '#de1755',
    },
    sliderTextRight: {
      flex: 1,
      fontSize: 18 / PixelRatio.get(),
      marginTop: 6 / PixelRatio.get(),
      textAlign: 'right',
      color: '#0abb5a',
    },
    offlineMode: {
        position: 'absolute',
        bottom: -5 / PixelRatio.get(),
        right: 0,
        left: 0
    }
});

export default feedback;
