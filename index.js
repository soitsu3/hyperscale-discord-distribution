const fs = require("fs")
const toCsv = require("./toCsv")
const getMessageCount = require("./getMessageCount")
const calculateTokens = require("./calculateTokens")

// Assuming 100 million token total supply for calcs, easy to change
const DISCORD_SUPPLY = 3_000_000

// Parse the json files and read the number of message for each active user
let users = getMessageCount()

// Total number of discord messages
const messageCount = users.reduce((total, user) => total + user.messages, 0)

// Calculate the tokens for each user
users = calculateTokens(users, messageCount, DISCORD_SUPPLY)

// Save to a csv file
const csv = toCsv(users)
fs.writeFileSync("distribution.csv", csv)

console.log("Process complete. Please open distribution.csv to view data.")
