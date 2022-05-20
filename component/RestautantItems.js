import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const restaurants = [
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "Bánh mỳ Nguyên Anh",
    catergories:["Bread", "FastFood"],
    price: 10000,
    comments: "Bánh rất là ngon",
    reviews: 1244,
    rating: 4.5
  },
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "Trà sữa trân châu Lê Trọng Tân, Thanh Xuân, Hà Nội",
    catergories:["Soft-Drink", "Deals"],
    price: 10000,
    comments: "Trà rất là ngon",
    reviews: 1245,
    rating: 4.5
  },
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "Bánh mỳ Nguyên Anh",
    catergories:["Bread", "FastFood"],
    price: 10000,
    comments: "Bánh rất là ngon",
    reviews: 1244,
    rating: 4.5
  },
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "Pizza Hut",
    catergories:["Bread", "FastFood"],
    price: 10000,
    comments: "Bánh rất là ngon",
    reviews: 9696,
    rating: 4.5
  },
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "Highland Cafe",
    catergories:["Cafe", "Soft-Drink"],
    price: 10000,
    comments: "Cà phê rất là ngon",
    reviews: 554,
    rating: 4.5
  },
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "Bánh mỳ Nguyên Anh",
    catergories:["Coffee and tea", "Soft-Drink"],
    price: 10000,
    comments: "Bánh rất là ngon",
    reviews: 1264,
    rating: 4.5
  },
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "Bún bò Huế Trần Đại Nghĩa",
    catergories:["Noodle", "Water-noodle"],
    price: 10000,
    comments: "Bánh rất là ngon",
    reviews: 1144,
    rating: 4.5
  },
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "Bánh mỳ vợ ông vàng",
    catergories:["Bread", "FastFood"],
    price: 10000,
    comments: "Bánh rất là ngon",
    reviews: 1544,
    rating: 3.5
  },
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "BBQ-GodenGate",
    catergories:["Deals", "BBQ"],
    price: 10000,
    comments: "Bánh rất là ngon",
    reviews: 244,
    rating: 4.1
  },
  {
    image: require('../assets/background/restaurants.jpeg'),
    text: "Lẩu-Nướng Hoppot-RedSun",
    catergories:["Deals", "Hotpot"],
    price: 10000,
    comments: "Bánh rất là ngon",
    reviews: 124,
    rating: 2.5
  },
  
]

export default function RestautantItems() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  )
}

const RestaurantImage = () => (
  <View
    style={{
      alignItems: "center"
    }}>
    <Image
      source={restaurants[0].image}
      style={{
        width: "100%",
        height: 180
      }}
    />
    {/* <Text
      style={{
        // color: "black",
        fontSize: 15,
        fontWeight: "bold"
      }}
    >
      {restaurants[0].text}
    </Text> */}
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
      <MaterialCommunityIcons
        name='heart-outline'
        size={25}
        color='#fff'
      />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{
        fontSize: 15,
        fontWeight: 'bold'
      }}
      >
        Cửa BreadKing phố Huế
      </Text>
      <Text
        style={{
          fontSize: 13,
          color: "gray"
        }}
      >
        30-45 phút
      </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginRight: 2
      }}
    >
      <Text style={{
        alignItems: "center",
      }}> 4.5</Text>
    </View>

  </View>
)