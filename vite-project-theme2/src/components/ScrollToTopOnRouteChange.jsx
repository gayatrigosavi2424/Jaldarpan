import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToTopOnRouteChange = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top of the page whenever the location changes
        window.scrollTo(0, 0);
    }, [location]);

    return null; // This component doesn't render anything visible
};

export default ScrollToTopOnRouteChange;
