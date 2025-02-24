const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *AYAN SEVEN MODZ*

> *QUEEN-NESKO REPO:*
*|* *https://github.com/ayanmdoz/QUEEN-NESKO*

> *QUEEN-NESKO SUPPORT GROUP:*
*|* *https://chat.whatsapp.com/Jc9yQot5xH52MjQoREbLA5*

> *QUEEN-NESKO SUPPORT GROUP2:*
*|* *https://chat.whatsapp.com/DKwLTbRoWDq3De5GA8mgVl*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vb0Ei5L47Xe6rmpb4f2m*
*╰──────────────●●►*

> *update command Done*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363395078593786@newsletter',
      newsletterName: "QUEEN-NESKO",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'QUEEN-NESKO',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/ayanmdoz/QUEEN-NESKO" ,
thumbnailUrl: "https://i.ibb.co/p6Fn0hQf/temp-image.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
