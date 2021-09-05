import { ChevronRightIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { HomePageContext } from "../../../../../contexts/HomeContext";

export function NextPage() {

    const { offsetNavigation, setOffsetNavigation } = useContext(HomePageContext)

    const updateOffset = () => {
        let offset = offsetNavigation + 1;
                
        setOffsetNavigation(offset)
    }

    return (
        <a
            onClick={updateOffset}
            className="hover:bg-gray-300  bg-gray-100 bg-opacity-60 relative inline-flex items-center px-2 py-2 rounded-r-md  bg-white text-sm font-medium text-white hover:bg-gray-50"
        >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </a>
    )
}