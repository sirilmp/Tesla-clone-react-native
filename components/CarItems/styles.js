import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    carModalContainer: {
        width: "100%",
        height: "100%",

    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        position: 'absolute',
    },
    titles: {
        marginTop: '30%',
        width: "100%",
        alignItems: 'center',
    },
    heading: {
        fontWeight: 500,
        fontSize: 40,
        color:'#393C41'
    },
    subHeading: {
        fontSize: 16,
        color: '#5c5e62',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: "100%"
    },
    tailHeading:{
textDecorationLine:'underline',
    },

})

export default style