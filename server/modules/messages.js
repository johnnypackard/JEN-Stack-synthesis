let express = require( 'express' );
let router = express.Router();

let messages = [];

router.post( '/', ( req, res )=>{
    console.log( 'in /messages POST:', req.body );
    res.send( 'whinney' );
});

router.post( '/', ( req, res )=>{
    console.log( 'in /messages POST:', req.body );
    messages.push( req.body );
    res.sendStatus( 200 );
}); // end messages POST

module.exports = router;

