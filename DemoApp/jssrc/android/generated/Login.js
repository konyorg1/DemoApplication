function addWidgetsLogin() {
    Login.setDefaultUnit(kony.flex.DP);
    var FreeCharge = new kony.ui.Label({
        "id": "FreeCharge",
        "isVisible": true,
        "left": "89dp",
        "skin": "CopyslLabel0dca58dce69ce49",
        "text": "FreeCharge",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "28dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {}, {
        "textCopyable": false
    });
    var TextField0092af8d0701c41 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "33dp",
        "id": "TextField0092af8d0701c41",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "44dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0e8bf7236ef7748",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "138dp",
        "width": "302dp",
        "zIndex": 2
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var TextField0ec7fd1bd1f384f = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "30dp",
        "id": "TextField0ec7fd1bd1f384f",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "41dp",
        "secureTextEntry": true,
        "skin": "CopyslTextBox057b275d809d948",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "226dp",
        "width": "305dp",
        "zIndex": 2
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Username = new kony.ui.Label({
        "id": "Username",
        "isVisible": true,
        "left": "41dp",
        "skin": "CopyslLabel064010dad8c4a46",
        "text": "UserName",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "115dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {}, {
        "textCopyable": false
    });
    var Password = new kony.ui.Label({
        "id": "Password",
        "isVisible": true,
        "left": "41dp",
        "skin": "CopyslLabel0094c23fdfb464d",
        "text": "Password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "205dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {}, {
        "textCopyable": false
    });
    var ClickLogin = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "ClickLogin",
        "isVisible": true,
        "left": "70dp",
        "onClick": AS_Button_a9e820d931cc4cf39e3d8c4b0e5714ce,
        "skin": "slButtonGlossBlue089550f4774354d",
        "text": "Login",
        "top": "323dp",
        "width": "213dp",
        "zIndex": 2
    }, {
        "displayText": true
    }, {});
    var Label0440f9e9ffbce4d = new kony.ui.Label({
        "id": "Label0440f9e9ffbce4d",
        "isVisible": true,
        "left": "53dp",
        "skin": "CopyslLabel0baee3d4dfd684e",
        "text": "Forget Password?",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "267dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {}, {
        "textCopyable": false
    });
    Login.add(
    FreeCharge, TextField0092af8d0701c41, TextField0ec7fd1bd1f384f, Username, Password, ClickLogin, Label0440f9e9ffbce4d);
};

function LoginGlobals() {
    Login = new kony.ui.Form2({
        "addWidgets": addWidgetsLogin,
        "enabledForIdleTimeout": false,
        "id": "Login",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0616222c26b9b41"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};