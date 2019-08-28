const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("C:/Users/Vicente/Documents/Discord/WelcomeBot/config.json");

require('dotenv').config({path: 'key.env'});

/** 
 *  Iniciando Bot
*/
client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores.`);
});

/**
 *  Verificando e atualizando servidores onde o bot está localizado
 */

client.on("guildCreate", guild => {
    console.log(`O bot entrou nos servidores: ${guild.name} (id: ${guild.id})}. População: ${guild.memberCount} membros.`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores.`);
});

/**
 *  Removendo e atualizando servidores do bot.
 */

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor. ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {

        if(message.author.bot) return;
        if(message.channel.type === "dm") return;
    
    const args = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(comando === "!ping") {
        const msg = await message.channel.send("Ping?");
        msg.edit(`Pong! A Latência é ${msg.createdTimestamp - message.createdTimestamp}ms. A Latência da API é ${Math.round(client.ping)}ms.`);
    }

});

client.login(process.env.BOT_TOKEN);

