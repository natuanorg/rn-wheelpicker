// main index.js
import { Platform, PickerIOS } from 'react-native'

import WheelPicker from './WheelPicker'

module.exports = Platform.OS === 'ios' ? PickerIOS : WheelPicker