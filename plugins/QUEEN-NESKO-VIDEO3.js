const { cmd } = require("../command");
const yts = require("yt-search");
const axios = require("axios");

// temporary videos downloader

cmd({
  pattern: "video3",
  react: '📽️',
  desc: "Download audio from YouTube by searching for keywords (using API 2).",
  category: "video",
  use: ".video1 <song name or keywords>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      return reply("*Please provide a song name or keywords to search for.*");
    }

    reply("*🎧 Qᴜᴇᴇɴ ɴᴇsᴋᴏ sᴇᴀʀᴄʜɪɴɢ ғᴏʀ ᴛʜᴇ ᴠɪᴅᴇᴏ.....(Ɔ ˘⌣˘)♥(˘⌣˘ C)...*");
      
      
      

      reply("ʙʙʏ.....(Ɔ ˘⌣˘)♥(˘⌣˘ C)...*");
      
      
      
      
      reply("ᴡᴀɪᴛ ᴀ ᴍᴏᴍᴇɴᴛ ʟᴏᴠᴇ{♥︎‿♥︎}*");
      
      
      
      
      reply("ᴛᴀᴋᴇ ᴀᴅᴠᴀɴᴛᴀɢᴇ ᴀɴᴅ ᴅʀɪɴᴋ ᴡᴀᴛᴇʀ (✿◠‿◠)");
      
      
      
      
      reply("ʏᴏᴜʀ ᴠɪᴅᴇᴏ ɪs ᴄᴏᴍɪɴɢ ɪɴ");
      reply("10000 sᴇᴄᴏɴᴅ(◠‿◠)");

    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0) {
      return reply(`❌ No results found for "${searchQuery}".`);
    }

    const firstResult = searchResults.videos[0];
    const videoUrl = firstResult.url;

    // Call the API to download the video
    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data.success) {
      return reply(`❌ Failed to fetch audio for "${searchQuery}".`);
    }

    const { title, download_url } = response.data.result;

    // Send the video file
    await conn.sendMessage(from, {
      video: { url: download_url },
      mimetype: 'video/mp4',
      ptt: false
    }, { quoted: mek });

    reply(`✅ *${title}* *_Qᴜᴇᴇɴ ɴᴇsᴋᴏ ʜᴀs ʙᴇᴇɴ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ (⁎˃ᴗ˂⁎)_* !`);
  } catch (error) {
    console.error(error);
    reply("❌ An error occurred while processing your request.");
  }
});