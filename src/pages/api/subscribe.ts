import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.body.email)
    res.status(200).json({ ok: 'hello' })
    console.log('deu boa?')
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
