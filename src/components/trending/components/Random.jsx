import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { GrSquare } from "react-icons/gr";

const Random = () => {
  const [random, setRandom] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const getRandomRecipes = async (number) => {
    const getData = localStorage.getItem("popular");

    if (getData) {
      setRandom(JSON.parse(getData));
    } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=${35}`
      );
      const data = await resp.json();
      setRandom(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  const handleShowAllClick = () => {
    setShowAll(true);
  };

  return (
    <Container className="p-6">
      <HeadingContainer>
        <h3>Trending Recipe</h3>
      </HeadingContainer>

      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {random.map(({ title, id, image, readyInMinutes, vegetarian }) => (
          <Card key={id}>
            <Link to={`/recipe/${id}`}>
              <h3>{title}</h3>
              <img src={image} alt={title} />
              <h4>
              <div class="flex flex-row gap-4">
                <IoMdTime size={24}/> {readyInMinutes}{" "}</div>
                <span>
                  <GrSquare
                    style={{ backgroundColor: vegetarian ? "darkgreen" : "darkred", marginLeft: "15px" }}
                  />
                </span>
              </h4>
            </Link>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px; /* Adjust the padding as needed */
`;

const HeadingContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: xxx-large;
    font-weight: bolder;
    font-family: 'Sofia';
 /* Add margin as needed */
`;

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

const ShowAllButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

export default Random;
