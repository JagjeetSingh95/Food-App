import React from 'react';

import {
	View,
	Image,
	Text,
	TouchableOpacity
} from 'react-native';

import Search from './Search';

import {
	menuIcon,
	bellIcon,
	SIZES,
	location,
	jaggi,
	FONTS,
	COLORS
} from '../../constants';

function Header() {
	return (
		<View
		 	style={{
				paddingTop: SIZES.padding15,
				width: SIZES.width,
				paddingHorizontal: SIZES.padding15,
				backgroundColor: COLORS.white,
				paddingBottom: 40,
				borderBottomLeftRadius: 25,
				borderBottomEndRadius: 25,
				shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.3,
        shadowRadius: 3,
        elevation: 3,
			 }}
		>
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
			>
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Image 
					source={location} 
					style={{
						width: 25,
						height: 25
					}}
				/>
				<Text
					style={{
						...FONTS.h4,
						paddingLeft: SIZES.base
					}}
				>
					Sector 78, Chandigarh, India
				</Text>
			</TouchableOpacity>
			

			<Image 
				source={jaggi}
				style={{
					width: 35,
					height: 35,
					borderRadius: 50
				}}
			/>
		</View>

		<View 
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: SIZES.padding15
			}}
		>
			
			<View 
				style={{
					width: '100%',
					overflow: 'hidden'
				}}>
				<Search />
			</View>
		</View>

		{/* <View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: SIZES.padding15
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
		</View> */}

		</View>
		
	)
}

export default Header
