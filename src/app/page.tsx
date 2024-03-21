"use client";
import Suggested from "./components/Suggested";
import SearchBar from "./components/SearchBar";
import Recommended from "./components/Recommended";
import Modal from "./components/Modal";
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
