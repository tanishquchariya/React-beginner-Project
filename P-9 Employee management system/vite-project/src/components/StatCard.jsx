// StatCard.jsx
import React from "react";

const StatCard = ({title,value,icon}) => {
    const Icon = icon;
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Icon size={24} />
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

export default StatCard;
