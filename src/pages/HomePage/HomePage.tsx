import Header from "../../components/Header/Header";
import "./HomePage.scss";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page page">
      <Header></Header>

      <h1>Home Page!</h1>
      <p>Bienvenidos a la web de gestión del colegio Molón</p>
    </div>
  );
};

export default HomePage;
