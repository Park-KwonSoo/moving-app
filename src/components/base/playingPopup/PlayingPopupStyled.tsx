import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        borderTopColor : '#ddd',
        borderTopWidth : 1,
        position : 'absolute',
        top : '90%',
        height : '10%',
        width : '100%',
        zIndex : 50,
        backgroundColor : 'rgba(255, 255, 255, .9)',
        display : 'flex',
        flexDirection : 'column',
    },

    musicPopupWrapper : {
        display : 'flex',
        flexDirection : 'row',
        height : '96%',
    },

    musicPlayingUnderbar : {
        alignSelf : 'flex-start',
        backgroundColor : '#9e579d',
        height : '4%',
        width : '0%',
    },

    albumCoverImgWrapper : {
        flex : 2,
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'transparent',
    },

    musicInfoWrapper : {
        flex : 5,
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        paddingHorizontal : '3%',
        backgroundColor : 'transparent',
    },

    musicInfoTitle : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 16,
        marginBottom : '2%',
        fontWeight: '500',
        color : '#303a52',
    },

    musicInfoArtist : {
        fontFamily : 'Cafe24SsurroundAir',
        fontSize : 13,
        color : '#343434',
    },

    musicButtonWrapper : {
        flex : 3,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
    },

    musicButton : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },

    musicButtonImg : {
        height : '30%',
        width : '30%',
        aspectRatio : 1,
    },

});

export default styles;
