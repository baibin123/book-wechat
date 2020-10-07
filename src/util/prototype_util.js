Object.defineProperty(Object.prototype, 'deleteEmptyAtt', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: function () {
        for (let [key, value] of Object.entries(this)) {
            if (value === "" || value === null || value === undefined) delete this[key];
        }
        return this
    }
});

