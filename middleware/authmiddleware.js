// Auth middle ware


const authChek = (req, res, next) => {
    console.log('use is okay');
    next();
}


module.exports = {
    authChek
};