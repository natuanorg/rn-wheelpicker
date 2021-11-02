// main index.js
import { Platform } from 'react-native'
import {Picker} from '@react-native-picker/picker';

import WheelPicker from './src/WheelPicker'

module.exports = Platform.OS === 'ios' ? Picker : WheelPicker