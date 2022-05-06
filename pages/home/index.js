import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import "./home.css";
const Home = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(0);

  // transform x change when click arrow

  const handleClick = (next, prev) => {
    // when click one go to index 1

    if (next === 'one') {
      setOpen(1);
    }

    if (next === 'to') {
      setOpen(2);
    }

    if (next === 'three') {
      setOpen(3);
    }

    console.log(next);
    console.log(open);
    console.log('button is clicked');
  };
  return (
    <div className="container">
        {open}
      <h2 onClick={ ()=>{  handleClick('one')}}>one</h2>
      <h2 onClick={ ()=>{  handleClick('to')}}>two </h2>
      <h2 onClick={ ()=>{  handleClick('three')}}>three</h2>

      <div className="over-flow-container w-[200px]  bg-black overflow-auto">
        {/* group 1 */}

        <div className="group1" index="1">
          11111  
        </div>

        {/* group 2 */}

        <div className="group2" index="2">
          222222
        </div>

        {/* group3 */}

        <div className="group3" index="3"></div>
      </div>
    </div>
  );
};

export default Home;
