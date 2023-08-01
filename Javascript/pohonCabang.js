// Data pohon (tree) contohnya
const treeData = {
  name: "Node A",
  children: [
    {
      name: "Node A.1",
      children: [{ name: "Node A.1.1" }, { name: "Node A.1.2" }],
    },
    {
      name: "Node A.2",
      children: [{ name: "Node A.2.1" }, { name: "Node A.2.2" }],
    },
  ],
};

// Fungsi untuk membuat pohon (tree) dari data
function createTree(data, element) {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.textContent = data.name;
  ul.appendChild(li);

  if (data.children && data.children.length > 0) {
    data.children.forEach((child) => {
      createTree(child, ul);
    });
  }

  element.appendChild(ul);
}

// Panggil fungsi untuk membuat pohon (tree) dengan data yang telah ditentukan
const treeElement = document.getElementById("tree");
createTree(treeData, treeElement);
