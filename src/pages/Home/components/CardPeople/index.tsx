import { useContext } from "react";
import { PeopleContext } from "../../../../contexts/PeopleoContext";

export function CardPeople(props:any) {
    
    const { setPeople } = useContext(PeopleContext)
    const { setOpenModalPeople} = useContext(PeopleContext)

    const showPeopleOnModal = () => {
        setPeople(props.people)
        setOpenModalPeople(true)
    }

    return (
        <a role="button" onClick={showPeopleOnModal} >
            <div className="hover:bg-yellow-400  bg-gray-100 bg-opacity-60 shadow-md overflow-hidden flex flex-wrap items-center justify-center card-list m-1">
                <div className="vacation-card">
                    <div className="vacation-card-info">
                        <div className="vacation-card-eyebrow">
                            <p className="text-sm">{props.people.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        
    );
}