const c = console.log.bind(document);

import { Link } from "react-router-dom";

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
        <Link to={`/pobocky/${center.id}`}> {center.name}, {center.address} </Link>
        </li> 
        )}
      </ul>
    </>
  );
};

export default CenterPage;
