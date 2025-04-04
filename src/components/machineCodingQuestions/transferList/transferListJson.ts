export const transferListJson = {
  "React Tsx": {
    code: {
      "TransferList.tsx": `
            import React, { useState } from "react";
            
            // Interface for each list item
            interface ListItem {
              id: string;
              name: string;
              isSelected: boolean;
            }
            
            // Style object
            const style = {
              container: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
                padding: "24px",
                maxWidth: "900px",
                margin: "0 auto",
              },
              listContainer: {
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
                backgroundColor: "#fafafa",
              },
              itemContainer: {
                display: "flex",
                gap: "10px",
                alignItems: "center",
                margin: "10px 0",
                padding: "8px 12px",
                borderRadius: "6px",
                transition: "background 0.2s",
                cursor: "pointer",
              },
              input: {
                height: "16px",
                width: "16px",
                cursor: "pointer",
              },
              buttonContainer: {
                display: "flex",
                gap: "12px",
                marginTop: "16px",
              },
              button: {
                padding: "8px 16px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#4f46e5",
                color: "#fff",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background 0.2s",
              },
              heading: {
                margin: "24px auto",
                textAlign: "center" as const,
                fontSize: "24px",
                fontWeight: "600",
                color: "#333",
              },
            };
            
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
                <div>
                  <h1 style={style.heading}>Transfer List</h1>
                  <div style={style.container}>
                    {/* Left List */}
                    <div style={style.listContainer}>
                      <h3>Left List</h3>
                      {leftList.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            ...style.itemContainer,
                            backgroundColor: item.isSelected ? "#e0e7ff" : "transparent",
                          }}
                        >
                          <input
                            type="checkbox"
                            style={style.input}
                            checked={item.isSelected}
                            onChange={() => updateSelected("left", item.id)}
                          />
                          <span>{item.name}</span>
                        </div>
                      ))}
                      {leftList.length > 0 && (
                        <div style={style.buttonContainer}>
                          <button style={style.button} onClick={() => transferAll("left")}>
                            Transfer All
                          </button>
                          <button
                            style={style.button}
                            onClick={() => transferSelected("left")}
                          >
                            Transfer Selected
                          </button>
                        </div>
                      )}
                    </div>
            
                    {/* Right List */}
                    <div style={style.listContainer}>
                      <h3>Right List</h3>
                      {rightList.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            ...style.itemContainer,
                            backgroundColor: item.isSelected ? "#e0e7ff" : "transparent",
                          }}
                        >
                          <input
                            type="checkbox"
                            style={style.input}
                            checked={item.isSelected}
                            onChange={() => updateSelected("right", item.id)}
                          />
                          <span>{item.name}</span>
                        </div>
                      ))}
                      {rightList.length > 0 && (
                        <div style={style.buttonContainer}>
                          <button style={style.button} onClick={() => transferAll("right")}>
                            Transfer All
                          </button>
                          <button
                            style={style.button}
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
            
            `,
    },
  },
  "React Jsx": {
    code: {
      "TransferList.jsx": `
        import React from "react";
import { useState } from "react";

const style = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    padding: "24px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  listContainer: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#fafafa",
  },
  itemContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    margin: "10px 0",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "background 0.2s",
    cursor: "pointer",
  },
  input: {
    height: "16px",
    width: "16px",
    cursor: "pointer",
  },
  buttonContainer: {
    display: "flex",
    gap: "12px",
    marginTop: "16px",
  },
  button: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  heading: {
    margin: "24px auto",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
  },
};

function TransferList() {
  const [leftList, setLeftList] = useState([
    {
      id: "1",
      isSelected: false,
      name: "Aarav Mehta",
    },
    {
      id: "2",
      isSelected: false,
      name: "Ishita Kapoor",
    },
    {
      id: "3",
      isSelected: false,
      name: "Kabir Shah",
    },
    {
      id: "4",
      isSelected: false,
      name: "Rhea Sinha",
    },
    {
      id: "5",
      isSelected: false,
      name: "Vivaan Desai",
    },
  ]);
  const [rightList, setRightList] = useState([
    {
      id: "6",
      isSelected: false,
      name: "Naina Joshi",
    },
    {
      id: "7",
      isSelected: false,
      name: "Arjun Malhotra",
    },
    {
      id: "8",
      isSelected: false,
      name: "Tara Verma",
    },
  ]);

  const transferAll = (list) => {
    if (!list) return "please passed list name";
    if (list === "left") {
      setRightList((prev) => [...prev, ...leftList]);
      setLeftList([]);
    } else {
      setLeftList((prev) => [...prev, ...rightList]);
      setRightList([]);
    }
  };

  const transferSelected = (list) => {
    if (!list) return "please passed list name";
    if (list === "left") {
      const selectedItems = leftList.filter((item) => item.isSelected);
      const resetSelectedItems = selectedItems.map((item) => ({
        ...item,
        isSelected: false,
      }));
      setLeftList((prev) => prev.filter((item) => !item.isSelected));
      setRightList((prev) => [...prev, ...resetSelectedItems]);
    } else {
      const selectedItems = rightList.filter((item) => item.isSelected);
      const resetSelectedItems = selectedItems.map((item) => ({
        ...item,
        isSelected: false,
      }));
      setRightList((prev) => prev.filter((item) => !item.isSelected));
      setLeftList((prev) => [...prev, ...resetSelectedItems]);
    }
  };

  const updateSelected = (list, id) => {
    if (!list || !id) return "list and id are required";
    if (list === "left") {
      setLeftList((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              isSelected: !item.isSelected,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setRightList((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              isSelected: !item.isSelected,
            };
          } else {
            return item;
          }
        })
      );
    }
  };

  return (
    <div>
      <h1 style={style.heading}>Transfer List</h1>
      <div style={style.container}>
        <div style={style.listContainer}>
          <h3> Left List </h3>
          {leftList.map((item) => {
            return (
              <div key={item.id} style={style.itemContainer}>
                <input
                  type="checkbox"
                  style={style.input}
                  checked={item.isSelected}
                  onChange={(e) => updateSelected("left", item.id)}
                />
                <span>{item.name}</span>
              </div>
            );
          })}
          {leftList?.length ? (
            <div style={style.buttonContainer}>
              <button onClick={() => transferAll("left")}>Transfer all</button>
              <button onClick={() => transferSelected("left")}>
                Transfer Selected
              </button>
            </div>
          ) : null}
        </div>
        <div style={style.listContainer}>
          <h3> Right List </h3>
          {rightList.map((item) => {
            return (
              <div key={item.id} style={style.itemContainer}>
                <input
                  type="checkbox"
                  style={style.input}
                  checked={item.isSelected}
                  onChange={(e) => updateSelected("right", item.id)}
                />
                <span>{item.name}</span>
              </div>
            );
          })}
          {rightList?.length ? (
            <div style={style.buttonContainer}>
              <button onClick={() => transferAll("right")}>Transfer all</button>
              <button onClick={() => transferSelected("right")}>
                Transfer Selected
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TransferList;

        `,
    },
  },
  "Vanilla Javascript": {
    code: {
      HTML: `
          <div id="root"></div>
          `,
      CSS: `
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 24px;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      max-width: 900px;
      margin: 0 auto;
    }
    .list {
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 12px;
      background: #fafafa;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }
    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 0;
      padding: 8px 12px;
      border-radius: 6px;
      transition: background 0.2s;
    }
    .item.selected {
      background: #e0e7ff;
    }
    .btn-container {
      display: flex;
      gap: 12px;
      margin-top: 16px;
    }
    button {
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      background-color: #4f46e5;
      color: #fff;
      font-weight: 500;
      cursor: pointer;
    }
          `,
      Javascript: `
const root = document.getElementById("root");

let leftList = [
{ id: "1", name: "Aarav Mehta", isSelected: false },
{ id: "2", name: "Ishita Kapoor", isSelected: false },
{ id: "3", name: "Kabir Shah", isSelected: false },
{ id: "4", name: "Rhea Sinha", isSelected: false },
{ id: "5", name: "Vivaan Desai", isSelected: false },
];

let rightList = [
{ id: "6", name: "Naina Joshi", isSelected: false },
{ id: "7", name: "Arjun Malhotra", isSelected: false },
{ id: "8", name: "Tara Verma", isSelected: false },
];

function createList(title, items, listType) {
const listDiv = document.createElement("div");
listDiv.className = "list";

const heading = document.createElement("h3");
heading.textContent = title;
listDiv.appendChild(heading);

items.forEach((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.className = "item" + (item.isSelected ? " selected" : "");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.isSelected;
  checkbox.addEventListener("change", () => {
    item.isSelected = !item.isSelected;
    render();
  });

  const label = document.createElement("span");
  label.textContent = item.name;

  itemDiv.appendChild(checkbox);
  itemDiv.appendChild(label);
  listDiv.appendChild(itemDiv);
});

if (items.length > 0) {
  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";

  const btnAll = document.createElement("button");
  btnAll.textContent = "Transfer All";
  btnAll.onclick = () => {
    if (listType === "left") {
      rightList = [...rightList, ...leftList];
      leftList = [];
    } else {
      leftList = [...leftList, ...rightList];
      rightList = [];
    }
    render();
  };

  const btnSelected = document.createElement("button");
  btnSelected.textContent = "Transfer Selected";
  btnSelected.onclick = () => {
    if (listType === "left") {
      const selected = leftList.filter((i) => i.isSelected);
      leftList = leftList.filter((i) => !i.isSelected);
      selected.forEach((i) => (i.isSelected = false));
      console.log('left ->',{selected})
      rightList = [...rightList, ...selected];
    } else {
      const selected = rightList.filter((i) => i.isSelected);
      rightList = rightList.filter((i) => !i.isSelected);
      selected.forEach((i) => (i.isSelected = false));
      leftList = [...leftList, ...selected];
    }
    render();
  };

  btnContainer.appendChild(btnAll);
  btnContainer.appendChild(btnSelected);
  listDiv.appendChild(btnContainer);
}

return listDiv;
}

function render() {
root.innerHTML = "";

const heading = document.createElement("h1");
heading.textContent = "Transfer List";
root.appendChild(heading);

const container = document.createElement("div");
container.className = "container";

const left = createList("Left List", leftList, "left");
const right = createList("Right List", rightList, "right");

container.appendChild(left);
container.appendChild(right);
root.appendChild(container);
}

window.onload = function(){
render();
}


          `,
    },
  }
};
