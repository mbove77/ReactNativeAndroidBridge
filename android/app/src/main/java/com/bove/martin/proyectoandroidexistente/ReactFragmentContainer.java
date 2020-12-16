package com.bove.martin.proyectoandroidexistente;

import android.os.Bundle;

import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import com.facebook.react.ReactFragment;

public class ReactFragmentContainer extends AppCompatActivity {

    private TextView mTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_react_fragment_container);

        Fragment reactNativeFragment = new ReactFragment.Builder()
                .setComponentName("MyReactNativeApp")
                .build();

        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.fragment, reactNativeFragment)
                .commit();
    }
}