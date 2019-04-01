class Utils {
    /* formats an Object/Class for the API request.  removes null/empty object keys and joins arrays */
    static cleanObject(obj) {
        const propNames = Object.getOwnPropertyNames(obj);
        for (let i = 0; i < propNames.length; i++) {
            const propName = propNames[i];
            if ( obj[propName] === '' || obj[propName] === null || obj[propName] === undefined) {
                delete obj[propName];
            }
            if( Array.isArray( obj[propName] ) ) {
                obj[propName] = obj[propName].join(',');
            }
        }
        return obj;
    }
};

module.exports = Utils;
