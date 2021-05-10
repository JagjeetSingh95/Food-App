import React from 'react';

import {
	View,
	Text,
	FlatList,
	Image,
	TouchableOpacity
} from 'react-native';

import {
	FONTS,
	SIZES,
	harvest,
	shopping,
	chicken,
	fruits,
	fish,
	sheep,
	shrimp,
	COLORS
} from '../../constants';

const categories = [
	{ id: 1, name: 'Fruits', icon: fruits,  },
	{ id: 2, name: 'Grocery', icon: shopping,  },
	{ id: 3, name: 'Vegetables', icon: harvest,  },
	{ id: 4, name: 'Chicken', icon: chicken,  },
	{ id: 5, name: 'Fish', icon: fish,  },
	{ id: 6, name: 'Mutton', icon: sheep,  },
	{ id: 7, name: 'Sea Food', icon: shrimp,  }
]

function Category() {
	const [selectedCategory, setSelectedCategory] = React.useState('Fruits');
	
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => setSelectedCategory(item.name)}
				style={{
					padding: SIZES.padding20,
					backgroundColor: selectedCategory === item.name ? COLORS.primary  : COLORS.white,
					margin: 10,
					borderRadius: SIZES.radius,
					alignItems: 'center',
					shadowColor: 'gray',
					shadowOffset: { width: 0, height: 1 },
					shadowOpacity: 0.5,
					shadowRadius: 2,  
					elevation: 2,
				}}
			>
				<Image 
					source={item.icon}
					style={{
						width: 40,
						height: 40
					}}
				/>
				<Text
					style={{
						paddingTop: SIZES.font,
						fontWeight: '600',
						color: selectedCategory != item.name ? COLORS.primary  : COLORS.white
					}}
				>
					{item.name}
				</Text>
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
			Category
		</Text>

		<FlatList
			data={categories}
			renderItem={renderItem}
			keyExtractor={item => `${item.id}`}
			horizontal
			showsHorizontalScrollIndicator={false}
		/>
		</View>
	)
}

export default Category
