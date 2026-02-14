import { useEffect } from 'react'
import { setHeroImageLoaded } from '../store/uiSlice';
import { useAppDispatch } from '../store/hooks';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { Button, Col, Container, Row} from 'reactstrap';
import { Link } from 'react-router-dom';

type HeroProps = {
    image?: string // optional background image
    lighten?: number; // 0 to 1
    content?: React.ReactNode;
    buttonText?: string;
    buttonLink?: string;
};

const Hero: React.FC<HeroProps> = ({ image, lighten = 0.25, content, buttonText, buttonLink}) => {
    const dispatch = useAppDispatch();
    const loaded = useSelector((state: RootState) => state.ui.heroImageLoaded);
    const alpha = Math.min(Math.max(lighten, 0), 1);
    const bgStyle: React.CSSProperties = {
        backgroundImage: `linear-gradient(rgba(255,255,255,${alpha}), rgba(255,255,255,${alpha})), url(${image})`,
    };

    useEffect(() => {
        if (!image || loaded) return;
        const img = new Image();
        img.src = image;
        img.onload = () => dispatch(setHeroImageLoaded(true));
    }, [image, loaded, dispatch])

    return (
        <section
            className={`hero ${loaded ? "visible" : ""}`}
            style={bgStyle}>
            {content && (
                <Container className="bio-box pb-2 pb-sm-0">
                    <Row className="align-items-center g-3 p-2">
                        <Col xs={12} sm className="order-first order-sm-last">
                            <div className="d-flex flex-grow-1 align-items-center m-0">{content}</div>
                        </Col>
                        <Col xs={12} sm="auto" className="order-last order-sm-first">
                        {buttonText && buttonLink &&
                            <Button color="secondary-semi-transparent" size="md" tag={Link} to={buttonLink}>{buttonText}</Button>
                        }
                        </Col>
                    </Row>
                </Container>
             )}
        </section>
    );
};

export default Hero;