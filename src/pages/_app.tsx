import '../styles/global.css'

import { ChallengesContext } from'../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    
      <Component {...pageProps} />
    </ChallengesContext.Provider>
)}

export default MyApp
