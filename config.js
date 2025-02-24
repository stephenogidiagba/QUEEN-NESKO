const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'XjRizCiK#16S6UTUIbsVMZ4uLMvScEOmG8XkVyungkmZdNO1Ohx0', //add your session id
MONGODB: process.env.MONGODB || "mongodb+srv://ayanmodz503:jJJBzHJnZuUkBedM@cluster0.xz3am.mongodb.net/", //add your mongodb url
 URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/p6Fn0hQf/temp-image.jpg',
MAX_SIZE: 500
};

