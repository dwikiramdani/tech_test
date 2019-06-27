import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, CheckBox, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 0,
          marginHorizontal: 20,
          borderWidth: 1,
          borderColor: '#dbdbdb',
          borderRadius: 4,
          marginVertical: 120,
          bottom: 40
        }}>
          <Text style={{
            flex: 0,
            alignSelf: 'center',
            marginTop: 20,
            fontFamily: 'FontAwesome',
            fontWeight: 'bold'
          }}>
            LOGIN
          </Text>

          {/* Form Login */}
          <View style={{
            flex: 0,
            marginVertical: 10
          }}>
            <TextInput style={styles.input} placeholder="Test"></TextInput>
            <TextInput style={styles.input} placeholder="Test"></TextInput>

            <View style={{
              flex: 0, 
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <CheckBox
                style={{
                  marginLeft: 5,
                }} 
              />
              <Text>Remember Me</Text>
              <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: 'flex-end',
                marginRight: 15

              }}>
                <TouchableOpacity style={{
                  flex: 0, 
                  backgroundColor: '#005eff',
                  justifyContent: 'center',
                  borderRadius: 4
                }}
                >
                  <Text style={{
                    textAlign: 'right',
                    color: '#FFFFFF',
                    marginVertical: 4,
                    marginHorizontal: 8
                  }}>Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Form Login */}

          <TouchableOpacity style={styles.socLogin}
          >
            <Icon name='facebook' size={15} style={{color: '#FFFFFF'}}/>
            <Text style={{
              flex: 0,
              color: '#FFFFFF',
              marginVertical: 4,
              marginHorizontal: 8,
              textAlign: 'center'
            }}>Sign In with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socLogin, {backgroundColor: '#41a8f6', marginBottom: 30}]}
          >
            <Icon name='google' size={15} style={{color: '#FFFFFF'}}/>
            <Text style={{
              flex: 0,
              color: '#FFFFFF',
              marginVertical: 4,
              marginHorizontal: 8,
              textAlign: 'center'
            }}>Sign In with Google
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  input: {
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#dbdbdb',
    height: 40
  },
  socLogin: {
    flex: 0, 
    backgroundColor: '#4468B3',
    justifyContent: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 64,
    alignItems: 'center',
    // justifyContent: 'center'
  }
});
