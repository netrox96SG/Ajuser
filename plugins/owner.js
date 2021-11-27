const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919776517392-1634557305@g.us') {

            return;
        }

        if (Config.OWNER == 'Mr soumya') {
            await message.client.sendMessage(message.jid,'*MR SOUMYA created by BLACK DRAGON*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER +919776517392 '\n Mr soumya created by BLACK DRAGON', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Julie.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919776517392-1634557305@g.us') {

            return;
        }

        if (Config.OWNER == 'Mr soumya') {
            await message.client.sendMessage(message.jid,'*MR SOUMYA created by BLACK DRAGON*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER +919776517392'\n MR SOUMYA created by Black dragon', MessageType.text);
        }
    }));
}
