# getmac-offline

`getmac-offline` is a package that works for retrieving the physical address or MAC address of your device regardless of any network status. By default with Node.JS you can't get the device MAC address when **offline** but this package works like a charm in that scenario ✨

It's a super simple and straight forward package that comes handy for offline application and Yes! this is platform independent 😌

```javascript
const getMac = require("getmac-offline");

getMac().then((mac) => {
  console.log("MAC ADDRESS: ", mac);
}).catch((err) => {
  console.error(err);
});
```
