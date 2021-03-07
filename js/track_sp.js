const analytics = firebase.analytics();

function logCheckout() {
  analytics.logEvent("sp_register", { time: new Date().toISOString() });
}
