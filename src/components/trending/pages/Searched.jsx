import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdTime } from "react-icons/io";
import { GrSquare } from "react-icons/gr";


const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const parmas = useParams();

  const getSearchedRecipes = async (search) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&query=${search}`
    );
    const data = await resp.json();

    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getSearchedRecipes(parmas.search).then((data) => {
      if (isMounted) setSearchedRecipes(data);
    });

    return () => {
      isMounted = false;
    };
  }, [parmas.search]);
  return (
    <Grid className="mt-28">
    
      {searchedRecipes.map(({ title, id, image,readyInMinutes,vegetarian }) => (
        <Card key={id}>
          <Link to={`/recipe/${id}`}>
          <h3>{title}</h3>
            <img src={image} alt={title} />
            <h4>
            <IoMdTime size={24}/> {readyInMinutes}{" "}
                <span>
                  <GrSquare
                    style={{
                      backgroundColor: vegetarian ? "darkred" : "darkgreen",
                      marginLeft: "15px",
                    }}
                  />
                </span>
                </h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  gap: 3rem;
`;

const Card = styled.div`
  img {
    width: min(500px, 100%);
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h3{
    text-align: center;
    padding: 1rem;
    font-size: large;
    font-weight: bolder;
    font-family: 'ui-serif';
  }
  h4 {
    text-align: center;
    padding: 1rem;
    font-size: large;
    font-weight: bolder;
    font-family: 'ui-serif';
    display: flex;
    justify-content: space-between;

  }
`;

export default Searched;