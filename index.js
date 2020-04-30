"use strict";
Object.defineProperty(window, 'MySweetApp', { value: 'v1.0.0', writable: false });
function deliveryMethod() {
    // TODO make some calculation
    return 'overnight';
}
function shipWeight() {
    const el = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML, 0);
}
function sendUpdates(emailAddr) {
    function sendEmail(addr) {
        // tslint:disable-next-line: no-console
        console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);
        if (shipWeight() > 100) {
            // tslint:disable-next-line: no-console
            console.log('WARNING: Oversize package');
        }
    }
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val) => {
            sendEmail(val.trim());
        });
    }
    else {
        sendEmail(emailAddr.trim());
    }
}
sendUpdates('asdsad@mail.ru');
