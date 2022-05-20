import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../component/HeaderTabs';
import GlobalStyle from '../GlobalStyle';
import SearchBar from '../component/SearchBar';
import Catergorires from '../component/Catergorires';
import RestautantItems from '../component/RestautantItems';

export default function Home() {
  return (
    <SafeAreaView style={GlobalStyle.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView>
        <Catergorires />
        <RestautantItems />
      </ScrollView>
    </SafeAreaView>
  )
}