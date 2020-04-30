// Component takes 3 destructured args
//  A1) is link active or not
//  A2) link's children
//  A3) dispatch function "boundSetVisibilityFilter"
// checks to see if current link is active, if Y returns h3/coloredtext & render children in middle
// any other case (inactive) returns link which renders children, blank "" href, onClick -> calls boundSetVisibilityFilter

const Link = ({ active, children, boundSetVisibilityFilter }) => {
  if (active) {
    return <h3 style={{ color: "green" }}>{children}</h3>;
  } else {
    return (
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          boundSetVisibilityFilter();
        }}
      >
        {children}
      </a>
    );
  }
};

export default Link;
