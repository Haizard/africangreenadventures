import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const defaultMeta = {
  title: "African Green Adventures — Tanzania Safaris & Adventures",
  description: "Premium Tanzanian safaris, Kilimanjaro trekking, and Zanzibar beaches. Licensed tour operator.",
};

const routeMeta = {
  "/": { title: "African Green Adventures — Tanzania Safaris & Adventures", description: defaultMeta.description },
  "/about": { title: "About Us | African Green Adventures", description: "Meet African Green Adventures, a Tanzanian safari and trekking operator." },
  "/packages": { title: "Tour Packages | African Green Adventures", description: "Browse curated Tanzanian safari, trekking, and beach packages." },
  "/blogs": { title: "Travel Blog | African Green Adventures", description: "Expert travel guides, safari tips, and Tanzania destination insights." },
  "/best-places": { title: "Best Places | African Green Adventures", description: "Discover Tanzania's top destinations: Serengeti, Ngorongoro, Kilimanjaro, Zanzibar." },
  "/tailor-made": { title: "Tailor-Made Tours | African Green Adventures", description: "Design your own custom Tanzanian adventure." },
  "/faq": { title: "FAQ | African Green Adventures", description: "Answers to common questions about Tanzanian safaris." },
  "/privacy": { title: "Privacy Policy | African Green Adventures", description: "How we handle your personal data." },
  "/terms": { title: "Terms & Conditions | African Green Adventures", description: "Booking terms for African Green Adventures." },
  "/cancellation-policy": { title: "Cancellation Policy | African Green Adventures", description: "Cancellation and refund policy." },
};

const PageMeta = ({ title, description }) => {
  const location = useLocation();
  const meta = title && description
    ? { title, description }
    : routeMeta[location.pathname] || defaultMeta;

  useEffect(() => {
    document.title = meta.title;
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
    }
    el.setAttribute("content", meta.description);
  }, [meta.title, meta.description]);

  return null;
};

PageMeta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageMeta;
