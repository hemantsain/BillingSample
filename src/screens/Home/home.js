import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Button,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import { Overlay, Input, SearchBar } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { homeStyles } from './home.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveNewBillRequest,
  editExistingBillRequest,
  removeExistingBillRequest,
  setIncrementalIdRequest,
} from '../../state/actions';
import BillListItem from '../../components/BillListItem/bill-list-item';
import { getFormattedDate } from '../../utils/utils';

export default function Home(props) {
  const dateFormat = 'DD-MM-YYYY';
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [valid, setValid] = useState(false);
  const [desc, setDesc] = useState('');
  const [catg, setCatg] = useState('');
  const [amount, setAmount] = useState('');
  const [isEditBill, setIsEditBill] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listData, setListData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [arrayHolder, setArrayHolder] = useState([]);
  const [date, setDate] = useState(getFormattedDate(dateFormat));

  const appState = useSelector((state) => state);
  const getAllBillsState = useSelector(
    (state) => appState.appReducer.getAllBills,
  );

  const getCurrentId = () => {
    return appState.appReducer.currentId;
  };

  const toggleOverlay = () => {
    setIsEditBill(false);
    setVisible(!visible);
    setDesc('');
    setCatg('');
    setAmount('');
  };

  const handleOnChange = (name, value) => {
    if (name === 'desc') {
      setDesc(value.nativeEvent.text);
    } else if (name === 'cat') {
      setCatg(value.nativeEvent.text);
    } else if (name === 'amount') {
      setAmount(value.nativeEvent.text);
    }
  };

  useEffect(() => {
    if (desc !== '' && catg !== '' && amount !== '') {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [desc, catg, amount]);

  const saveNewBill = () => {
    let data = {
      id: getCurrentId() + 1,
      description: desc,
      category: catg,
      amount,
      date: date,
    };
    dispatch(saveNewBillRequest(data));
    dispatch(setIncrementalIdRequest(data.id));
    toggleOverlay();
  };

  const editBill = () => {
    let data = {
      id: currentIndex,
      description: desc,
      category: catg,
      amount,
      date: date,
    };
    dispatch(editExistingBillRequest(data));
    toggleOverlay();
  };

  const renderNewBillPopUp = () => {
    return (
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={homeStyles.overlayContentContainer}>
          <Text style={homeStyles.titleStyle}>Add New Bill</Text>
          <Input
            placeholder="Enter Description"
            value={desc}
            onChange={(value) => handleOnChange('desc', value)}
          />
          <Input
            placeholder="Enter Category"
            value={catg}
            onChange={(value) => handleOnChange('cat', value)}
          />
          <Input
            placeholder="Enter Amount"
            value={amount}
            keyboardType="numeric"
            onChange={(value) => handleOnChange('amount', value)}
          />
          <View style={homeStyles.dateContainer}>
            <DatePicker
              date={date}
              mode="date"
              placeholder="Select Date"
              format={dateFormat}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(selectedDate) => {
                setDate(selectedDate);
              }}
            />
          </View>
          <View style={homeStyles.buttonContainer}>
            <Button
              title="Submit"
              disabled={!valid}
              onPress={!isEditBill ? saveNewBill : editBill}
            />
            <Button title="Cancel" onPress={toggleOverlay} />
          </View>
        </View>
      </Overlay>
    );
  };

  useEffect(() => {
    setListData(getAllBillsState);
    setArrayHolder(getAllBillsState);
  }, [getAllBillsState]);

  const searchData = (text) => {
    const newData = arrayHolder.filter((item) => {
      const itemData = item.category.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setListData(newData);
    setSearchText(text);
  };

  const _handleEditBill = (item) => {
    setCurrentIndex(item.id);
    setIsEditBill(true);
    setDesc(item.description);
    setCatg(item.category);
    setAmount(item.amount);
    setVisible(true);
    renderNewBillPopUp();
  };

  const _handleRemoveBill = (item) => {
    dispatch(removeExistingBillRequest(item));
  };

  return (
    <KeyboardAvoidingView style={homeStyles.rootContainer}>
      <SafeAreaView style={homeStyles.rootContainer}>
        <View style={homeStyles.outerContainer}>
          <SearchBar
            containerStyle={homeStyles.searchContainer}
            placeholder="Search by Category..."
            onChangeText={searchData}
            value={searchText}
          />
          <View style={homeStyles.buttonContainer}>
            <Button onPress={toggleOverlay} title="Add New Bill" />
            <Button
              onPress={() => props.navigation.navigate('Chart')}
              title="Open Chart"
            />
          </View>
          <FlatList
            data={listData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <BillListItem
                  item={item}
                  key={index.toString()}
                  handleEditBill={(selectedItem) =>
                    _handleEditBill(selectedItem)
                  }
                  handleRemoveBill={(selectedItem) =>
                    _handleRemoveBill(selectedItem)
                  }
                />
              );
            }}
          />
          {renderNewBillPopUp()}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
