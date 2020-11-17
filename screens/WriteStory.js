import React from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';

export default class writeStory extends React.Component {
    constructor() {
        super();
        this.state = {
            storyTitle:'',
            storyDescription:'',
            storyAuthor:''
        }
    }
    render() {
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
            text: 'Story',
            style: { color: '#fff', fontSize: 20, width:100},
          }}
           />
         <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ storyTitle: text });
          }} placeholder = 'Title'
          value={this.state.text}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ storyAuthor: text });
          }} placeholder = 'Author'
          value={this.state.text}
        />
        <TextInput
          style={styles.hiBox}
          onChangeText={text => {
            this.setState({ storyDescription: text });
          }} placeholder = 'Write your story'
          value={this.state.text}
        />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputBox: {
      marginTop: 5,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    hiBox:{
        marginTop: 5,
      width: '80%',
      alignSelf: 'center',
      height: 200,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    }
})
