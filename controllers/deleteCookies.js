const cookieParser = require('cookie-parser');



exports.deleteCookies = async(req,res)=>{

    res.clearCookie()
    console.log("aaaaaa",res.clearCookie);

        res.send('Cookie cleared');

};
// app.get('/clear-cookie', (request, response) => {
//     response.clearCookie('Token');
//     response.send('Cookie cleared');
// });
