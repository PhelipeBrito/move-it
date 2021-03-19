import { CompletedChallenges } from "../../components/CompletedChallenges";
import { Countdown } from "../../components/Countdown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import { ChallengesProvider } from'../../contexts/ChallengesContext'
import { ChallengeBox } from "../../components/ChallengeBox";
import { CountdownProvider } from "../../contexts/CountdownContext";
import { GetServerSideProps } from 'next';

import styles from "../../styles/pages/Home.module.css";
import Head from 'next/head';


interface User{
  name: string;
  login: string;
}

interface HomeProps{
    level: number; 
    currentExperience: number;
    challengesCompleted: number;
    user: User;
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
                  <Profile 
                    userName={props.user.name}
                    userLogin={props.user.login}
                  />
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
    const { id } = context.params

    const user = await fetch(`https://api.github.com/users/${id}`)
    .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
            return respostaDoServer.json();

        }

        throw new Error('falha em pegar dados')
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
        console.log(err);
    })

    console.log(id);

    return {
      props: {
            user,
            level: Number(level), 
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
    },
    }
  }

