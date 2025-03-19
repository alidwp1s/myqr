# myqr
## QR Code scanner for login hotspot MikroTik

### Cara pakai

1. Tambahkan button di login.html
```html
<button onclick="window.location='https://alidwp1s.github.io/myqr';">QR Code</button>
```
2. Tambahkan script berikut di MikroTik via Terminal.
```
/ip hotspot walled-garden ip

add action=accept comment="Mikhmon QR Code Scanner" disabled=no dst-host=alidwp1s.github.io
```

### Powered by webqr.com
-----
#CR : <a href:"https://laksa19.github.io">laksa19</a>
