This is the code used to calculate the distribution of Hyperscale tokens. The information can be found here: https://soitsu.vercel.app/posts/airdrop


3% of the total supply allocated for the $HYPR airdrop to the community will be distributed to all active members of the Hyperscale discord channel. Activity is defined as having having sent at least one message.

Half of this 3,000,000 tokens will be distributed for attendance, distributed evenly among all members.

The other half will be calculated in proportion to the level of activity in the discord. 

The formula is as follows:

```
membershipTokens = 1,500,000 ÷ activeUsers
activityTokens = 1,500,000 × (userMessages ÷ totalMessages)
```

To run the code and verify the results yourself:

```
git clone git@github.com:soitsu3/hyperscale-discord-distribution.git
cd hyperscale-discord-distribution
node index.js
```

This will create a `distribution.csv` file with the allocation for each discord user.