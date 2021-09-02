import './index.css'
import { Carousel } from './components/Carousel'
import { Nav } from '../components/Nav'
import ModalPeople from './components/ModalPeople'
import { CardPeople } from './components/CardPeople'
import { useEffect, useState } from 'react'
import Swapi from '../../services/api'


export function Home() {

    const [peoples , setPeoples] = useState([]);

    useEffect(()=>{
        Swapi.listPeoples()
            .then((response:any) => {
                setPeoples(response.data);
            })
    },[])

    return (
        <div>
            <Nav/>
            
            <Carousel/>

            <ModalPeople />

            <main>
                <div className="mx-auto lg:mx-4 py-6 sm:px-6 lg:px-8 ">
                    <div className="px-4 py-6 sm:px-0">
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

        </div>
    )
}