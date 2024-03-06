const { app } = require('@azure/functions');

app.storageQueue('StorageQueueTrigger', {
    queueName: 'order-service',
    connection: 'StorageConnectionString',
    handler: (queueItem, context) => {

        // queueItem is the Order JSON object
        context.log('Storage queue function processed work item. Order Id is', queueItem.OrderId);
    }
});
