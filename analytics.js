// analytics.js
window.AhrefsAnalytics = {
  sendEvent: function (eventName, data) {
    console.log('Event sent:', eventName, data || {});
    // In a real implementation, this would send a request to your analytics backend
  }
};
