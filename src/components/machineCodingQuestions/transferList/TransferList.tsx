import { useState } from "react";
import { css } from "@emotion/react";

// Interface for each list item
interface ListItem {
  id: string;
  name: string;
  isSelected: boolean;
}

const rawStyle = css`
  all: unset;
  font-family: initial;
  color: initial;
  background: none;
`;

const TransferList = () => {
  const [leftList, setLeftList] = useState<ListItem[]>([
    { id: "1", name: "Aarav Mehta", isSelected: false },
    { id: "2", name: "Ishita Kapoor", isSelected: false },
    { id: "3", name: "Kabir Shah", isSelected: false },
    { id: "4", name: "Rhea Sinha", isSelected: false },
    { id: "5", name: "Vivaan Desai", isSelected: false },
  ]);

  const [rightList, setRightList] = useState<ListItem[]>([
    { id: "6", name: "Naina Joshi", isSelected: false },
    { id: "7", name: "Arjun Malhotra", isSelected: false },
    { id: "8", name: "Tara Verma", isSelected: false },
  ]);

  const transferAll = (list: "left" | "right") => {
    if (list === "left") {
      setRightList((prev) => [...prev, ...leftList]);
      setLeftList([]);
    } else {
      setLeftList((prev) => [...prev, ...rightList]);
      setRightList([]);
    }
  };

  const transferSelected = (list: "left" | "right") => {
    if (list === "left") {
      const selected = leftList.filter((item) => item.isSelected);
      const reset = selected.map((item) => ({ ...item, isSelected: false }));
      setLeftList((prev) => prev.filter((item) => !item.isSelected));
      setRightList((prev) => [...prev, ...reset]);
    } else {
      const selected = rightList.filter((item) => item.isSelected);
      const reset = selected.map((item) => ({ ...item, isSelected: false }));
      setRightList((prev) => prev.filter((item) => !item.isSelected));
      setLeftList((prev) => [...prev, ...reset]);
    }
  };

  const updateSelected = (list: "left" | "right", id: string) => {
    const updater = (prev: ListItem[]) =>
      prev.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      );
    list === "left" ? setLeftList(updater) : setRightList(updater);
  };

  return (
    <div style={{
      all: "unset",
      fontFamily: "initial",
      color: "initial",
      background: "none",
    }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          padding: "24px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Left List */}
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
            backgroundColor: "#fafafa",
          }}
        >
          <h3 style={{ marginBottom: "16px" }}>Left List</h3>
          {leftList.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                margin: "10px 0",
                padding: "8px 12px",
                borderRadius: "6px",
                transition: "background 0.2s",
                cursor: "pointer",
                backgroundColor: item.isSelected ? "#e0e7ff" : "transparent",
              }}
            >
              <input
                type="checkbox"
                style={{
                  height: "16px",
                  width: "16px",
                  cursor: "pointer",
                }}
                checked={item.isSelected}
                onChange={() => updateSelected("left", item.id)}
              />
              <span>{item.name}</span>
            </div>
          ))}
          {leftList.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "16px",
              }}
            >
              <button
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onClick={() => transferAll("left")}
              >
                Transfer All
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onClick={() => transferSelected("left")}
              >
                Transfer Selected
              </button>
            </div>
          )}
        </div>

        {/* Right List */}
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
            backgroundColor: "#fafafa",
          }}
        >
          <h3 style={{ marginBottom: "16px" }}>Right List</h3>
          {rightList.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                margin: "10px 0",
                padding: "8px 12px",
                borderRadius: "6px",
                transition: "background 0.2s",
                cursor: "pointer",
                backgroundColor: item.isSelected ? "#e0e7ff" : "transparent",
              }}
            >
              <input
                type="checkbox"
                style={{
                  height: "16px",
                  width: "16px",
                  cursor: "pointer",
                }}
                checked={item.isSelected}
                onChange={() => updateSelected("right", item.id)}
              />
              <span>{item.name}</span>
            </div>
          ))}
          {rightList.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "16px",
              }}
            >
              <button
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onClick={() => transferAll("right")}
              >
                Transfer All
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onClick={() => transferSelected("right")}
              >
                Transfer Selected
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransferList;
