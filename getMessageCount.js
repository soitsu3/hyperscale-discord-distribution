const fs = require("fs")

let users = []
let totalMessages = 0

const dir = fs.opendirSync("channels")
let dirent

const getMessageCount = () => {
    // Loop over all files in /json directory
    while ((dirent = dir.readSync()) !== null) {
        const { name } = dirent
        const file = fs.readFileSync(`channels/${name}`, "utf8")

        // Parse JSON file to JS object
        const channel = JSON.parse(file)

        channel.messages.forEach((message) => {
            const { name, discriminator, nickname } = message.author

            // Ignore bot posts
            if (message.author.isBot) {
                return
            }

            // Assemble discord unique identifier
            const username = `${name}#${discriminator}`

            // Check if user is already in array
            const user = users.find((user) => user.username === username)

            // If user is not in array, add them
            // Otherwise increment their message count
            if (!user) {
                users.push({
                    username,
                    nickname,
                    messages: 1,
                })
            } else {
                user.messages += 1
            }

            totalMessages += 1
        })
    }
    dir.closeSync()

    users.sort((a, b) => b.messages - a.messages)
    return users
}

module.exports = getMessageCount
