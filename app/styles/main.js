/**
 * Created by Andriy on 06.10.2016.
 */
import {StyleSheet, PixelRatio} from 'react-native';

var mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    linearGradient: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    logoView: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo: {
        width: 450 / PixelRatio.get(),
        height: 180 / PixelRatio.get(),
        resizeMode: 'contain'
    },
    inputGroup: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 350 / PixelRatio.get(),
        height: 99 / PixelRatio.get(),
        backgroundColor: '#EFEFEF',
        borderRadius: 12 / PixelRatio.get(),
        color: '#000000',
        borderWidth: 0,
        padding: 24 /PixelRatio.get(),
        fontSize: 33 /PixelRatio.get(),
    },
    signIn: {
        marginTop: 18 / PixelRatio.get(),
        borderRadius: 15 / PixelRatio.get(),
        width: 350 / PixelRatio.get(),
        height: 130 / PixelRatio.get(),
        borderWidth: 0,
        backgroundColor: '#bfbfbf',
        padding: 39 / PixelRatio.get(),
        elevation: 5,
    },
    signInText: {
        color: '#ffffff',
        fontSize: 45 / PixelRatio.get(),
        padding: 39 / PixelRatio.get(),
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    footerText: {
        color: '#3F3F3F',
        fontSize: 21 / PixelRatio.get(),
        marginBottom: 20 / PixelRatio.get(),
        fontWeight: '400'
    },
    reminderText: {
        color: '#FFFFFF',
        fontSize: 23 / PixelRatio.get(),
        marginTop: 210 / PixelRatio.get(),
        width: 500 / PixelRatio.get(),
        justifyContent: 'center',
        textAlign: 'center',
    },
    versionText: {
        color: '#FFFFFF',
        fontSize: 12 / PixelRatio.get(),
        marginTop: 120 / PixelRatio.get(),
        justifyContent: 'center',
        textAlign: 'center',
    }
});

export default mainStyles;
