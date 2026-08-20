const STORAGE_KEY = "yeongwol-mungyeong-itinerary";

let state;
let activeDate;

const $ = (selector) => document.querySelector(selector);

async function loadInitialData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  const response = await fetch("./data/itinerary.json");
  return response.json();
}

function saveLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state, null, 2));
}

function statusClass(status = "") {
  if (status.includes("미정") || status.includes("미예매")) return "draft";
  if (status.includes("추정") || status.includes("필요")) return "pending";
  return "";
}

function priorityClass(priority = "") {
  return priority === "높음" ? "high" : "";
}

function renderHeader() {
  $("#trip-title").textContent = state.trip.title;
  $("#trip-period").textContent = state.trip.period;
  $("#base-label").textContent = `숙소 ${state.trip.base}`;
  $("#route-strip").innerHTML = state.trip.route
    .map(
      (stop, index) => `
        <div class="route-stop">
          <span>${index + 1}번째</span>
          <strong>${stop}</strong>
        </div>
      `,
    )
    .join("");
}

function renderTabs() {
  $("#day-tabs").innerHTML = state.days
    .map(
      (day) => `
        <button class="day-tab ${day.date === activeDate ? "active" : ""}" data-date="${day.date}" type="button">
          ${day.label}
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".day-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeDate = button.dataset.date;
      render();
    });
  });
}

function renderTimeline() {
  const daysToRender = activeDate === "all" ? state.days : state.days.filter((day) => day.date === activeDate);
  $("#timeline").innerHTML = daysToRender.map(renderDay).join("");

  document.querySelectorAll("[data-edit-id]").forEach((button) => {
    button.addEventListener("click", () => editItem(button.dataset.date, button.dataset.editId));
  });

  document.querySelectorAll("[data-delete-id]").forEach((button) => {
    button.addEventListener("click", () => deleteItem(button.dataset.date, button.dataset.deleteId));
  });
}

function renderDay(day) {
  const items = day.items
    .map((item) => {
      const isGap = item.type === "빈 시간";
      return `
        <article class="timeline-item ${isGap ? "gap" : ""}">
          <div class="time">${item.time}</div>
          <div><span class="type-chip">${item.type}</span></div>
          <div>
            <p class="content-title">${item.title}</p>
            <p class="content-location">${item.location || ""}</p>
            ${item.note ? `<p class="content-note">${item.note}</p>` : ""}
            <div class="item-actions">
              <button class="item-action" data-date="${day.date}" data-edit-id="${item.id}" type="button">수정</button>
              <button class="item-action" data-date="${day.date}" data-delete-id="${item.id}" type="button">삭제</button>
            </div>
          </div>
          <div><span class="status-chip ${statusClass(item.status)}">${item.status || "미정"}</span></div>
        </article>
      `;
    })
    .join("");

  return `
    <section class="day-card">
      <header class="day-header">
        <div class="day-date">${day.label}</div>
        <div>
          <h2>${day.summary}</h2>
          <p class="day-summary">${day.date}</p>
        </div>
      </header>
      <div class="timeline-list">${items}</div>
    </section>
  `;
}

function renderSidePanel() {
  $("#day-count").textContent = `${state.days.length}일`;
  $("#reservation-count").textContent = `${state.reservations.length}건`;
  $("#todo-count").textContent = `${state.openItems.length}건`;

  $("#reservations").innerHTML = state.reservations
    .map(
      (item) => `
        <article class="mini-card">
          <strong>${item.title}</strong>
          <p>${item.date} · ${item.time}</p>
          <p>${item.location}</p>
          <span class="status-chip ${statusClass(item.status)}">${item.status}</span>
        </article>
      `,
    )
    .join("");

  $("#open-items").innerHTML = state.openItems
    .map(
      (item) => `
        <article class="mini-card">
          <strong>${item.title}</strong>
          <p>${item.note}</p>
          <span class="priority-chip ${priorityClass(item.priority)}">${item.priority}</span>
        </article>
      `,
    )
    .join("");
}

function renderFormOptions() {
  $("#item-date").innerHTML = state.days
    .map((day) => `<option value="${day.date}">${day.label}</option>`)
    .join("");
}

function render() {
  renderHeader();
  renderTabs();
  renderTimeline();
  renderSidePanel();
  renderFormOptions();
}

function clearForm() {
  $("#item-id").value = "";
  $("#item-time").value = "";
  $("#item-type").value = "빈 시간";
  $("#item-title").value = "";
  $("#item-location").value = "";
  $("#item-status").value = "미정";
  $("#item-note").value = "";
  $("#item-date").value = activeDate === "all" ? state.days[0].date : activeDate;
}

function findDay(date) {
  return state.days.find((day) => day.date === date);
}

function editItem(date, id) {
  const day = findDay(date);
  const item = day.items.find((entry) => entry.id === id);
  $("#item-id").value = id;
  $("#item-date").value = date;
  $("#item-time").value = item.time;
  $("#item-type").value = item.type;
  $("#item-title").value = item.title;
  $("#item-location").value = item.location || "";
  $("#item-status").value = item.status || "";
  $("#item-note").value = item.note || "";
  document.querySelector(".edit-form").scrollIntoView({ behavior: "smooth", block: "center" });
}

function deleteItem(date, id) {
  const day = findDay(date);
  day.items = day.items.filter((item) => item.id !== id);
  saveLocal();
  render();
}

function upsertItem(event) {
  event.preventDefault();
  const date = $("#item-date").value;
  const id = $("#item-id").value || `item-${Date.now()}`;
  const nextItem = {
    id,
    time: $("#item-time").value.trim(),
    type: $("#item-type").value,
    title: $("#item-title").value.trim(),
    location: $("#item-location").value.trim(),
    status: $("#item-status").value.trim() || "미정",
    note: $("#item-note").value.trim(),
  };

  state.days.forEach((day) => {
    day.items = day.items.filter((item) => item.id !== id);
  });
  findDay(date).items.push(nextItem);
  saveLocal();
  activeDate = date;
  clearForm();
  render();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "itinerary.updated.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    state = JSON.parse(reader.result);
    activeDate = state.days[0]?.date || "all";
    saveLocal();
    clearForm();
    render();
  });
  reader.readAsText(file);
}

async function resetData() {
  localStorage.removeItem(STORAGE_KEY);
  const response = await fetch("./data/itinerary.json");
  state = await response.json();
  activeDate = state.days[0].date;
  clearForm();
  render();
}

async function init() {
  state = await loadInitialData();
  activeDate = state.days[0].date;
  render();
  clearForm();

  $("#item-form").addEventListener("submit", upsertItem);
  $("#clear-form").addEventListener("click", clearForm);
  $("#export-json").addEventListener("click", exportJson);
  $("#import-json").addEventListener("click", () => $("#file-input").click());
  $("#file-input").addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (file) importJson(file);
    event.target.value = "";
  });
  $("#reset-data").addEventListener("click", resetData);
}

init();
