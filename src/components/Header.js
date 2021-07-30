import React from "react";

const Header=(props)=>{
    const {search,onInputChange,onSearchClick}=props;
    return (
        <>   
            
            <div className="jumbotron">
                <h1 className="display-1 title"><span className="material-icons">
                fastfood</span>Food Recipes</h1>

                <div className="input-group w-50 mx-auto">
                    <input type="text" className="form-control" placeholder="Search Your Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" value={search} onChange={onInputChange}/>
                    <button className="btn btn-dark " onClick={onSearchClick}>Search Recipe</button>
                </div>
            </div>
           

    
        </>
    );
}
export default Header;