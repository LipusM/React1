const c = console.log.bind(document);

import { Link, NavLink } from "react-router-dom";

import centers from "../../data/centers";

import { getAllCenters } from "../../data/centers";
const centerDetails = getAllCenters();

import "./style.scss";

const CenterPage = () => {
  return (
    <>
      <ul>
        {
        centers.map( center => 
        <li key={center.id}>
        <NavLink to={`/pobocky/${center.id}`}> {center.name}, {center.address} </NavLink>
        </li> 
        )}
      </ul>
    </>
  );
};

export default CenterPage;
