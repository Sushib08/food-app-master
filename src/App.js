import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CreateContainer } from "./components/CreateContainer";
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./components/context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./components/context/reducer";
import { MenuContainer } from "./components/MenuContainer";
import { MaintenanceContainer } from "./components/MaintenanceContainer";

export const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/menu" element={<MenuContainer />} />
            <Route path="/aPropos" element={<MaintenanceContainer />} />
            <Route path="/service" element={<MaintenanceContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};
