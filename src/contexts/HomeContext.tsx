import { createContext, ReactNode, useEffect, useState } from "react";

type HomePageContextProviderProps = {
  children: ReactNode;
}

export const HomePageContext = createContext({} as any);

export function HomePageContextProvider(props: HomePageContextProviderProps) {
    
    const [offsetNavigation, setOffsetNavigation] = useState<Number>(0);

    useEffect(() => {
        console.log('Render HomePageContext...')
        return () => {}
    }, [])

    
    return (
        <HomePageContext.Provider value={{
            offsetNavigation,
            setOffsetNavigation,
            }}
        >
            {props.children}
        </HomePageContext.Provider>
    );
}