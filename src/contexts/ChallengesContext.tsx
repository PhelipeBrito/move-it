import {createContext} from 'react';

export const ChallengesContext = createContext({});

export function challengesProvider() {
    const [level, setLevel] = useState();

    function levelUp() {
        setLevel(level + 1);
    }
}

    return (
        <ChallengesContext.Provider value={{leve, levelUp}}>

        </ChallengesContext.Provider>
    )