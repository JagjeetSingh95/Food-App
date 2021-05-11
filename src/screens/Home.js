import React from 'react';

import {
	SafeAreaView,
	View
} from 'react-native';

import {
	Header, 
	Trending,
	Category,
	Recent
} from '../components';

import {
	COLORS
} from '../../constants';

function Home() {
	return (
		<SafeAreaView
			style={{
				backgroundColor: COLORS.lightGray
		 }}
		>
			<Header />
			
			<Trending />
			<Category />
			<Recent />
			
		</SafeAreaView>
	)
}

export default Home
