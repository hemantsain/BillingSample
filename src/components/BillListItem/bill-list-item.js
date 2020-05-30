import React from 'react';
import { View, Text, Button } from 'react-native';
import { billListStyles } from './bill-list.styles';

export default function BillListItem({
  item,
  handleEditBill,
  handleRemoveBill,
}) {
  return (
    <View style={billListStyles.rootContainer}>
      <View style={billListStyles.outerContainer}>
        <Text style={billListStyles.titleStyle}>
          Description: {item.description}
        </Text>
        <Text style={billListStyles.subTitleStyle}>
          Category: {item.category}
        </Text>
        <Text style={billListStyles.subTitleStyle}>Amount: {item.amount}</Text>
        <Text style={billListStyles.subTitleStyle}>Date: {item.date}</Text>
        <View style={billListStyles.rowContainer}>
          <Button title="Edit Bill" onPress={() => handleEditBill(item)} />
          <Button title="Remove Bill" onPress={() => handleRemoveBill(item)} />
        </View>
      </View>
    </View>
  );
}
