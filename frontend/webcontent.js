// Definición de browserObject
var browserObject = {
    name: 'Chrome',
    version: '89.0',
    isMobile: false,
    openNewTab: function(url) {
        window.open(url, '_blank');
    }
};

// Uso de browserObject
if (typeof browserObject !== 'undefined') {
    console.log('Browser Name:', browserObject.name);
    browserObject.openNewTab('https://www.mayoralimp.com');
} else {
    console.error('browserObject is undefined');
}
