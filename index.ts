Object.defineProperty(window, "MySweetApp", {value: "v1.0.0", writable: false});

function deliveryMethod() {
    // TODO make some calculation
    return "overnight";
}

function shipWeight() {
  const el: HTMLElement | null = document.getElementById('weight')

  if (!el) return 0

  return parseInt(el.innerHTML);
}

function sendUpdates(emailAddr: string | string[]) { // string or string array
    function sendEmail(addr: string) {
        console.log(`Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`);
        if (shipWeight() > 100) {
            console.log("WARNING: Oversize package");
        }
    }

    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}

sendUpdates('asdsad@mail.ru')