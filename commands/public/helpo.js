const { MessageType, Mimetype } = require("@adiwajshing/baileys");

module.exports.command = () => {
  let cmd = ["helpo"];

  return { cmd, handler };
};

const handler = async (sock, msg, from, args, msgInfoObj) => {
  let { prefix } = msgInfoObj;
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(4001);

  let text = `*Bot Imranyyβ *
  ${readMore}
_Restricted command for owner only!_
  
π *${prefix}test query* β
  - _Execute code with whatsapp directly!_

π *${prefix}tagall* β
  - _Tag all the members!_  

π *${prefix}broadcast* β
  - _Broadcast a message to all groups!_  
Alias: *${prefix}bc*

π *${prefix}gname* β
  - _Save all group name in DB!_   

π *${prefix}groupbackup* β
  - _Take backup of group in DB!_  

π *${prefix}countstats* β
  - _Get stats of number of command used!_  

π *${prefix}tg* β
  - _Make TG to WA stickers!_
  @tgstowebpbot <- animated 128px.zip
  @Stickerdownloadbot <- non-animated webp.zip

π *${prefix}stg* β
  - _Stop TG to WA stickers!_
  
π *${prefix}startvotepvx* β
  - _Start vote for all pvx groups!_
  
π *${prefix}stopvotepvx* β
  - _Stop vote for all pvx groups!_

π *${prefix}donationadd* β
  - _add by giving after command #name #amount!_
Alias: *${prefix}da*

send ${prefix}source for sourcecode of BOT
βοΈ more cool commands coming...`;

  sock.sendMessage(from, { text }, { quoted: msg });
};
