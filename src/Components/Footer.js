import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "88vh",
    width: "100%",
  };
  return (
    <div className="row">
      <div className="col-sm-12">
        <footer className="bg-dark text-light py-4" style={footerStyle}>
          <p className="text-center">Copyright &copy; MyTodosList.com</p>
        </footer>
      </div>
    </div>
  );
};
