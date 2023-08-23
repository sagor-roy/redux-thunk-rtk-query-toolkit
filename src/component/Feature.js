import { useDispatch } from "react-redux"
import { books } from "../features/books/booksSlice";
import { useState } from "react";

function Feature() {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    const selecteTag = (status) => {
        dispatch(books(status))
        setActive(status)
    }

    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
                <button onClick={() => selecteTag(false)} className={`filter-btn ${!active ? 'active-filter' : ''}`} id="lws-filterAll">All</button>
                <button onClick={() => selecteTag(true)} className={`filter-btn ${active ? 'active-filter' : ''}`} id="lws-filterFeatured">Featured</button>
            </div>
        </div>
    )
}

export default Feature