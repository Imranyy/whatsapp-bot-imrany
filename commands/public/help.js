const { MessageType, Mimetype } = require("@adiwajshing/baileys");

// π ${prefix}wall text
// π ${prefix}matrix text
// π ${prefix}flame text
// π ${prefix}fire text
// π ${prefix}city text
// π ${prefix}3d text
// π ${prefix}logo text
// π ${prefix}light text
// π ${prefix}ff text
// π ${prefix}neon text
// π ${prefix}flower text
// π ${prefix}sand text

// π *${prefix}insta url* β
//   - _Instagram videos downloader!_
//   Alias: *${prefix}i url*π
// π *${prefix}fb url* β
//   - _Facebook videos downloader!_
// π *${prefix}slist* β
//   - Get list of stickers command!_

// π *${prefix}count*
//   - _Know your message count in current group!_

// π *${prefix}total*
//   - _Know your message count in all PVX groups!_

module.exports.command = () => {
  let cmd = ["help", "h"];

  return { cmd, handler };
};

const handler = async (sock, msg, from, args, msgInfoObj) => {
  let { prefix } = msgInfoObj;
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(4001);

  let text = `*Bot Imranyyβ *
  ${readMore}
π *${prefix}sticker*
- _Create sticker from media!_
  Alias: *${prefix}s*
  
π *${prefix}sticker crop*
  - _Create full size sticker from media!_
  Alias: *${prefix}s c*

π *${prefix}image*
  - _Create image from sticker!_
  
π *${prefix}imagesearch*
  - _Search image from any name!_
  Alias: *${prefix}is*
  
π *${prefix}searchsearch*
  - _Search sticker from any name!_
  Alias: *${prefix}ss*

π *${prefix}rank*
  - _Know your message count & rank in all PVX groups!_
  
π *${prefix}ranks*
  - _Know ranks list of PVX groups!_

π *${prefix}totalg*
  - _Know your message stats in all PVX groups!_
  
π *${prefix}ytv url*
  - _Youtube videos downloader!_

π *${prefix}yta url*
  - _Youtube audio downloader!_

π *${prefix}steal*
  - _Change sticker name to PVX BOT!_

π *${prefix}song name*
  - _Get songs in good quality!_
  [Better use ${prefix}yta command to download correct song from youtube]

π *${prefix}alive*
  - _Check if bot is ON or OFF!_
  Alias: *${prefix}a*

π *${prefix}cricketcommand*
  - _To get command details of cricket!_
  Alias: *${prefix}cc*

π *${prefix}votecommand*
  - _To get command details of voting!_
  Alias: *${prefix}vc*

π *${prefix}quote*
  - _Give a random quote!_

π *${prefix}gender firstname*
  - _Get gender from person first name!_
    
π *${prefix}technews*
  - _Get latest Tech news from inshorts !_ 

π *${prefix}pvxlink*
  - _Get links for all PVX groups!_
  Alias: *${prefix}link*

π *${prefix}donation*
  - _Get donation details and help PVX community!_

π *${prefix}feedback*
  - _Get feedback form!_

π *${prefix}rules*
  - _Get PVX groups rules!_
  Alias: *${prefix}r*

π *${prefix}source*
  - _Get bot source code!_

π *${prefix}dev*
  - _Get dev contact to report bug or to add new feature!_

π *${prefix}91only*
  - _To instant ban all numbers other than 91 when joined in group!_

π *${prefix}help*
  - _To get list of public commands!_

π *${prefix}helpa*
  - _To get list of admin commands!_

π *${prefix}helpo*
  - _To get list of owner commands!_

send ${prefix}source for sourcecode of BOT
βοΈ more cool commands coming...`;

  sock.sendMessage(from, { text }, { quoted: msg });
};
