const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server'); 

    // db.collection('Todos').insertOne({
    //     title: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Insert new doc into Users (name, age, location)

    db.collection('Users').insertOne({
        name: 'Neil',
        age: 24,
        location: 'California' 
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert Todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();

});