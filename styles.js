import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: 'black',
      flex: 1,
      textAlignVertical: 'center',
      marginLeft: 50,
    },
    box: {
      fontSize: 25,
      color: 'white',
      margin: 4,
      padding: 5,
      borderRadius: 50,
      flexDirection: 'row',
    },
    imageContainer: {
      width: 105,
      height: 105,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    line: {
      width: '90%',
      height: 1.2,
      marginLeft: '5%',
      backgroundColor: 'grey',
      justifyContent: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      backgroundColor: 'white',
      padding: 40,
      borderRadius: 20,
      shadowColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    modalImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 20,
    },
    modalText: {
      fontSize: 20,
      color: 'black',
      textAlignVertical: 'center',
    },
    footerLoader: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    },
    loaderContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
    }
  });
  
export default styles;  