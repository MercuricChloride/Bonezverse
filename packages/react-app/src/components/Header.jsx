import { PageHeader } from "antd";
import { BackgroundColor, white } from "chalk";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/scaffold-eth" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🧟💀 Bonez"
        subTitle="Immutable Randomized Decaying Corpses!"
        style={{ cursor: "pointer", backgroundColor: "black" }}
      />
    </a>
  );
}
