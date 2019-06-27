import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TextInput, CheckBox, TouchableOpacity, Button, Dimensions} from 'react-native';
import Beranda from './src/Home';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {SearchBar} from 'react-native-elements';

const Device_Width = Dimensions.get('window').width ;

export default function Home() {
  const [Feed, Cart, Profile] = useState(false);
  const Home = useState(true);
  const [searchFieldValue, handleSearchFieldChange] = useState('');

	return (
		<View style={styles.container}>

        <View style={{
          flex: 0,
          flexDirection: 'row'
        }}>
          <View style={{
            flex: 0, 
            justifyContent: 'center', 
            alignItems: 'center',
            marginLeft: 4,
            }}>
              <TouchableOpacity>
                <Icon name='heart-outline' size={24}/>
              </TouchableOpacity>
          </View>
          <View style={{
            flex: 1, 
            }}>
              <TextInput
                placeholder='Pencarian'
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: '#dbdbdb',
                  height: 36,
                  margin: 8
                }}
              />
          </View>
      </View>

      {/* Content */}

      <View style={{
        flex: 1,
      }}>
        <Beranda />
      </View>

      {/* Content */}

      <View style={{
        flex: 0,
        flexDirection: 'row'
      }}>
        <View style={{
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: Home ? '#36c3d9' : '#FFFFFF',
          }}>
            <TouchableOpacity>
              <Text style={{marginVertical: 6}}>Home</Text>
            </TouchableOpacity>
          </View>
        <View style={{
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: Feed ? '#36c3d9' : '#FFFFFF',
          }}>
            <TouchableOpacity>
              <Text style={{marginVertical: 6}}>Feed</Text>
            </TouchableOpacity>
          </View>
        <View style={{
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: Cart ? '#36c3d9' : '#FFFFFF',
          }}>
            <TouchableOpacity>
              <Text style={{marginVertical: 6}}>Cart</Text>
            </TouchableOpacity>
          </View>
        <View style={{
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: Profile ? '#36c3d9' : '#FFFFFF',
          }}>
            <TouchableOpacity>
              <Text style={{marginVertical: 6}}>Profile</Text>
            </TouchableOpacity>
          </View>
      </View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});