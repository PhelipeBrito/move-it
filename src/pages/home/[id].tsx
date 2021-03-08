import { CompletedChallenges } from "../../components/CompletedChallenges";
import { Countdown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import { ChallengesProvider } from'../../contexts/ChallengesContext'
import { ChallengeBox } from "../../components/ChallengeBox";
import { CountdownProvider } from "../../contexts/CountdownContext";
import { GetServerSideProps } from 'next';

import styles from "../../styles/pages/Home.module.css"
import Head from 'next/head'

interface HomeProps{
    level: number; 
    currentExperience: number;
    challengesCompleted: number;
  }

export default function Home(props) {
    return(
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
    
        >
          <div className={styles.container}>
            <Head>
              <title>Início | Move.It</title>
            </Head>
    
            <ExperienceBar />
    
            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                  
                <div>
                <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </div>
        </ChallengesProvider>
      )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const{level, currentExperience, challengesCompleted} = context.req.cookies;

    const user = await fetch(`https://api.github.com/users/defunkt`)
    .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
            console.log(respostaDoServer);
            return respostaDoServer.json();

        }

        throw new Error('falha em pegar dados')
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
        console.log(err);
    })

    //console.log(user);

    return {
      props: {user,
            level: Number(level), 
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
    },
    }
  }

