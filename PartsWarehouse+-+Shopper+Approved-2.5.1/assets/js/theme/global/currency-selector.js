let currencySelectorCalled = false;

export default function (cartId) {
    if (!cartId) return;

    if (!currencySelectorCalled) {
        currencySelectorCalled = true;
    } else {
        return;
    }
}
