//! "string".toCharArray();
//? This method converts a string to a character array.
String.prototype.toCharArray = function() {
    return [...
        '' + this
    ]
};

//! "string".map();
//? This method allows to map a string without converting it to an array.
String.prototype.map = function(t) {
    return [...
        '' + this
    ].map(t).join('')
};