package com.bove.martin.proyectoandroidexistente;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Martín Bove on 17/12/2020.
 * E-mail: mbove77@gmail.com
 */
public class NativeModule extends ReactContextBaseJavaModule {

    NativeModule(ReactApplicationContext context) {
        super(context);
    }

    @ReactMethod
    public void arbitraryMethod(String query, Promise promise) {
        promise.resolve("Hi from Native Module, this is your input: " + query);
    }

    @NonNull
    @Override
    public String getName() {
        return "NativeModule";
    }
}