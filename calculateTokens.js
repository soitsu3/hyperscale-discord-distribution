const calculateTokens = (users, totalMessages, totalSupply) => {
    return users.map((user) => {
        // Half of the tokens go to all users, the other half is based on activity
        const halfDiscordTokens = totalSupply / 2

        const percent = (user.messages / totalMessages) * 100

        // Half the discord allocations will go to all users of the discord
        const passiveDiscordTokens = halfDiscordTokens / users.length

        // The other half will be distributed based on activity
        const activeDiscordTokens = halfDiscordTokens * (percent / 100)

        // Total discord tokens
        const discordTokens = passiveDiscordTokens + activeDiscordTokens

        // If user is in callUsers array, add their proportion of call tokens
        const callTokens = 0

        const tokens = discordTokens + callTokens
        return {
            ...user,
            percent,
            discordTokens,
            tokens,
        }
    })
}

module.exports = calculateTokens
