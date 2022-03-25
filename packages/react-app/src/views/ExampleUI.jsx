import { GithubOutlined, SyncOutlined, TwitterOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch, Col, Row } from "antd";
import React, { useState } from "react";
import { Address, Balance } from "../components";
import { parseEther } from "@ethersproject/units";
import { utils, ethers } from "ethers";
import { parse } from "dotenv";

export default function ExampleUI({
  purpose,
  bonezEvents,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
  price2mint,
}) {

  return (
    <div>
      <div style={{ padding: 16, margin: "auto", marginTop: 64 }}>
          <Row>
            <Col span={4}>
              <img src="./imgs/1.png" alt="Bonez" style={{height: "auto", width: "100%", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering:"crisp-edges"}} />
            </Col>
            <Col span={4}>
              <img src="./imgs/2.png" alt="Bonez" style={{height: "auto", width: "100%", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering:"crisp-edges"}} />
            </Col>
            <Col span={4}>
              <img src="./imgs/3.png" alt="Bonez" style={{height: "auto", width: "100%", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering:"crisp-edges"}} />
            </Col>
            <Col span={4}>
              <img src="./imgs/4.png" alt="Bonez" style={{height: "auto", width: "100%", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering:"crisp-edges"}} />
            </Col>
            <Col span={4}>
              <img src="./imgs/36.png" alt="Bonez" style={{height: "auto", width: "100%", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering:"crisp-edges"}} />
            </Col>
            <Col span={4}>
              <img src="./imgs/630.png" alt="Bonez" style={{height: "auto", width: "100%", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering:"crisp-edges"}} />
            </Col>
          </Row>
        </div>
      <div style={{border: "2px solid orange", padding: 16, width: "35%", margin: "auto"}}>
        <div style={{ margin: 8}}>
          <Row>
          <Col span={24}>
          <h1 style={{color: "orange", fontSize: "350%"}}>💀BONEZ💀</h1>
          <h2 style={{color: "orange"}}>An actively decaying NFT PFP series built by @blind_nabler with scaffold-eth!</h2>
          <h3 style={{color: "orange"}}>When you mint an NFT, you are killing a man, and watching as he goes through the 5 stages of decay over the course of a week.</h3>
          <h3 style={{color: "orange"}}>Each token is unique and has various traits that are revealed once all 5 stages are complete!</h3>
          </Col>
          </Row>
              <div style={{ margin: 8 }}>
                <Button
                  style={{ marginTop: 8, color: "black", backgroundColor: "orange" }}
                  size={"80%"}
                  onClick={async () => {
                    let priceRightNow = await readContracts.Bonez.price();
                    tx(writeContracts.Bonez.claim({ value: priceRightNow }));
                  }}
                >
                  Go on, kill him |
                  Current Price: { price2mint && (+ethers.utils.formatEther(price2mint).substring(0,5)) } MATIC
                </Button>
              </div>
        </div>
      </div>
      <Divider />
      <div style={{border: "2px solid orange", padding: 16, width: "35%", margin: "auto"}}>
        <Row justify={"center"}>
          <Col span={21}>
            <h2 style={{color:"orange"}}>🦴Price determined by a bonding curve🦴</h2>
            <img src="./imgs/bonding.jpeg" alt="Bonding Curve Graph" style={{width: "100%"}} />
            <h3 style={{color:"orange"}}>Prices for minting cost 1 MATIC initially and increases by 5% each time someone mints a token. There are a total of 800 variations of BONEZ to mint but in reality there will be far less made. Enjoy!</h3>
            <Divider />
            <Row>
              <Col span={4} offset={1}>
            <a href="https://twitter.com/blind_nabler">Twitter</a>
              </Col>
              <Col span={4} offset={1}>
            <a href="https://github.com/mercuricchloride/Bonez/tree/aging-nft">Github</a>
              </Col>
              <Col span={4} offset={1}>
            <a href="https://opensea.io">Opensea</a>
              </Col>
              <Col span={4} offset={1}>
            <a href="https://polygonscan.com/address/0x03047fCbeBc7C8aCA4dDD6EEC3c7f06D22356402">Polygonscan</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
