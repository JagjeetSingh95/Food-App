import React from 'react';

import {
	View,
	TextInput,
	Image
} from 'react-native';

import {
	searchIcon,
	COLORS,
	SIZES
} from '../../constants';

function Search() {
	return (
		<View
			style={{
				position: 'relative'
			}}>
			<TextInput
				style={{
					height: 50,
					width: "100%",
					backgroundColor: COLORS.lightGray,
					borderRadius: SIZES.radius,
					color: COLORS.black,
					paddingLeft: SIZES.padding2
				}}
				placeholder="Search"
				placeholderTextColor={COLORS.black}
			/>
			<Image 
				source={searchIcon}
				style={{
					width: 25,
					height: 25,
					position: 'absolute',
					top: 12,
					left: 10
				}}
			/>
		</View>
	)
}

export default Search
