import Layout from "./Layout";

const Home = () => {
    return (
        <Layout
            heroImage="/assets/hero.jpg"
            heroContent={
                <p className="d-flex align-items-center m-0">
                    Home page content lorem ipsum dolor sit amet, consectetur updated elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
            }
            buttonText="Contact"
            buttonLink="/contact"
        />)
};

export default Home;