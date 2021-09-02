import { createContext, ReactNode, useEffect, useState } from "react";

type People = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
}


type PeopleContextProviderProps = {
  children: ReactNode;
}

export const PeopleContext = createContext({} as any);

export function PeopleContextProvider(props: PeopleContextProviderProps) {
    
    const [people, setPeople] = useState<any>({});
    const [openModalPeople, setOpenModalPeople] = useState(false)

    useEffect(() => {
        console.log('Render PeopleContext...')
        return () => {}
    }, [])

    
    return (
        <PeopleContext.Provider value={{
                people,
                setPeople,
                openModalPeople,
                setOpenModalPeople
            }}
        >

            {props.children}
        </PeopleContext.Provider>
    );
}