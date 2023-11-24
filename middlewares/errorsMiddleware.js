module.exports = function ( err, req, res, next){

    console.log(err);

    res.status(422).json({ errors: errors.array() });
    
}