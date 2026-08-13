export default async function handler(req, res) {
  const { code } = req.query;
  const clientId = "Ov23li69cYYRHzdNXdMs";
  const clientSecret = "979cf8efb8add751af87a0642796f32f3be8513c";

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const tokenData = await tokenRes.json();

    if (tokenData.error) {
      res.status(400).send(`OAuth error: ${tokenData.error_description || tokenData.error}`);
      return;
    }

    const token = tokenData.access_token;
    const content = `
      <script>
        (function() {
          function receiveMessage(e) {
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({ token, provider: "github" })}',
              e.origin
            );
            window.removeEventListener("message", receiveMessage, false);
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })();
      </script>
    `;
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(content);
  } catch (err) {
    res.status(500).send("Erreur d'authentification: " + err.message);
  }
}
