import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            marginLeft: 5,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItem: "center",
            marginRight: 5,
          }
        }}
        renderLeftButton={() => (
          <View style={{ marginTop: 15, marginLeft: 10 }}>
            <Ionicons
              name="location-sharp"
              size={24}
            />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              paddingHorizontal: 10,
              marginVertical: 14,
              borderRadius: 20,
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <AntDesign
              name='clockcircle'
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text >Search</Text>
          </View>
        )}
      />
    </View>
  )
}