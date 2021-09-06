import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PeopleContext } from '../../../../contexts/PeopleoContext'
import Swapi from '../../../../services/api'

export default function ModalPeople() {
    
    const {openModalPeople, setOpenModalPeople} = useContext(PeopleContext)
  
    const { people } = useContext(PeopleContext)
    const [people_modal , setPeopleOfModal] = useState(people);

    const getPeople = (people_id:number) => {
        Swapi.getPeople(people_id)
            .then((response:any) => {

                const people_aux = response.data;

                let frase = `Olá! Meu nome é ${people_aux.name}. ${getSpecies(people_aux.species)}, peso ${people_aux.mass} Kg, nasci em ${people_aux.homeworld.name} no ano ${people_aux.birth_year} e ${getStarships(people_aux.starships)}.`;

                people_aux.phrase = frase;

                setPeopleOfModal(people_aux)
            })
    }

    const getSpecies = (species:Array<any>) => {

        if (species.length === 0) {
            return "Sou um humano"
        }

        let string = `Sou um `;
        let first_starship = ""

        species.map((specie:any)=>{
            string += ` ${first_starship} ${specie.name}`
            first_starship = " e"
        })

        return string

    }


    const getStarships = (starships:Array<any>) => {
        
        if (starships.length === 0) {
            return "nunca pilotei espaçonaves"
        }

        let string = `já pilotei `;
        let first_starship = ""

        starships.map((starship:any)=>{
            string += ` ${first_starship} ${starship.name}`
            first_starship = " e"
        })

        return string

    }

    useEffect(()=>{
        
        if(!people.hasOwnProperty('id')) {
            return
        }
        
        getPeople(people.id)

    } , [people])

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={openModalPeople} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpenModalPeople}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3"  data-cy-people-name={people.phrase || ""} className="text-lg leading-6 font-medium text-gray-900 text-center">
                                    {people.name || ''}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p data-cy-people-phrase="true" className="text-white italic text-center mt-4 text-gray-500">{people_modal.phrase || ""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>  

                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                            data-cy-close-modal={true}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setOpenModalPeople(false)}
                            >
                            Fechar
                            </button>
                        </div>
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

