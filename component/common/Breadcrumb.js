import React from 'react';

const Breadcrumb = ({ main, page, link, background }) => {
  return (
    <div className="breadcrumb-wrapper" style={{ backgroundImage: `url(${background})` }}>
      <div className="breadcrumb-overlay">
        <h2 className="breadcrumb-title">{page}</h2>
        <p className="breadcrumb-path">
          <a href={link}>{main}</a> / {page}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
