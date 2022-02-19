function toCsv(data) {
    let csv = "Username,Nickname,Messages,Tokens\n"
    data.forEach((user) => {
        csv += `"${user.username}","${user.nickname}",${user.messages},${user.discordTokens}\n`
    })
    return csv
}

module.exports = toCsv
