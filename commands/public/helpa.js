const { MessageType, Mimetype } = require("@adiwajshing/baileys");

module.exports.command = () => {
  let cmd = ["helpa"];

  return { cmd, handler };
};

const handler = async (sock, msg, from, args, msgInfoObj) => {
  let { prefix } = msgInfoObj;
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(4001);

  let text = `*Bot Imranyyβ *
  ${readMore}
_Admin commands only!_

π *${prefix}add <phone number>*
  - _Add new member!_
 [or tag message of removed member with *${prefix}add*]
 
π *${prefix}kick <mention>*
  - _Kick member from group!_
 [or tag message of member with *${prefix}kick*]

π *${prefix}mute | ${prefix}unmute*
  - _Mute and Unmute the group!_

π *${prefix}delete*
  - _Delete anyone message!_
Alias: *${prefix}d*

π *${prefix}tagadmins*
  - _Tag all the admins!_
Alias: *${prefix}ta*

π *${prefix}disable <command>*
  - _Disable command for current group!_

π *${prefix}enable <command>*
  - _Enable command for current group!_

π *${prefix}pvxg*
  - _Get stats of all groups message!_
  
π *${prefix}pvxm*
  - _Get stats of member messages of current group!_
  
π *${prefix}pvxt <number>*
  - _Get top member stats of all groups!_

π *${prefix}pvxt5*
  - _Get top 5 member stats of all groups!_

π *${prefix}pvxt10*
  - _Get top 10 member stats of all groups!_

π *${prefix}zero*
  - _Get numbers with 0 message of current group!_
  
π *${prefix}pvxstats*
  - _Get stats of PVX groups!_

π *${prefix}rt*
  - _Tag a random member!_  

π *${prefix}warning*
  - _Give warning to user!_

π *${prefix}blacklist*
  - _Get blacklist numbers!_ 

π *${prefix}blacklistadd*
  - _Add number to blacklist!_
Alias: *${prefix}bla*

π *${prefix}blacklistremove*
  - Remove number from blacklist!_  
Alias: *${prefix}blr*

send ${prefix}source for sourcecode of BOT
βοΈ more cool commands coming...`;

  sock.sendMessage(from, { text }, { quoted: msg });
};
