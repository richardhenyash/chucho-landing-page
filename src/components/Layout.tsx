import Hero from "./Hero";
import CenteredNavbar from "./CenteredNavBar";

type LayoutProps = {
    heroImage?: string; // hero image flename;
    heroContent?: React.ReactNode; // content to overlay on top of hero image
    buttonText?: string;
    buttonLink?: string;
    children?: React.ReactNode
};

const Layout: React.FC<LayoutProps> = ({ heroImage, heroContent, buttonText, buttonLink, children }) => {
    return (
        <>
            <CenteredNavbar />
            <Hero image={heroImage} content={heroContent} buttonText={buttonText} buttonLink={buttonLink} />
            {children && <main>{children}</main>}
        </>
    );
};

export default Layout;