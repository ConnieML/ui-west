// set your account sid here
var accountSid = AC224555fa425d29fe3b0405b4721372fc;


var appConfig = {
  // Uncomment the following lines to enable automatic log in
  //
  // sso: {
  //   accountSid: accountSid
  // },
  sdkOptions: {
    worker: {
      logLevel: "error"
    },
    insights: {
      logLevel: "error"
    },
    chat: {
      logLevel: "error"
    },
    flex: {
      logger: {
        level: "error"
      }
    },
    voice: {
      debug: false
    }
  }
}