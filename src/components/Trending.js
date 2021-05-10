import React from 'react';

import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image
} from 'react-native';

import {
	FONTS,
	SIZES,
	delivery,
	COLORS,
	offers
} from '../../constants';

const data = [
	{ id: 1, title: 'The Fastest in Delivery', subtitle: 'Food', icon: delivery },
	{ id: 2, title: 'Get 30% off on your', subtitle: 'First order', icon: offers }
];

function Trending() {

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={{
					padding: SIZES.base,
					paddingLeft: SIZES.padding20,
					margin: 10,
					borderRadius: SIZES.radius,
					alignItems: 'center',
					shadowColor: 'gray',
					shadowOffset: { width: 0, height: 1 },
					shadowOpacity: 0.5,
					shadowRadius: 2,  
					elevation: 2,
					backgroundColor: COLORS.secondary,
					flexDirection: 'row'
				}}
			>
				<Text
					style={{
						paddingTop: SIZES.font,
						fontWeight: '600',
						width: 100,
						...FONTS.body4
					}}
				>
					{item.title} <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>{item.subtitle}</Text>
				</Text>
				<Image 
					source={item.icon}
					style={{
						width: 200,
						height: 120
					}}
				/>
			</TouchableOpacity>
		)
	}

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
				Trending
			</Text>

			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => `${item.id}`}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}

export default Trending
