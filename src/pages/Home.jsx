import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink to="./work">Go to Work Page</NavLink>
      <h1>HI</h1>
    </div>
  );
};

export default Home;