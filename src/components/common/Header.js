import React from 'react';
import {Text, View} from 'react-native';

/*
If single line jsx no need to use return keyword syntax else use it
*/

const Header = ({headerText}) => {
  //destructure styles component
  const {textStyle, viewStyle} = styles;
  //using textStyle as prop i.e. property of styles component
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

/*If we don't specifically position the element in react native it will by default 
position itself in top left of container just like in Html
*/
const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor: '#000',
  },
  textStyle: {
    fontSize: 20,
    
  },
};

export {Header};
