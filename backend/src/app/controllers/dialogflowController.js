const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { SessionsClient } = require('dialogflow');
const { WebhookClient } = require('dialogflow-fulfillment');
const cors = require('cors')({ origin: true});

const serviceAccount = require('../../config/service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mentorbot-kalf-default-rtdb.firebaseio.com/'
});

exports.dialogflowGateway = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const { queryInput, sessionId } = request.body;
      const sessionClient = new SessionsClient({ credentials: serviceAccount  });
      const session = sessionClient.sessionPath('mentorbot-kalf', sessionId);

      const responses = await sessionClient.detectIntent({ session, queryInput});

      const result = responses[0].queryResult;

      response.send(result);
    } catch (error) {
      response.send(error);
    }
    
  });
});

exports.dialogflowWebhook = functions.https.onRequest(async (request, response) => {
    const agent = new WebhookClient({ request, response });

    const result = request.body.queryResult;

    async function userOnboardingHandler(agent) {

     const db = admin.firestore();
     const profile = db.collection('users').doc('jeffd23');

     const { name, color } = result.parameters;

      await profile.set({ name, color })
      agent.add(`Welcome aboard my friend!`);
    }

    let intentMap = new Map();
    intentMap.set('UserOnboarding', userOnboardingHandler);
    agent.handleRequest(intentMap);
});