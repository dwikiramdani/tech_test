import React, { useState, useEffect, useContext } from 'react';
import {StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, Button, ActivityIndicator, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Device_Width = Dimensions.get('window').width ;

class setLike extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			like: false,
		}
	}
	render(){
		return(
			<Provider value={{state: this.state}}>{this.props.children}</Provider>
		)
	}
}

class likeButton extends React.Component {
	render(){
		return(
			<Consumer>
				{context => {
					context.state.like ?
					<TouchableOpacity>
						<Icon name='heart' size={16}/>
					</TouchableOpacity>
					:
					<TouchableOpacity>
						<Icon name='heart-outline' size={16}/>
					</TouchableOpacity>
				}}
			</Consumer>
		)
	}
}

class Like extends React.Component {
	render() {
    return (
      <Container>
        <likeButton />
      </Container>
    )
  }
}

export default () => {
	
	// State
	const [shop, setShop] = useState([]);
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [detail, setDetail] = useState(false);
	const [deskripsi, setDeskripsi] = useState('');
	const [cart, setCart] = useState([]);
	const [photo, setPhoto] = useState('');
	const [judul, setJudul] = useState('');
	const [harga, setHarga] = useState(0);
	const [suka, setSuka] = useState(true);

	// Fetch API to get array from object
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

			{/* Item Shop List */}
			<View style={styles.list}>
				{
					loading ?
					<ActivityIndicator size='large' color='blue'/>
					:
					<FlatList
						data={list}
						keyExtractor={(item, index)=>index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={
									() => {
											setDeskripsi(item.description)
											setPhoto(item.imageUrl)
											setJudul(item.title)
											setHarga(item.price)
											setDetail(true)
									}
								}
							>
								<View style={{flex: 0, marginVertical: 12, marginHorizontal: 40, }}>
									<Image source = {{ uri: item.imageUrl }} style={{width:'100%', height: 128, alignSelf: 'center', borderWidth: 1}} resizeMode='contain'/>
									{
										suka ?
										<TouchableOpacity onPress={()=>{setSuka(false)}} style={{bottom: 20, left: 4}}>
											<Icon name={'heart'} size={16} />
										</TouchableOpacity>
										:
										<TouchableOpacity onPress={()=>{setSuka(true)}} style={{bottom: 20, left: 4}}>
											<Icon name={'heart-outline'} size={16} />
										</TouchableOpacity>
									}
									<Text style={{fontWeight: 'bold', fontSize: 24}}>{item.title}</Text>
								</View>
							</TouchableOpacity>
						)}
					/>
				}
				{
          detail ?
					(
					<Modal
					transparent={false}
					animationType={"fade"}
					visible={detail}
					onRequestClose={ () => { setDetail(false) } } >
						<TouchableOpacity onPress={() => { setDetail(false)}} activeOpacity={1}>
							<View style={{margin: 20}}>
									<View style={{flex: 0, top: 20, flexDirection: 'row', zIndex: 5}}>
										<TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}}>
											<Icon name={'arrow-left'} size={20}/>
										</TouchableOpacity>
										<TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
											<Icon name={'share-variant'} size={20} />
										</TouchableOpacity>
									</View>
								<View style={{flex: 0, width: Device_Width, height: 160}}>
									<Image resizeMode='contain' source = {{ uri: photo }} style={{flex: 0, height: '100%'}}/>
								</View>
								<View style={{flex: 0}}>
									<View style={{flex: 0, flexDirection: 'row', marginVertical: 4, alignItems: 'center'}}>
										<Text style={{fontWeight: 'bold', fontSize: 12}}>{judul}</Text>
										<TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
											<Icon name={'heart'} size={20} />
										</TouchableOpacity>
									</View>
									<View style={{flex:0}}>
										<Text style={{fontWeight: 'bold', fontSize: 12}}>{deskripsi}</Text>
									</View>
									<View style={{flex: 0, flexDirection: 'row-reverse', marginTop: 24, alignItems: 'center'}}>
										<TouchableOpacity style={{flex: 0, backgroundColor: '#F6881F', borderRadius: 4}}>
											<Text style={{marginVertical: 4, marginHorizontal: 16}}>Buy</Text>
										</TouchableOpacity>
										<Text style={{fontWeight: 'bold', fontSize: 12, marginHorizontal: 12}}>{harga}</Text>
									</View>
								</View>
							</View>
						</TouchableOpacity>
					</Modal>
					) 
					:
					null
        }
			</View>
			{/* Item Shop List */}

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