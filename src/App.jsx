import React from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";


export const App = () => {
  return (
    <div className="bg-gradient-to-t from-blue-900 to-white w-full h-[100vh] -z-20 absolute inset-0">
      <Header></Header>

    </div>
  )
}