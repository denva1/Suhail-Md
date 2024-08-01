const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_57_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgODcsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOCxcbiAgICAgICAgODksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDMzLFxuICAgICAgICAxNixcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjU1T0ovVGpTNFFyL0ZxYmpBemRwdE9Ya1ZqbjFJSzd6SDNDVnlHSmEycUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NTM5MDQxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E3NkIxNkZDRUZDRDZFMEQ3RDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNDk5MDc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJ2VHBiX05TU1FHWEtmdlIxcjFMS2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDk2NjI4NDUtMjBiMi00NzQ3LWIyYTgtMDgzOGRiYjBhNGQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAzNSxcbiAgICAgIDI0MixcbiAgICAgIDI1LFxuICAgICAgNDQsXG4gICAgICAyMzksXG4gICAgICAxNzAsXG4gICAgICA1OSxcbiAgICAgIDk4LFxuICAgICAgMTMsXG4gICAgICAyMzUsXG4gICAgICAxMjcsXG4gICAgICAxNSxcbiAgICAgIDc2LFxuICAgICAgMzgsXG4gICAgICAyNixcbiAgICAgIDM3LFxuICAgICAgMjM5LFxuICAgICAgMTEyLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgNjcsXG4gICAgICA1MixcbiAgICAgIDIxNSxcbiAgICAgIDgyLFxuICAgICAgMjA0LFxuICAgICAgMTk1LFxuICAgICAgMTczLFxuICAgICAgMjUxLFxuICAgICAgMTk0LFxuICAgICAgMjUxLFxuICAgICAgMTQ4LFxuICAgICAgNTksXG4gICAgICAxMTYsXG4gICAgICAxODIsXG4gICAgICAyMDksXG4gICAgICAyMDksXG4gICAgICAxMDgsXG4gICAgICAxMjYsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHVFQxN0g1TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NTM5MDQxNzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTE0MDYzNjM2OTcyNzU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJfX19fR2l2ZSBVcyBUaGlzIERheXNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQci8rOGdCRVAzL3JMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi8zUzljUHBiQUlaSUJWTFhyNjlCbFRENzVHL1lLaW96Qno0amgzSWEzRms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQk1qeUlZQlFDVW5OeWFpYjJQdzdKNjR0aGdibXFWNWQ3eVo4UjY4bE8vSmswRmNqeHZBNVJnRjNUUUtNeExoSWY1cG9jL2dwTVVIUTRydjRiQURQaXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2lOU3IwcGJFTjQydm1ENUNvRlFkek5WRGRWOHdNQ1ZzV2tNU0ZzRjFTa3pXQUlFZHlvSW10bXE4UGpRM3AyRnV3czlSYmpqYk1ONFlQQnpUU2svanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NTM5MDQxNzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0OTkwNzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIT3VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhPdS5qc29uIjogIntcImtleURhdGFcIjpcIm1nb0NwQ3BNWTBrdUpCVlhqWFc4OGFaaW56MVZiVUZCNFRHQ0gxNm1RS2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIxNDYyMDEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0OTkwNzMzNjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
