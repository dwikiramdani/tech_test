import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TextInput, CheckBox, TouchableOpacity, Button, ActivityIndicator, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default () => {
	// const { loading, shop } = useSwapiPeople();
	
	const [shop, setShop] = useState([]);
	const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      fetch(`https://private-4639ce-ecommerce56.apiary-mock.com/home`)
        .then(res => res.json())
        .then(res => {
					// console.warn(res)
					setShop(res[0].data.category)
					setList(res[0].data.productPromo)
					setLoading(false);
					// setTimeout(() => {
					// 	console.warn(JSON.stringify(shop))
					// }, 1000);
				});
		},
		[]
  );

  return (
    <View style={styles.container}>
			{/* {
				loading ?
				<ActivityIndicator size='large' color='blue'/>
				:
				<FlatList
					data={shop}
					keyExtractor={(item, index)=>index.toString()}
					renderItem={({ item }) => (
						<View style={{flex: 0}}>
							<Text>{item.id}</Text>
							<Image source = {{ uri: item.imageUrl }} style={{width:25, height: 25}} />
						</View>
					)}
				/>
			} */}

			{/* Category List */}
			<View style={styles.category}>
				{
					loading ?
					<ActivityIndicator size='large' color='blue'/>
					:
					<FlatList
						data={shop}
						horizontal={true}
						keyExtractor={(item, index)=>index.toString()}
						renderItem={({ item }) => (
							<View style={{flex: 0, margin: 14}}>
								<Image source = {{ uri: item.imageUrl }} style={{width:48, height: 48}} />
								<Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
							</View>
						)}
					/>
				}
			</View>
			{/* Category List */}


			<View style={styles.list}>
				{
					loading ?
					<ActivityIndicator size='large' color='blue'/>
					:
					<FlatList
						data={list}
						keyExtractor={(item, index)=>index.toString()}
						renderItem={({ item }) => (
							<View style={{flex: 0, marginVertical: 12, marginHorizontal: 40, justifyContent: 'center'}}>
								<Image source = {{ uri: item.imageUrl }} style={{width:'100%', height: 128, alignSelf: 'center', borderWidth: 1}} resizeMode='contain'/>
								<Text style={{fontWeight: 'bold', fontSize: 24}}>{item.title}</Text>
							</View>
						)}
					/>
				}
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	category: {
		flex: 0,
	},
	list: {
		flex: 1,
		justifyContent: 'center',
	}
});