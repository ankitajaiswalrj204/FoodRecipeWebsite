import React from "react";

const Recipes=(props)=>{
    const {recipes,key}=props;
   
    return(
        <div className="row">
            {recipes.map(recipe =>(
                <div class="col-m-4 mx-auto my-2">
                    <div className="card   ">
                        <div class="card-body">
                            <img src={recipe.recipe.image} alt="not found" className="img-fluid" ></img>
                            <div class="wrap">
                                <h5 className="card-title ">{recipe.recipe.label}</h5>
                            </div>
                            <div className="recipe-link ">
                                <a href={recipe.recipe.url}>Get Recipe</a>
                            </div>
                        </div>
                    </div>
                </div>
                

            ))}
        </div>
    );

}
            
            

export default Recipes ;

                