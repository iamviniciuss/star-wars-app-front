import { NextPage } from './NextPage'
import { PreviousPage } from './PreviousPage'

export default function Navigation(props:any) {

    return (
        <div className="px-4 py-3 flex items-center justify-center sm:px-6">

            <div className="flex-1 flex justify-between sm:hidden">
                <PreviousPage />
                <NextPage />
            </div>


            <div className="hidden sm:flex-1 sm:flex sm:items-center justify-end">
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <PreviousPage />
                        <NextPage />
                    </nav>
                </div>
            </div>

        </div>
    )
}