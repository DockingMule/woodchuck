'use client';
import { useState } from 'react';
import styles from "./page.module.css";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import WoodChuckDataGrid from "./components/DataGrid"

export default function Home() {
    // Declare a state variable 'isToggled' with an initial value of false
    const [canChuck, setCanChuck] = useState(true);

    // Function to toggle the boolean value
    const toggle = () => {
      setCanChuck(!canChuck);
    };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>How much wood could a woodchuck chuck?</p>
        <FormControlLabel
        control={<Switch
          checked={canChuck}
          onChange={toggle}
        />}
        label="Can they chuck?"
        />
        <WoodChuckDataGrid 
          canChuck={canChuck}
        />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
