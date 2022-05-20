import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'

const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: "Pick-up",
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: "Soft-Drinks",
  },
  {
    image: require('../assets/images/bread.png'),
    text: "Bakery Bread",
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: "Fast food",
  },
  {
    image: require('../assets/images/deals.png'),
    text: "Deals",
  },
  {
    image: require('../assets/images/coffee.png'),
    text: "Coffe & Tea",
  },
  {
    image: require('../assets/images/desserts.png'),
    text: "Desserts",
  },
  {
    image: require('../assets/images/noodle.png'),
    text: "Noodle",
  },
  {
    image: require('../assets/images/water-noodle.png'),
    text: "WaterNoodle",
  },
  {
    image: require('../assets/images/rice.png'),
    text: "Rice",
  },
  {
    image: require('../assets/images/snacks.png'),
    text: "Snacks",
  },
]

export default function Catergorires() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        backgroundColor: "white",
        padding: 4,
        margin: 4,
        marginBottom: 4,
        borderRadius: 10
      }}
    >
      {items.map((item, index) => (
        <View
          style={{
            alignItems: "center",
            marginRight: 20,
          }}
          key={index}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            style={
              [styles.productImgContainer,
              {
                borderColor: 'grey',
                borderWidth: 1,
                backgroundColor: "#eee"
              }
              ]
            }
          // activeOpacity={0.1}
          >
            <Image
              source={item.image}
              style={styles.productImg}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'grey',
              fontSize: 10,
              fontWeight: "900"
            }}
          >{item.text}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  productImgContainer: {
    marginLeft: 4,
    height: 54,
    width: 54,
    borderRadius: 27,
  },
  productImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: "contain"
  },
});