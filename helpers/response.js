module.exports.response = function (res, error, data, message, statusCode) {
    let response = {};
    response = data;
    return res.status(statusCode).json(response);
};
