import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { GrSquare } from "react-icons/gr";
import Search from "../components/Search";
import Category from "../components/Category";


const Cuisines = () => {
  const [cuisines, setCuisines] = useState([]);
  const params = useParams();

  const getCuisines = async (name) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&tags=vegetarian&cuisine=${name}`
    );
    const data = await resp.json();

    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getCuisines(params.type).then((data) => {
      if (isMounted) setCuisines(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.type]);

  return (
    <div className="mt-24">
    <Search/>
    <Category/>

    <h3 style={{ textAlign: 'center', padding: '1rem', fontSize: '40px', fontWeight: 'bold', fontFamily: 'ui-serif' }}>Trending Recipe</h3>
      
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-20"
    >
        {cuisines.map(({ id, title, image ,readyInMinutes,vegetarian }) => (
        <Card key={id}>
          <Link to={`/recipe/${id}`}>
          <h3>{title}</h3>
            <img src={image} alt={title} />
            <h4>
            <div class="flex flex-row gap-4">
                <IoMdTime size={24}/> {readyInMinutes}{" "}</div>
                <span>
                  <GrSquare
                    style={{
                      backgroundColor: vegetarian ? "darkgreen" : "darkred",
                      marginLeft: "10px",
                    }}
                  />
                </span>
                </h4>
            
          </Link>
        </Card>
      ))}
    </Grid>
    </div>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  gap: 3rem;
`;

const Card = styled.div`
  img {
    width: min(400px, 100%);
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

export default Cuisines;