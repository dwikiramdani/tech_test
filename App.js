import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TextInput, CheckBox, TouchableOpacity, Button, Dimensions, Modal} from 'react-native';
import Beranda from './src/Home';
import Searching from './src/Search';
import LoginPage from './src/Login';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { GlobalState } from "./src/context/GlobalState";

const Device_Width = Dimensions.get('window').width ;
const Device_Height = Dimensions.get('window').height ;

export default function Home() {
  const [login, setLogin] = useState(true);
  const [Feed, setFeed] = useState(false);
  const [Home, setHome] = useState(true);
  const [Cart, setCart] = useState(false);
  const [Profile, setProfile] = useState(false)
  const [searching, setSearching] = useState(false);

  const [shop, setShop] = useState([]);
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);
  
	return (
		<View style={styles.container}>
      {
      // Popup Searching
      searching ?
        <Modal
          transparent={false}
          animationType={"fade"}
          visible={searching}
          onRequestClose={()=>{setSearching(false)}}
        >
          <Searching />
        </Modal>
      :
      <View style={{flex: 1}}>
        
        {/* Modal Login */}
        <Modal
          transparent={false}
          animationType={"fade"}
          visible={login}
          >
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
                  <TextInput style={styles.input} placeholder="Username"></TextInput>
                  <TextInput style={styles.input} placeholder="Password"></TextInput>

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
                        onPress={() => { setLogin(false) }}
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
                  <Text 
                    onPress={() => { setLogin(false) }}
                    style={{
                    flex: 0,
                    color: '#FFFFFF',
                    marginVertical: 4,
                    marginHorizontal: 8,
                    textAlign: 'center'
                  }}>
                    Sign In with Facebook
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.socLogin, {backgroundColor: '#41a8f6', marginBottom: 30}]}
                >
                  <Icon name='google' size={15} style={{color: '#FFFFFF'}}/>
                  <Text 
                    onPress={() => { setLogin(false) }}
                    style={{
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
          </Modal>

        {/* Home page search bar */}
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
                  onTouchStart={()=>{setSearching(true)}}
                />
            </View>
        </View>

        {/* Main content */}
        <View style={{
          flex: 1,
        }}>
          {
            Home ?
            <Beranda />
            : Profile ?
            <Modal
              transparent={false}
              animationType={"fade"}
              visible={Profile}
              onRequestClose={()=>{setHome(true), setProfile(false)}}
            >
              <View style={styles.container}>
                <View style={{
                  flex: 0,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <View style={{
                    flex: 0, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginVertical: 8,
                    marginHorizontal: 8,
                    }}
                    >
                      <TouchableOpacity onPress={()=>{setHome(true), setProfile(false)}}>
                        <Icon name='arrow-left' size={16}/>
                      </TouchableOpacity>
                  </View>
                  <View style={{
                      flex: 1, 
                      }}>
                        <Text style={{marginHorizontal: 8}}>Purchase History</Text>
                    </View>
                </View>

              </View>
            </Modal>
            
            :
            null
          }
        </View>

        {/* Navbar footer */}
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
              <TouchableOpacity onPress={()=>{setHome(true), setProfile(false)}}>
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
              <TouchableOpacity onPress={()=>{setProfile(true), setHome(false)}}>
                <Text style={{marginVertical: 6}}>Profile</Text>
              </TouchableOpacity>
            </View>
        </View>

      </View>
      }
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
  },
  list: {
		flex: 1,
    justifyContent: 'center',
  }
  
});