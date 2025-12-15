let items = [];

function addItem() {
  const d = desc.value;
  const q = Number(qty.value);
  const p = Number(price.value);

  if (!d || q <= 0 || p <= 0) return;

  items.push({ d, q, p });
  desc.value = qty.value = price.value = "";
  render();
}

function render() {
  const tbody = document.getElementById("items");
  tbody.innerHTML = "";

  let subtotal = 0;

  items.forEach((i, idx) => {
    const amt = i.q * i.p;
    subtotal += amt;

    tbody.innerHTML += `
      <tr>
        <td>${idx + 1}</td>
        <td>${i.d}</td>
        <td>${i.q}</td>
        <td>${i.p}</td>
        <td>${amt}</td>
      </tr>
    `;
  });

  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("gst").innerText = gst.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}
