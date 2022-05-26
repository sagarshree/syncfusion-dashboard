import React from "react";
import JSONDATA from "../data/MOCK_DATA.json";
import { useState } from "react";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <div className="flex flex-col justify-center items-center">
        <input
          style={{
            marginTop: "20px",
            width: "300px",
            height: "40px",
            fontSize: "20px",
            paddingLeft: "10px",
            background: "hsl(252,30%,95%)",
            borderRadius: "2rem",
            padding: "0.6rem 1rem",
            textDecoration: "none",
            border: "none",
          }}
          type="text"
          placeholder="Search here...."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((item, index) => (
          <div className="mt-3 text-base font-semibold" key={index}>
            <p>{item.first_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
