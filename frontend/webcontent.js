// Definición de browserObject
var browserObject = {
    name: navigator.userAgent,
    version: navigator.appVersion,
    isMobile: /Mobi|Android/i.test(navigator.userAgent),
    openNewTab: function(url) {
        window.open(url, '_blank');
    }
};

// Uso de browserObject
if (typeof browserObject !== 'undefined') {
    console.log('Browser Name:', browserObject.name);
    console.log('Browser Version:', browserObject.version);
    if (browserObject.isMobile) {
        console.log('This is a mobile browser.');
    } else {
        console.log('This is not a mobile browser.');
    }
    browserObject.openNewTab('https://www.example.com');
} else {
    console.error('browserObject is undefined');
}
