// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   Animated,
// //   Dimensions,
// //   Image,
// //   Pressable,
// // } from "react-native";
// // import React, { cloneElement, useEffect, useState } from "react";
// // import MapView, { Callout, Marker } from "react-native-maps";
// // import useFetch from "../../hooks/useFetch";
// // import { COLORS } from "../../assets/colors/colors";
// // import { fonts, styles } from "../../Style/style";
// // import { MAPCOORINATES } from "../../api";
// // import MapCard from "../../components/MapCard";

// const CARD_WIDTH = Dimensions.get("window").width * 0.8;
// const CARD_HEIGHT = 200;

// // const PlaceMap = () => {
// //   const { data, loading, error } = useFetch(MAPCOORINATES);

// //   const [mapRegion, setMapregion] = useState({
// //     latitude: 31.948149708748947,
// //     longitude: 35.91049773618579,
// //     latitudeDelta: 0.08561099332398214,
// //     longitudeDelta: 0.05337495356798172,
// //   });

// //   let mapIndex = 0;
// //   let mapAnimation = new Animated.Value(0);

// //   useEffect(() => {
// //     mapAnimation.addListener(({ value }) => {
// //       let index = Math.floor(value / CARD_WIDTH + 0.3);

// //       if (index >= data.length) {
// //         index = data.length - 1;
// //       }

// //       if (index <= 0) {
// //         index = 0;
// //       }

// //       clearTimeout(regionTimeout);

// //       const regionTimeout = setTimeout(() => {
// //         if (mapIndex !== index) {
// //           mapIndex = index;
// //           const { longitude, latitude } = data[index].placeCoordinate;
// //           _map.current.animateToRegion(
// //             {
// //               longitude,
// //               latitude,
// //               latitudeDelta: mapRegion.latitudeDelta,
// //               longitudeDelta: mapRegion.longitudeDelta,
// //             },
// //             350
// //           );
// //         }
// //       }, 10);
// //     });
// //   });

// //   const _map = React.useRef(null);

// //   return (
// //     <>
// //       {data && (
// //         <View style={styles.container}>
// //           <MapView
// //             ref={_map}
// //             style={styles.container}
// //             region={mapRegion}
// //             zoomControlEnabled={true}
// //             rotateEnabled={true}
// //           >
// //             {/* <Marker coordinate={mapRegion} title="You Are Here"></Marker> */}
// //             {data != null &&
// //               data.map((place) => {
// //                 return (
// //                   <Marker
// //                     coordinate={{
// //                       longitude: place.placeCoordinate.longitude,
// //                       latitude: place.placeCoordinate.latitude,
// //                     }}
// //                     pinColor={COLORS.main}
// //                     key={place.placeCoordinate.id}
// //                     title={place.name}
// //                   ></Marker>
// //                 );
// //               })}
// //           </MapView>
// //           <Animated.ScrollView
// //             horizontal
// //             scrollEventThrottle={1}
// //             showsHorizontalScrollIndicator={false}
// //             style={innerStyle.scrollView}
// //             pagingEnabled={true}
// //             snapToInterval={CARD_WIDTH + 20}
// //             snapToAlignment="center"
// //             onScroll={Animated.event(
// //               [
// //                 {
// //                   nativeEvent: {
// //                     contentOffset: {
// //                       x: mapAnimation,
// //                     },
// //                   },
// //                 },
// //               ],
// //               {
// //                 useNativeDriver: true,
// //               }
// //             )}
// //           >
// //             {data &&
// //               data.map((place, index) => {
// //                 return <MapCard key={index} place={place} />;
// //               })}
// //           </Animated.ScrollView>
// //         </View>
// //       )}
// //     </>
// //   );
// // };

// export default PlaceMap;

// const innerStyle = StyleSheet.create({
//   scrollView: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     paddingVertical: 10,
//   },
// });
