import React, { useState, useEffect } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

function FinancialFlow() {
  // For demonstration, let's say we have a checking account balance
  const checkingBalance = 600; // Example value

  // Evaluate a condition based on the checkingBalance
  const conditionMet = checkingBalance > 500;

  // Define the nodes
  const nodes = [
    {
      id: "1",
      type: "input",
      position: { x: 50, y: 50 },
      data: { label: "Paycheck" },
      style: {
        background: "#E2F0CB",
        border: "1px solid #bbb",
        padding: 10,
        borderRadius: 5,
      },
    },
    {
      id: "2",
      position: { x: 250, y: 50 },
      data: { label: "Checking Account" },
      style: {
        background: "#FEF9C3",
        border: "1px solid #bbb",
        padding: 10,
        borderRadius: 5,
      },
    },
    {
      id: "3",
      position: { x: 450, y: 0 },
      data: { label: "Savings Account" },
      style: {
        background: "#A7F3D0",
        border: "1px solid #bbb",
        padding: 10,
        borderRadius: 5,
      },
    },
    {
      id: "4",
      position: { x: 450, y: 100 },
      data: { label: "Investments" },
      style: {
        background: "#BFDBFE",
        border: "1px solid #bbb",
        padding: 10,
        borderRadius: 5,
      },
    },
  ];

  // Define the edges, including conditional logic on one of them
  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      animated: true,
      label: "Direct Deposit",
      style: { stroke: "#333" },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "smoothstep",
      animated: true,
      // Change the label and style based on the condition
      label: conditionMet ? "If checking > 500 ✓" : "If checking > 500 ✗",
      style: { stroke: conditionMet ? "green" : "red" },
    },
    {
      id: "e2-4",
      source: "2",
      target: "4",
      type: "smoothstep",
      animated: true,
      label: "Investment Contribution",
      style: { stroke: "#333" },
    },
  ];

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default FinancialFlow;
