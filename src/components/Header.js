import React from 'react';

import {
	View,
	Image,
	TouchableOpacity
} from 'react-native';

import Search from './Search';

import {
	menuIcon,
	bellIcon,
	SIZES
} from '../../constants';

function Header() {
	return (
		<View
			style={{
				// flex: 1,
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingHorizontal: SIZES.padding15,
				width: SIZES.width
			}}
			>
			<TouchableOpacity
				style={{
					width: '10%'
				}}
			 >
				<Image
					source={menuIcon}
					style={{
						width: 25,
						height: 25
					}}
			  />
			</TouchableOpacity>
			
			<View 
				style={{
					width: '75%',
					overflow: 'hidden'
				}}>
				<Search />
			</View>

			<TouchableOpacity
				style={{
					width: '10%',
					paddingLeft: 10
				}}
			 >
				<Image 
					source={bellIcon}
					style={{
						width: 25,
						height: 25
					}}
				/>
			</TouchableOpacity>
			
		</View>
	)
}

export default Header
