"use client";
import {HeroUIProvider, Button} from "@heroui/react";
import Emoji from "../components/Emoji";
import { useState } from "react";


export default function App() {


  const handleClick = () => {
    
  };
 
  return (
    <HeroUIProvider>
     <Emoji />
    </HeroUIProvider>
  );
}