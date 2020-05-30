import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { windowWidth } from '../../utils/constants';
import { billChartStyles } from './bill-chart.styles';
import { useSelector } from 'react-redux';

export default function BillChart() {
  const appState = useSelector((state) => state);
  const getAllBillsState = useSelector(
    (state) => appState.appReducer.getAllBills,
  );

  const getMonthWiseData = (currentMonth) => {
    const currentYear = new Date().getFullYear();
    const data = getAllBillsState.filter((e) => {
      var dateStr = currentMonth + '-' + currentYear;
      return e.date.indexOf(dateStr) !== -1;
    });
    let totalAmount = 0;
    data.map((item) => {
      totalAmount += parseInt(item.amount, 10);
    });
    return totalAmount;
  };

  const chartLables = () => {
    return [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
  };

  const getChartData = () => {
    let data = [];
    chartLables().map((item, index) => {
      if (index < 10) {
        data.push(getMonthWiseData('0' + parseInt(index + 1, 10)));
      } else {
        data.push(getMonthWiseData(parseInt(index + 1, 10)));
      }
    });
    return data;
  };

  return (
    <View style={billChartStyles.rootContainer}>
      <LineChart
        data={{
          labels: chartLables(),
          datasets: [
            {
              data: getChartData(),
            },
          ],
        }}
        width={windowWidth - 20} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
