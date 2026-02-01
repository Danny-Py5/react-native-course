import { View } from 'react-native';

export const HR = ({ color = 'gray', thickness = 1, margin = 10 }) => (
  <View
    style={{
      height: thickness,
      backgroundColor: color,
      marginVertical: margin,
      borderRadius: 10,
    }}
  />
);
