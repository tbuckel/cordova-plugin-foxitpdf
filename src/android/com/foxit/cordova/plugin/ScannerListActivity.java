package com.foxit.cordova.plugin;


import android.content.DialogInterface;
import android.os.Bundle;

import com.foxit.uiextensions.modules.scan.IPDFScanManagerListener;
import com.foxit.uiextensions.modules.scan.PDFScanManager;
import com.foxit.uiextensions.utils.AppTheme;

import androidx.annotation.Nullable;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

public class ScannerListActivity extends FragmentActivity {

    private static final String SANNER_LIST_TAG = "SANNER_LIST_TAG";

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        AppTheme.setThemeFullScreen(this);

        FragmentManager fm = getSupportFragmentManager();
        DialogFragment fragment = (DialogFragment) fm.findFragmentByTag(SANNER_LIST_TAG);
        FragmentTransaction transaction = fm.beginTransaction();
        if (fragment == null) {
            fragment = PDFScanManager.createScannerFragment(new DialogInterface.OnDismissListener() {
                @Override
                public void onDismiss(DialogInterface dialog) {
                    ScannerListActivity.this.finish();
                }
            });
        } else {
            transaction.remove(fragment);
        }
        transaction.add(fragment, SANNER_LIST_TAG);
        transaction.commitAllowingStateLoss();
        PDFScanManager.registerManagerListener(scanManagerListener);
    }

    private IPDFScanManagerListener scanManagerListener = new IPDFScanManagerListener() {
        @Override
        public void onDocumentAdded(int errorCode, String path) {
            FoxitPdf.onDocumentAdded(errorCode, path);
        }
    };

    @Override
    protected void onDestroy() {
        super.onDestroy();
        PDFScanManager.unregisterManagerListener(scanManagerListener);
    }

}
