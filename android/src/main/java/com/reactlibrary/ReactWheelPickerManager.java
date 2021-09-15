package com.reactlibrary;

import android.graphics.Color;
import android.util.Log;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.ArrayList;
import java.util.Map;

public class ReactWheelPickerManager extends SimpleViewManager<ReactWheelPicker> {

    private static final String REACT_CLASS = "WheelPicker";
    private static final int DEFAULT_TEXT_SIZE = 25 * 2;
    private static final int DEFAULT_ITEM_SPACE = 14 * 2;

    @Override
    protected ReactWheelPicker createViewInstance(ThemedReactContext reactContext) {
        ReactWheelPicker picker = new ReactWheelPicker(reactContext);
        picker.setItemTextColor(Color.LTGRAY);
        picker.setSelectedItemTextColor(Color.BLACK);
        picker.setItemTextSize(DEFAULT_TEXT_SIZE);
        picker.setItemSpace(DEFAULT_ITEM_SPACE);
        picker.setCurved(true);
        return picker;
    }

    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(ItemSelectedEvent.EVENT_NAME, MapBuilder.of("registrationName", "onValueChange"));
    }

    @ReactProp(name="data")
    public void setData(ReactWheelPicker picker, ReadableArray items) {
        if (picker != null) {
            ArrayList<Integer> valueData = new ArrayList<>();
            ArrayList<String> labelData = new ArrayList<>();
            for (int i = 0; i < items.size(); i ++) {
                ReadableMap itemMap = items.getMap(i);
                valueData.add(itemMap.getInt("value"));
                labelData.add(itemMap.getString("label"));
            }
            picker.setValueData(valueData);
            picker.setData(labelData);
        }
    }

    @ReactProp(name="selectedIndex")
    public void setSelectedIndex(ReactWheelPicker picker, int index) {
        if (picker != null) {
            picker.setSelectedItemPosition(index, false);
        }
    }

    @ReactProp(name="itemTextColor")
    public void setItemTextColor(ReactWheelPicker picker, String color) {
        if (picker != null) {
            picker.setItemTextColor(Utils.parseColor(color));
        }
    }

    @ReactProp(name="itemTextSize")
    public void setItemTextSize(ReactWheelPicker picker, int size) {
        if (picker != null) {
            picker.setItemTextSize((int) PixelUtil.toPixelFromDIP(size));
        }
    }

    @ReactProp(name="selectedItemTextColor")
    public void setSelectedItemTextColor(ReactWheelPicker picker, String color) {
        if (picker != null) {
            picker.setSelectedItemTextColor(Utils.parseColor(color));
        }
    }

    @ReactProp(name="itemSpace")
    public void setItemSpace(ReactWheelPicker picker, int space) {
        if (picker != null) {
            picker.setItemSpace((int) PixelUtil.toPixelFromDIP(space));
        }
    }


    @ReactProp(name="isCurved")
    public void setCurved(ReactWheelPicker picker, boolean isCurved) {
        if (picker != null) {
            picker.setCurved(isCurved);
        }
    }

    @ReactProp(name="hasIndicator")
    public void setIndicator(ReactWheelPicker picker, boolean hasIndicator) {
        if (picker != null) {
            picker.setIndicator(hasIndicator);
        }
    }

    @ReactProp(name="indicatorColor")
    public void setIndicatorColor(ReactWheelPicker picker, String color) {
        if (picker != null) {
            picker.setIndicatorColor(Utils.parseColor(color));
        }
    }


    @ReactProp(name="hasCurtain")
    public void setCurtain(ReactWheelPicker picker, boolean hasCurtain) {
        if (picker != null) {
            picker.setCurtain(hasCurtain);
        }
    }

    @ReactProp(name="curtainColor")
    public void setCurtainColor(ReactWheelPicker picker, String color) {
        if (picker != null) {
            picker.setCurtainColor(Utils.parseColor(color));
        }
    }

    @ReactProp(name="curtainCornerRadius")
    public void setCurtainCornerRadius(ReactWheelPicker picker, int radius) {
        if (picker != null) {
            picker.setCurtainCornerRadius((int) PixelUtil.toPixelFromDIP(radius));
        }
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

}
