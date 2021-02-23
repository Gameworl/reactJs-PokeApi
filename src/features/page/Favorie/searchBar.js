import React, {useState} from "react";


export const SearchBar = (props) => {
    const [search, setSearch] = useState("")


   const handleFilterTextChange = e => {
        setSearch(e.target.value)

    }

    const handleSearch = () => {
        props.recherche(search)
    }

    return(
        <form className="form-inline d-flex justify-content-center m-3">
            <div className="form-group mb-1">
                <input
                    type="text"
                    placeholder="Search..."
                    className={"form-control"}
                    onChange={handleFilterTextChange}
                />
            </div>
            <button type={"button"} className="btn btn-primary mb-1 bg-transparent" onClick={handleSearch}>Rechercher</button>

        </form>
    );
}
