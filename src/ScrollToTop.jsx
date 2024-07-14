import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(location.pathname, { replace: true });
    window.scrollTo(0, 0);
  }, [location.pathname, navigate]);

  return null;
}

export default ScrollToTop;