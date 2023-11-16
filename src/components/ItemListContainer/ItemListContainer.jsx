import React, { useState } from "react";
import styles from "./ItemListContainer.module.css";
import button from "../Button/Button.jsx";
import Button from "../Button/Button.jsx";
const ItemList = (props) => {
  console.log(props);
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Frank",
      lastName: "Murphy",
      email: "frank.murphy@test.com",
      role: "User",
    },
    {
      id: 2,
      firstName: "Vic",
      lastName: "Reynolds",
      email: "vic.reynolds@test.com",
      role: "Admin",
    },
    {
      id: 3,
      firstName: "Gina",
      lastName: "Jabowski",
      email: "gina.jabowski@test.com",
      role: "Admin",
    },
    {
      id: 4,
      firstName: "Jessi",
      lastName: "Glaser",
      email: "jessi.glaser@test.com",
      role: "User",
    },
    {
      id: 5,
      firstName: "Jay",
      lastName: "Bilzerian",
      email: "jay.bilzerian@test.com",
      role: "User",
    },
    {
      id: 6,
      firstName: "Rock",
      lastName: "Zav",
      email: "rock.zav@test.com",
      role: "Creator",
    },
  ]);
  return (
    <div className={styles.cardsContainer}>
      {users &&
        users.map((user) => (
          <div key={user.id} className={styles.card}>
            <h2 className={styles.cardTitle}>
              {user.firstName} {user.lastName}
            </h2>
            <p className={styles.cardSubtitle}>{user.email}</p>
            <p className={styles.cardText}>{user.role}</p>
            <Button
              label={"Add To Cart"}
              color={"blue"}
              callback={() => console.log(`Adding product ${user.id}`)}
            />
          </div>
        ))}
    </div>
  );
};

export default ItemList;
