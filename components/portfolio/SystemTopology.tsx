"use client";

import { useState } from "react";
import type { SystemNode } from "@/data/portfolio";

const connections = ["interface", "services", "data", "delivery"] as const;

export function SystemTopology({ nodes }: { nodes: SystemNode[] }) {
  const defaultNode = nodes.find((node) => node.id === "product") ?? nodes[0];
  const [selectedId, setSelectedId] = useState<SystemNode["id"]>(
    defaultNode?.id ?? "product",
  );
  const selectedNode =
    nodes.find((node) => node.id === selectedId) ?? defaultNode;

  if (!selectedNode) return null;

  return (
    <div className="system-topology">
      <div
        className="topology-map"
        role="group"
        aria-label="Product system topology"
      >
        <div className="topology-connections" aria-hidden="true">
          {connections.map((connection) => (
            <span
              className={`topology-connection topology-connection-${connection} ${
                selectedId === "product" || selectedId === connection
                  ? "is-active"
                  : ""
              }`}
              key={connection}
            />
          ))}
        </div>

        <ul className="topology-nodes">
          {nodes.map((node, index) => {
            const isSelected = node.id === selectedId;

            return (
              <li
                className={`topology-node topology-node-${node.id}`}
                key={node.id}
              >
                <button
                  type="button"
                  className={isSelected ? "is-selected" : undefined}
                  aria-pressed={isSelected}
                  aria-controls="system-topology-inspector"
                  onClick={() => setSelectedId(node.id)}
                  onFocus={() => setSelectedId(node.id)}
                >
                  <span className="topology-node-index" aria-hidden="true">
                    {index.toString().padStart(2, "0")}
                  </span>
                  <span>{node.label}</span>
                  <i aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <section
        className="topology-inspector"
        id="system-topology-inspector"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="topology-inspector-head">
          <p>
            <span aria-hidden="true" /> SELECTED NODE
          </p>
          <span>{selectedNode.id}.sys</span>
        </div>
        <div className="topology-inspector-body">
          <p className="topology-inspector-title">{selectedNode.label}</p>
          <p>{selectedNode.capabilities.join(" · ")}</p>
          {selectedNode.proof ? (
            <p className="topology-proof">
              <span>PROOF</span>
              {" "}
              {selectedNode.proof}
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
