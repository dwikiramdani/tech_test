import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, ActivityIndicator, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {SearchBar} from 'react-native-elements';

const Device_Width = Dimensions.get('window').width ;

export default function Search() {

	const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [array, setArray] = useState([]);


  useEffect(
    () => {
      setLoading(true);
      fetch(`https://private-4639ce-ecommerce56.apiary-mock.com/home`)
        .then(res => res.json())
        .then(res => {
					// console.warn(res)
					setList(res[0].data.productPromo);
          setLoading(false);
          setSearch(res[0].data.productPromo);
					// setTimeout(() => {
					// 	console.warn(JSON.stringify(shop))
					// }, 1000);
				});
		},
		[]
  );

  searchFilterFunction = (text) => {    
    const newData = search.filter(item => {      
      const itemData = `${item.title.toUpperCase()}   
      ${item.price.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    setArray(newData);  
  };
  
  
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
                onChangeText={(text) => this.searchFilterFunction(text)}
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

      <View style={styles.list}>
				{
					loading ?
					<ActivityIndicator size='large' color='blue'/>
					:
					<FlatList
						data={array}
						keyExtractor={(item, index)=>index.toString()}
						renderItem={({ item }) => (
							<View style={{flex: 0, marginVertical: 12, marginHorizontal: 16,  flexDirection: 'row', borderWidth: 1, borderColor: '#dbdbdb'}}>
								<Image source = {{ uri: item.imageUrl }} style={{width:64, height: 64, borderWidth: 1}} resizeMode='contain'/>
								<View>
                  <Text style={{fontWeight: 'bold', fontSize: 12}}>{item.title}</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 12}}>{item.price}</Text>
                </View>
							</View>
						)}
					/>
				}
			</View>

    </View>
  
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
  },
  list: {
		flex: 1,
		justifyContent: 'center',
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