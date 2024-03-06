const { app, output } = require('@azure/functions');

// Creaet a 'queueOutput' object - our connection/config to queue
const queueOutput = output.storageQueue({
    queueName:'order-service',
    connection:'StorageConnectionString'
})

app.http('HttpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    extraOutputs: [queueOutput],
    handler: async (request, context) => {

        //Get the json from the http request
        const json = await request.json();
        console.log("Function executed - Json received:")

        //To-Do: validate the incoming data

        //Send order to storage queue
        context.extraOutputs.set(queueOutput,json);

        return { body: "Success - order submitted to queue." };
    }
});
