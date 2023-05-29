const connection = require('../config/connection');
const {} = require('../models');

connection.on('error', (err)=>err);

connection.once('open', async () =>{
    console.log('connected');

    //await User.deleteMany({});

    //await Thought.deleteMany({});

    //const users = [];

    //!Fill in data goes here. May need to iterate over it to implement the data.
    for(let i = 0;i<arr.length;i++){
        const userName = getRandUsername();
        const firstName = getRandFirstName();
        const lastName = getRandLastName();
        const email = getRandEmail();
        const pass = getRandPass();

        users.push({
            userName,
            firstName,
            lastName,
            email,
            pass,
            thought,
        });
    };

    await User.collection.insertMany(users);

    await 

    console.table(users);
    console.info('Seed has been planted');
    process.exit(0);
});