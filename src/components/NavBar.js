import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let navMap = links.map(link => {
    return <a key={link} href={"#" + link}>{link.toUpperCase()}</a>
  })
  return (
    <nav>
      {navMap}
    </nav>
  );
}

export default NavBar;
