export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { untrustedData, trustedData } = req.body;
  
  const action = untrustedData.inputText || 'play';
  const newScore = trustedData?.score ? trustedData.score + 1 : 1;
  
  res.status(200).json({
    image: 'https://arcade-game-topaz.vercel.app/game-frame.png',
    postUrl: 'https://arcade-game-topaz.vercel.app/api/webhook',
    action: { type: 'post' },
    data: { score: newScore }
  });
}
