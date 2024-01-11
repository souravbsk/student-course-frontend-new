import React from 'react';

const HeadingWithPera = ({sub,title,pera,color}) => {
    return (
        <div>
           <p className="text-[#FB7818] mb-3 text-2xl font-medium">{sub}</p>
          <h3 className={`text-3xl md:text-4xl mb-3 ${color ? color : "text-[#471850]"}  font-bold`}>
            {title}
          </h3>
          <p>
            {pera}
          </p>
        </div>
    );
};

export default HeadingWithPera;