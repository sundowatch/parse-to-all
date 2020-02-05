exports.parseAll = (value) => {
    let res = {
        integer: parseInt(value),
        float: parseFloat(value),
        string: String(value),
        array: [value],
        arrayInteger: [parseInt(value)],
        arrayFloat: [parseFloat(value)],
        arrayString: [String(value)],
        object: {value}
    }
    return res;
}