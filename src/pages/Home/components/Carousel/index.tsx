import { useEffect, useState } from 'react';
import './index.css';

const phrases = [
    {
        people: "Obi Wan Kenobi",
        text: "Que a Força esteja com você"
    },
    {
        people: "Darth Vaider",
        text: "Quando o deixei, eu era só o aprendiz; agora eu sou o mestre."
    }   
]

export function Carousel() {
    
    let index = 0;
    const max_index = phrases.length;
    const [phrase , setPhrase] = useState(phrases[0])

    const updateIndex= () =>{

        index = index+1

        if(index >= max_index)
        {
            index = 0;
        }

        setPhrase(phrases[index])

        setTimeout(()=>{updateIndex()},3000)
    }


    useEffect(()=>{
        updateIndex()
    },[])

    return (
        <header className=" shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

                <p className="text-white italic text-center">"{phrase.text}"</p>
                <p className="text-white font-semibold text-center">{phrase.people}</p>
      
            </div>
        </header>
    
    )
}