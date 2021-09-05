import './index.css'
import { Carousel } from './components/Carousel'
import { Nav } from '../components/Nav'
import ModalPeople from './components/ModalPeople'
import { CardPeople } from './components/CardPeople'
import { useContext, useEffect, useState } from 'react'
import Swapi from '../../services/api'
import Navigation from './components/Navigation'
import { HomePageContext } from '../../contexts/HomeContext'


export function Home() {

    const [peoples , setPeoples] = useState([]);

    const { offsetNavigation } = useContext(HomePageContext)

    useEffect(()=>{
        
        Swapi.listPeoples(10 , offsetNavigation)
            .then((response:any) => {
                setPeoples(response.data);
            })

    },[offsetNavigation])

    return (
            <>
                <Nav/>
                
                <Carousel/>

                <ModalPeople />

                <main>
                    <div className="mx-auto lg:mx-4 py-6 sm:px-6 lg:px-8 ">
                        <div className="px-4 py-6 sm:px-0">
                            <Navigation />
                            <div className="rounded-lg flex flex-wrap items-center justify-center" >
                                {
                                    peoples.map((people:any) => (
                                        <CardPeople people={people}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </main>

            </>
    )
}