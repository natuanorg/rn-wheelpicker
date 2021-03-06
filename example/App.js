/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import range from 'lodash/range'
import Picker from '@natuanorg/rn-wheelpicker'
var PickerItem = Picker.Item;

const YEARS = range(1900, 2051, 1).map(String)
const MONTHS = range(1, 13, 1).map(String)

const PickerDefaultProps = {
  selectedItemTextColor: "#ac0000", 
  itemSpace: 40,
  itemStyle: {
    color: "#ac0000",
    fontSize: 20,
    fontWeight: '500',
  },
  hasCurtain: true,
  curtainColor: '#66EFEFF0',
  curtainCornerRadius: 8,
  hasIndicator: false
}

export default App = () => {

  const [selectedYearIndex, setSelectedYearIndex] = useState(0)
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0)
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)
  const daysInMonth = new Date(YEARS[selectedYearIndex], MONTHS[selectedMonthIndex], 0).getDate();
  const [days, setDays] = useState(range(1, daysInMonth + 1, 1).map(String)) 

  const onDayChange = (index) => setSelectedDayIndex(index)
  const onMonthChange = (index) => setSelectedMonthIndex(index)
  const onYearChange = (index) => setSelectedYearIndex(index)

  useEffect(() => {
      const newDaysInMonth = new Date(YEARS[selectedYearIndex], MONTHS[selectedMonthIndex], 0).getDate();
      if(selectedDayIndex > newDaysInMonth){
          setSelectedDayIndex(newDaysInMonth - 1)
      }
      setDays(range(1, newDaysInMonth + 1, 1).map(String))
 }, [selectedMonthIndex, selectedYearIndex])

  return (
    <View style={styles.container}>
        <Picker 
          {...PickerDefaultProps}
          style={styles.picker}
          selectedValue={selectedDayIndex}
          onValueChange={onDayChange}>
            {days.map((value, i) => (
                <PickerItem label={value} value={i} key={"day" + i}/>
            ))}
        </Picker>
        <Picker 
          {...PickerDefaultProps}
          style={styles.picker}
          selectedValue={selectedMonthIndex}
          onValueChange={onMonthChange}>
            {MONTHS.map((value, i) => (
                <PickerItem label={value} value={i} key={"month" + i}/>
            ))}
        </Picker>
        <Picker 
          {...PickerDefaultProps}
          style={styles.picker}
          selectedValue={selectedYearIndex}
          onValueChange={onYearChange}>
            {YEARS.map((value, i) => (
                <PickerItem label={value} value={i} key={"year" + i}/>
            ))}
        </Picker>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row'
  },
  picker: {
    flex: 1,
    height: 150,
    marginHorizontal: 16
  }
});
