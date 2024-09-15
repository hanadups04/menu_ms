import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import MainDish from "./Main_Dish/MainDish";
import SideDish from "./Side_Dish/SideDish";
import Desserts from "./Desserts/Desserts";
import Drinks from "./Drinks/Drinks";
import AddMenu from "./Add_Menu/AddMenu";
import "./App.css";

function App() {
  return (
    <>
      <div class="body bg-custom vh-100">
        <Router>
          <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                MENU MANAGEMENT SYSTEM
              </a>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <Link to="/" class="nav-link active">
                      HOME
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/mainDish" class="nav-link active">
                      MAIN DISH
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/sideDish" class="nav-link active">
                      SIDE DISH
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/desserts" class="nav-link active">
                      DESSERTS
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/drinks" class="nav-link active">
                      DRINKS
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/addMenu" class="nav-link active">
                      ADD MENU
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mainDish" element={<MainDish />} />
            <Route path="/sideDish" element={<SideDish />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/addMenu" element={<AddMenu />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
