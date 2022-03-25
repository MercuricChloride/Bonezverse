import { Button, Divider, Col, Row, Space, Typography } from "antd";
import React from "react";
import { ethers } from "ethers";

const { Title, Paragraph } = Typography;

export default function Landing({
  tx,
  readContracts,
  writeContracts,
  price2mint,
}) {

  return (
    <Space direction="vertical" size="large">
      <Row justify="center">
        <Col xl={20} sm={24}>
          <Space size="small" wrap style={{ justifyContent: 'center' }}>
            <img src="./imgs/1.png" alt="Bonez" style={{ width: "15vh", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering: "crisp-edges" }} />
            <img src="./imgs/2.png" alt="Bonez" style={{ width: "15vh", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering: "crisp-edges" }} />
            <img src="./imgs/3.png" alt="Bonez" style={{ width: "15vh", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering: "crisp-edges" }} />
            <img src="./imgs/4.png" alt="Bonez" style={{ width: "15vh", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering: "crisp-edges" }} />
            <img src="./imgs/36.png" alt="Bonez" style={{ width: "15vh", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering: "crisp-edges" }} />
            <img src="./imgs/630.png" alt="Bonez" style={{ width: "15vh", imageRendering: "pixelated", imageRendering: "-moz-crisp-edges", imageRendering: "crisp-edges" }} />
          </Space>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={12} xs={24}>
          <Title>💀BONEZ💀</Title>
          <Title level={3}>An actively decaying NFT PFP series built by @blind_nabler with scaffold-eth!</Title>
          <Title level={3}>When you mint an NFT, you are killing a man, and watching as he goes through the 5 stages of decay over the course of a week.</Title>
          <Title level={3}>Each token is unique and has various traits that are revealed once all 5 stages are complete!</Title>
          <Button
            style={{ marginTop: 8, color: "black", backgroundColor: "orange" }}
            size={"80%"}
            onClick={async () => {
              let priceRightNow = await readContracts.Bonez.price();
              tx(writeContracts.Bonez.claim({ value: priceRightNow }));
            }}
          >
            Go on, kill him |
            Current Price: {price2mint && (+ethers.utils.formatEther(price2mint).substring(0, 5))} MATIC
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row justify={"center"}>
        <Col xl={12} xs={24}>
          <Title level={2}>🦴Price determined by a bonding curve🦴</Title>
          <img src="./imgs/bonding.jpeg" alt="Bonding Curve Graph" style={{ width: '70%' }} />
          <Title level={3}>Prices for minting cost 1 MATIC initially and increases by 5% each time someone mints a token. There are a total of 800 variations of BONEZ to mint but in reality there will be far less made. Enjoy!</Title>
        </Col>
      </Row>
      <Divider />
      <Space size="large">
        <a href="https://twitter.com/blind_nabler">Twitter</a>
        <a href="https://github.com/mercuricchloride/Bonez/tree/aging-nft">Github</a>
        <a href="https://opensea.io">Opensea</a>
        <a href="https://polygonscan.com/address/0x03047fCbeBc7C8aCA4dDD6EEC3c7f06D22356402">Polygonscan</a>
      </Space>
    </Space>
  );
}
