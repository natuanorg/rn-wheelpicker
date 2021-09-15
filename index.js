// main index.js
import { Platform, PickerIOS } from 'react-native'

import WheelPicker from './src/WheelPicker'

module.exports = Platform.OS === 'ios' ? PickerIOS : WheelPicker