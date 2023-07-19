function parseInterests(interestElement) {
  let node = {};
  const checkboxComponent = interestElement.querySelector('label')
  const checkbox = checkboxComponent.querySelector('input');
  node.name = checkboxComponent.textContent.trim();
  node.node = checkbox;
  node.value = checkbox.checked
  node.children = [];
  let subInterests = interestElement.querySelectorAll(':scope > ul > .interest');
  subInterests.forEach((subInterest) => {
    let childNode = parseInterests(subInterest);
    node.children.push(childNode);
  });
  return node;
}

let tree = [];
let interests = document.querySelectorAll('.interests_main > ul > .interest');

interests.forEach((interest) => {
  let node = parseInterests(interest);
  tree.push(node);
});

function rec(clickedNode, tree, forceValue) {
  let allChecked = true;
  let allUnchecked = true;
  let indeterminate = false;

  for (let i = 0; i < tree.length; i++) {
    if (forceValue !== undefined) {
      tree[i].value = forceValue;
      tree[i].node.checked = forceValue;
    }

    if (tree[i].node === clickedNode) {
      rec(clickedNode, tree[i].children, clickedNode.checked);
      tree[i].value = clickedNode.checked;
      tree[i].node.checked = clickedNode.checked;
      tree[i].node.indeterminate = false;
    } else if (tree[i].children.length > 0) {
      const { checked: childChecked, indeterminate: childIndeterminate } = rec(clickedNode, tree[i].children, forceValue);
      tree[i].value = childChecked;
      tree[i].node.checked = childChecked;
      tree[i].node.indeterminate = childIndeterminate;
    }

    if (tree[i].value) {
      allUnchecked = false;
    } else {
      allChecked = false;
    }

    if (tree[i].node.indeterminate) {
      indeterminate = true;
    }
  }

  if (!allChecked && !allUnchecked) {
    indeterminate = true;
  }

  return { checked: allChecked, indeterminate };
}

document.querySelectorAll('input.interest__check').forEach((input) => {
  input.addEventListener('click', (event) => {
    rec(event.target, tree, undefined);
  });
})