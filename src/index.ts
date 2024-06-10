import RingCentral from '@rc-ex/core';
// import WebSocketExtension from '@rc-ex/ws';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  await rc.authorize({
    jwt: process.env.RINGCENTRAL_JWT_TOKEN!,
  });
  // const wsExtension = new WebSocketExtension();
  // await rc.installExtension(wsExtension);
  // await wsExtension.subscribe(['/team-messaging/v1/posts'], (event) => {
  //   console.log(JSON.stringify(event, null, 2));
  // });

  await rc.teamMessaging().v1().chats('86913122310').posts().post({
    text: "<a class='at_mention_compose' rel='{\"id\":-1}'>@Team</a>",
  });
};
main();
