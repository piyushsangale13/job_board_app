"use client";
import Suggested from "./Suggested";
import SearchBar from "./SearchBar";
import Recommended from "./Recommended";
import Modal from "./Modal";
import React from "react";
import { useState } from "react";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" pt-10 w-2/3 m-auto">
        <SearchBar/>
        <Suggested/>
        <Recommended />
    </div>
  );
}
