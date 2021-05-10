import React from 'react';

import {
	SafeAreaView
} from 'react-native';

import {
	Header, 
	Trending,
	Category,
	Recent
} from '../components';

function Home() {
	return (
		<SafeAreaView>
			<Header />
			<Trending />
			<Category />
			<Recent />
		</SafeAreaView>
	)
}

export default Home
