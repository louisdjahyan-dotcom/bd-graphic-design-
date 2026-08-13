export default function handler(req, res) {
  const clientId = "Ov23li69cYYRHzdNXdMs";
  const redirectUri = `https://${req.headers.host}/api/callback`;
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=repo,user`;
  res.writeHead(302, { Location: githubAuthUrl });
  res.end();
}
