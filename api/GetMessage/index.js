module.exports = async function (context, req) {
  const body = req.body;
  const headers = req.headers;
  
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the API. Secret is: " + process.env.secret + " headers token: " + req.headers.token + " body: " + JSON.stringify(req.body)},
  };
};
