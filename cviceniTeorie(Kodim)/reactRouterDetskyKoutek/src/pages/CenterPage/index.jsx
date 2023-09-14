const c = console.log.bind(document);

import { Link, Outlet } from "react-router-dom";

import centers from "../../data/centers";

import { getAllCenters } from "../../data/centers";
const centerDetails = getAllCenters();

import CenterDetail from "../CenterDetail";

import "./style.scss";

const CenterPage = () => {
  return (
    <>
      <ul>
        {
        centerDetails.map( center => 
        <li key={center.id}>
        <Link to={`/pobocky/${center.id}`}> {center.name}, {center.address} </Link>
        </li> 
        )}
      </ul>
    </>
  );
};

export default CenterPage;
