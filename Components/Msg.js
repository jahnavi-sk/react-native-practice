import React from 'react'
import {SafeAreaView,View,Text,Button,StyleSheet, TouchableOpacity} from 'react-native'
import Communications from 'react-native-communications'
const MsgScreen = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Make Phone Call, Send SMS or Email
                    Using React Native Communication
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={
                        () => Communications.phonecall('1234567891',true)
                    }>
                    <Text style={styles.buttonTextStyle}>


            Make Phone Call
          </Text>
                </TouchableOpacity>


                <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
            Communications.text(
              '1234567891',
              'From Jahnavi--- Testing!'
            )
          }>

          <Text style={styles.buttonTextStyle}>
            Send a Text/iMessage
          </Text>
        </TouchableOpacity>
                {/* <Button title="Recent SMS!" onPress={() => alert('Button clicked!')}/> */}





               
            </View>
        </SafeAreaView>
        
    )
}

export default MsgScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#88d498',
        padding:10
    },
    inText:{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      buttonStyle: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#1a936f',
      },
      buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
      },
}
)