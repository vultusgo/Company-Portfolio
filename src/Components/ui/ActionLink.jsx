import { Link } from "react-router-dom";

const isExternal = (target) => /^https?:\/\//i.test(target);

/**
 * One link component for every CTA.
 *  - Internal path  -> React Router <Link> (no full reload)
 *  - http(s) URL    -> <a target="_blank" rel="noopener noreferrer">
 * Pass either `to` or `href`; the type is detected automatically.
 */
const ActionLink = ({ to, href, children, ...props }) => {
  const target = to ?? href;

  if (isExternal(target)) {
    return (
      <a href={target} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link to={target} {...props}>
      {children}
    </Link>
  );
};

export default ActionLink;
