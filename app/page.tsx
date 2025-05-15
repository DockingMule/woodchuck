"use client";
import { useState, Suspense, lazy } from "react";
import styles from "./page.module.css";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import WoodPerHourAverager from "./components/WoodPerHourAverager";
import RemoveByIdForm from "./components/RemoveByIdForm";
import AddWoodChuckButton from "./components/AddWoodChuckButton";
// import WoodChuckDataGrid from "./components/DataGrid";
const WoodChuckDataGrid = lazy(() => import("./components/DataGrid"));

const woodChucks = [
  {
    id: 1,
    firstName: "Punxsutawney Phil",
    lastName: "Seer of Seers",
    age: 139,
    woodPerHour: 12,
    location: "Gobbler's Knob",
  },
  {
    id: 2,
    firstName: "Chucky",
    lastName: "Woodson",
    age: 4,
    woodPerHour: 10,
    location: "Maple Hollow",
  },
  {
    id: 3,
    firstName: "Hazel",
    lastName: "Burrower",
    age: 3,
    woodPerHour: 9,
    location: "Oak Ridge",
  },
  {
    id: 4,
    firstName: "Woody",
    lastName: "McChuck",
    age: 5,
    woodPerHour: 11,
    location: "Pine Grove",
  },
  {
    id: 5,
    firstName: "Gracie",
    lastName: "Grounder",
    age: 6,
    woodPerHour: 8,
    location: "Elm Valley",
  },
  {
    id: 6,
    firstName: "Buck",
    lastName: "Stumper",
    age: 2,
    woodPerHour: 7,
    location: "Cedar Creek",
  },
  {
    id: 7,
    firstName: "Mabel",
    lastName: "Tunnel",
    age: 4,
    woodPerHour: 10,
    location: "Willow Bend",
  },
  {
    id: 8,
    firstName: "Chuck",
    lastName: "Beaverly",
    age: 3,
    woodPerHour: 9,
    location: "Birch Woods",
  },
  {
    id: 9,
    firstName: "Gus",
    lastName: "Gnawer",
    age: 5,
    woodPerHour: 10,
    location: "Spruce Hill",
  },
  {
    id: 10,
    firstName: "Daisy",
    lastName: "Digger",
    age: 2,
    woodPerHour: 6,
    location: "Aspen Glade",
  },
];

export default function Home() {
  const [canChuck, setCanChuck] = useState(true);
  const [data, setData] = useState(woodChucks);

  const removeWoodChuck = (id: number) => {
    const newData = data.filter((woodChuck) => woodChuck.id !== id);
    setData(newData);
  };

  const AddWoodChuck = (newWoodChuck: any) => {
    setData((prevData) => [...prevData, newWoodChuck]);
  };

  const toggle = () => {
    setCanChuck(!canChuck);
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>How much wood could a woodchuck chuck?</p>
        <div className={styles.details}>
          <FormControlLabel
            control={<Switch checked={canChuck} onChange={toggle} />}
            label="Can they chuck?"
          />
          <WoodPerHourAverager data={data} canChuck={canChuck} />
        </div>
        <div className={styles.details}>
          <RemoveByIdForm onRemove={removeWoodChuck} />
          <AddWoodChuckButton onAdd={AddWoodChuck}/>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <WoodChuckDataGrid data={data} canChuck={canChuck} />
        </Suspense>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
