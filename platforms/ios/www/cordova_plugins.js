cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.bcsphere.bluetooth/www/bluetooth.js",
        "id": "org.bcsphere.bluetooth.bluetooth",
        "merges": [
            "navigator.bluetooth"
        ]
    },
    {
        "file": "plugins/org.bcsphere.wifi/www/wifi.js",
        "id": "org.bcsphere.wifi.wifi",
        "merges": [
            "navigator.wifi"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.bcsphere.bluetooth": "0.0.1",
    "org.bcsphere.wifi": "0.0.1"
}
// BOTTOM OF METADATA
});