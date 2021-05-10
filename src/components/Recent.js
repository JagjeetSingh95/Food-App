import React from 'react';

import {
	View,
	Text,
	FlatList,
	ScrollView,
	Image,
	TouchableOpacity
} from 'react-native';

import {
	FONTS,
	SIZES,
	bellPepper,
	broccoli,
	cabbage,
	carrot,
	chili,
	eggplant,
	potato,
	spinach,
	tomato,
	COLORS
} from '../../constants';

const data = [
	{	id: 1, name: 'Bell Pepper' , icon: bellPepper, price: '90' },
	{	id: 2, name: 'Broccoli' , icon: broccoli, price: '80' },
	{	id: 3, name: 'Cabbage' , icon: cabbage, price: '30' },
	{	id: 4, name: 'Carrot' , icon: carrot, price: '50' },
	{	id: 5, name: 'Chili' , icon: chili, price: '100' },
	{	id: 6, name: 'Eggplant' , icon: eggplant, price: '40' },
	{	id: 7, name: 'Potato' , icon: potato, price: '30' },
	{	id: 8, name: 'Spinach' , icon: spinach, price: '20' },
	{	id: 9, name: 'Tomato' , icon: tomato, price: '30' }
]

function Recent() {

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={{
				flex: 1,
				margin: 10,
				padding: SIZES.padding15,
				backgroundColor: COLORS.white,
				borderRadius: SIZES.radius,
				alignItems: 'center',
				shadowColor: 'gray',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.4,
				shadowRadius: 2,  
				elevation: 5,
				position: "relative"
			}}
		>
			<View
				style={{
					alignItems: 'flex-start',
					marginBottom: 10
				}}
			>
				<Text
					style={{
						...FONTS.body3,
						fontWeight: 'bold'
					}}
				>
					{item.name}
				</Text>
				<Text style={{
					...FONTS.body3,
					fontWeight: 'bold'
				}}>
					INR {item.price} / <Text style={{fontSize: 12, fontWeight: '300'}}>per kg</Text>
				</Text>
			</View>
			

			<Image 
				style={{
					width: 70,
					height: 70,
					// marginBottom: SIZES.padding15
				}}
				source={item.icon}
			/>
			

			<TouchableOpacity 
				style={{
					height: 40,
					width: 40,
					backgroundColor: COLORS.primary,
					alignItems:'center',
					borderRadius: SIZES.radius,
					marginTop: SIZES.base,
					padding: 5,
					position: 'absolute',
					right: -2,
					bottom: -5
				}}
			>
				<Text style={{color: COLORS.white, ...FONTS.h2}}>+</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	)
	return (
		<View
			style={{
				marginVertical: SIZES.padding,
				paddingHorizontal: SIZES.padding15
			}}
		>
			<Text
				style={{
					...FONTS.h2,
					fontWeight: 'bold'
				}}
			>
				Recent
			</Text>

			<ScrollView
				style={{
					// height: 300,
					marginVertical: SIZES.padding15
				}}
			>
				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={item => `${item.id}`}
					numColumns={2}
				/>
			</ScrollView>
			
		</View>
	)
}

export default Recent
