// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai-api';

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY:string = process.env.OPENAI_API_KEY!;

const openai = new OpenAI(OPENAI_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {lifeEvent1, lifeEvent2, lifeEvent3} = req.body
    try{
      console.log("calling openai")
      const result = await openai.complete({
          engine: 'davinci-instruct-beta',
          prompt: `write song lyrics based on these life events:\n\n\nlife events:\n\n${lifeEvent1}\n${lifeEvent2}\n${lifeEvent3}\nlyrics:\n\n`,
          maxTokens: 1956,
          temperature: 1,
          topP: 1,
          presencePenalty: 0,
          frequencyPenalty: 0,
          bestOf: 1,
          n: 1,
          stream: false,
          //stop: ['\n', "testing"]
      })
      if(result){
        console.log("APIRESULT", result.data.choices[0].text)
        res.status(200).json({ lyrics: result.data.choices[0].text })
      }

    }catch(error) {
      console.log(error)
      throw(error)
    }
};
