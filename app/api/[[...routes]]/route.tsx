/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

const predictions: Record<string, string> = {
  capricorn: 'The stars are aligning for a significant investment opportunity. Keep a close watch on emerging altcoins; a breakthrough could be imminent. However, exercise caution and avoid impulsive decisions. A well-researched move might bring you closer to financial growth.',
  leo: 'Patience is key this week. While the crypto market might seem volatile, your steadfast approach will pay off. Stick to your long-term strategy, and avoid the temptation to sell during short dips. Stability and perseverance will be your best allies.',
  aries: 'Your curiosity and adaptability will be advantageous. Explore new blockchain technologies and innovative projects. Networking with like-minded crypto enthusiasts could open doors to exciting opportunities. Stay informed and flexible to capitalize on these prospects.',
  libra: 'Emotional investments can be risky in the crypto world. Take a step back and evaluate your portfolio with a clear mind. Trust your intuition, but back it up with solid research. Consider reallocating assets to more stable options to safeguard your investments.',
  aquarius: 'Innovation is in the air. You might find yourself drawn to new and unconventional investment opportunities. Trust your forward-thinking nature, but make sure to do your homework before diving in.',
  pisces: 'Your empathy and intuition can guide you to make wise investment choices. Look for opportunities that align with your values and contribute to the greater good. Your compassionate approach will attract positive outcomes.',
  taurus: 'Stability and reliability will be your guiding principles. Focus on well-established projects with a proven track record. Avoid risky ventures and stick to your tried-and-true methods.',
  gemini: 'Your quick thinking and adaptability will serve you well. Be prepared to make swift decisions as new opportunities arise. Trust your instincts, but ensure you have all the facts before moving forward.',
  cancer: 'Your emotional intelligence is a great asset. Use it to gauge the market sentiment and make informed decisions. A cautious approach will help you avoid unnecessary risks.',
  scorpio: 'Your determination and resourcefulness will help you navigate the complexities of the market. Stay focused on your goals and don’t be afraid to dig deep into your research.',
  sagittarius: 'Your optimistic outlook and adventurous spirit can lead you to promising ventures. However, make sure to balance your enthusiasm with practical considerations. A measured approach will yield the best results.',
  virgo: 'Your analytical skills are your greatest strength. Use them to meticulously evaluate potential investments. Avoid getting bogged down in details and keep an eye on the bigger picture.'
}

app.frame("/", (c) => {
  return c.res({
    action:"/PickYourSign", 
    image: (
      <div
      style={{
        alignItems: 'center',
        background: 'linear-gradient(to right, #432889, #17101F)',
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',  
      }}
    >
      <div
        style={{
            color: 'white',
            fontSize: 70,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
        }}
      >
        Crypto Horoscope
      </div>
      </div>
    ),
    intents: [
      <Button>Get your crypto prediction</Button>,
    ],
  })
})

app.frame("/PickYourSign", (c) => {
  return c.res({
    action:"/prediction", 
    image: (
      <div
      style={{
        alignItems: 'center',
        background: 'linear-gradient(to right, #432889, #17101F)',
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',  
      }}
    >
      <div
        style={{
            color: 'white',
            fontSize: 70,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
        }}
      >
        Select your sign or click next 
      </div>
      </div>
    ),
    intents: [
      <Button value="aries">Aries</Button>,
      <Button value="leo">Leo</Button>,
      <Button value="libra">Libra</Button>,
      <Button action="/NextSigns">Next</Button>,
    ],
  })
})

app.frame("/NextSigns", (c) => {
  return c.res({
    action:"/prediction",
    image: (
      <div
      style={{
        alignItems: 'center',
        background: 'linear-gradient(to right, #432889, #17101F)',
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',  
      }}
    >
      <div
        style={{
            color: 'white',
            fontSize: 70,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
        }}
      >
        Select your sign or click next 
      </div>
      </div>
    ),
    intents: [
      <Button value="capricorn">Capricorn</Button>,
      <Button value="aquarius">Aquarius</Button>,
      <Button value="pisces">Pisces</Button>,
      <Button action="/LastSigns">Next</Button>,
    ],
  })
})

app.frame("/LastSigns", (c) => {
  return c.res({
    action:"/prediction",
    image: (
      <div
      style={{
        alignItems: 'center',
        background: 'linear-gradient(to right, #432889, #17101F)',
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',  
      }}
    >
      <div
        style={{
            color: 'white',
            fontSize: 70,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
        }}
      >
        Select your sign or click next 
      </div>
      </div>
    ),
    intents: [
      <Button value="taurus">Taurus</Button>,
      <Button value="gemini">Gemini</Button>,
      <Button value="cancer">Cancer</Button>,
      <Button action="/FinalSigns">Next</Button>,
    ],
  })
})

app.frame("/FinalSigns", (c) => {
  return c.res({
    action:"/prediction",
    image: (
      <div
      style={{
        alignItems: 'center',
        background: 'linear-gradient(to right, #432889, #17101F)',
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',  
      }}
    >
      <div
        style={{
            color: 'white',
            fontSize: 70,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
        }}
      >
        Select your sign or click "In the beginning" and try again 
      </div>
      </div>
    ),
    intents: [
      <Button value="scorpio">Scorpio</Button>,
      <Button value="sagittarius">Sagittarius</Button>,
      <Button value="virgo">Virgo</Button>,
      <Button action="/PickYourSign">In the beginning</Button>,
    ],
  })
})

app.frame("/prediction", (c) => {
  const { buttonValue, inputText, status } = c
  const zodiacSign = inputText || buttonValue
  let prediction = ''

  if (zodiacSign) {
    const lowerCaseSign = zodiacSign.toLowerCase()
    if (predictions.hasOwnProperty(lowerCaseSign)) {
      prediction = predictions[lowerCaseSign]
    } else {
      console.error(`No prediction found for zodiac sign: ${lowerCaseSign}`)
    }
  }

  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 40,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
              ? (zodiacSign ? `${prediction} \n\nIf you love your prediction, hit the like button and recast!` : '')
              : 'Welcome!'}
        </div>
      </div>
    ),
    intents: [
      <Button action="/PickYourSign">Back</Button>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
