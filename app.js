const itinerary = {
  trip: {
    title: "영월-문경 2박 3일 여행",
    period: "2026-08-29 ~ 2026-08-31",
    base: "강원도 영월군 주천면 금용강변로 474-4",
    route: ["인천", "영월", "문경", "인천"],
  },
  reservations: [
    {
      date: "2026-08-29",
      title: "인천 -> 영월 버스",
      time: "07:20",
      status: "예매 완료",
      location: "인천 -> 영월",
    },
    {
      date: "2026-08-29",
      title: "영월 숙소",
      time: "8/29~8/31",
      status: "확정",
      location: "강원도 영월군 주천면 금용강변로 474-4",
    },
    {
      date: "2026-08-30",
      title: "동강래프팅",
      time: "14:00~15:00",
      status: "네이버 예약 완료",
      location: "네이버 동강래프팅",
    },
    {
      date: "2026-08-31",
      title: "문경 ATV",
      time: "13:00~15:00",
      status: "여행대장 예약 완료",
      location: "경북 문경시 마성면 문경대로 1325 문경산악바이크",
    },
  ],
  days: [
    {
      date: "2026-08-29",
      label: "8/29 토",
      summary: "인천에서 영월로 이동하고 숙소 체크인. 밤에는 별 보기 후보.",
      items: [
        {
          time: "07:20",
          type: "이동",
          title: "인천에서 영월행 버스 출발",
          location: "인천 -> 영월",
          status: "예매 완료",
          note: "도착시간은 예매표 기준 재확인",
        },
        {
          time: "10:30~11:10 예상",
          type: "이동",
          title: "영월 도착 예상",
          location: "영월",
          status: "추정",
          note: "영월 도착 후 체크인 전까지 여유",
        },
        {
          time: "11:00~14:00",
          type: "빈 시간",
          title: "숙소 체크인 전 여유 시간",
          location: "영월 일대",
          status: "미정",
          note: "숙소 이동, 장보기, 주변 정리 가능",
        },
        {
          time: "14:00 이후",
          type: "숙소",
          title: "숙소 체크인",
          location: "강원도 영월군 주천면 금용강변로 474-4",
          status: "확정",
          note: "2박 예정",
        },
        {
          time: "14:00~저녁 전",
          type: "빈 시간",
          title: "숙소 정리 및 휴식",
          location: "숙소",
          status: "미정",
          note: "주변 이동 가능",
        },
        {
          time: "저녁~밤",
          type: "자유 일정",
          title: "별 보기 일정 후보",
          location: "영월 일대 / 별마로천문대 후보",
          status: "미정",
          note: "천문대 이용 시 사전예약과 입장시간 확인 필요",
        },
        {
          time: "숙박",
          type: "숙소",
          title: "영월 숙소 1박",
          location: "강원도 영월군 주천면 금용강변로 474-4",
          status: "확정",
          note: "",
        },
      ],
    },
    {
      date: "2026-08-30",
      label: "8/30 일",
      summary: "오후 동강래프팅. 전후로 숙소와 영월 일대 자유시간.",
      items: [
        {
          time: "아침~12:30",
          type: "빈 시간",
          title: "숙소 체류 또는 영월 근처 자유시간",
          location: "영월 / 숙소",
          status: "미정",
          note: "래프팅 전 무리 없는 일정 권장",
        },
        {
          time: "13:00~13:30",
          type: "준비",
          title: "동강래프팅장 도착 권장",
          location: "네이버 동강래프팅",
          status: "확정",
          note: "예약 30분~1시간 전 도착",
        },
        {
          time: "13:00~14:00",
          type: "준비",
          title: "주차, 현장접수, 환복, 출발지 이동",
          location: "동강래프팅 현장",
          status: "확정",
          note: "물에 들어갈 수 있는 복장 필요",
        },
        {
          time: "14:00~15:00",
          type: "액티비티",
          title: "동강래프팅",
          location: "동강래프팅",
          status: "네이버 예약 완료",
          note: "급류체험 진행",
        },
        {
          time: "15:00~17:00 예상",
          type: "정리",
          title: "래프팅 종료, 탈의 및 샤워, 숙소 복귀",
          location: "동강래프팅 -> 숙소",
          status: "추정",
          note: "현장 진행에 따라 더 걸릴 수 있음",
        },
        {
          time: "17:00 이후~밤",
          type: "빈 시간",
          title: "숙소 복귀 후 자유시간",
          location: "숙소 / 영월 일대",
          status: "미정",
          note: "전날 별 보기를 못 하면 이 시간대 활용 가능",
        },
        {
          time: "숙박",
          type: "숙소",
          title: "영월 숙소 2박",
          location: "강원도 영월군 주천면 금용강변로 474-4",
          status: "확정",
          note: "",
        },
      ],
    },
    {
      date: "2026-08-31",
      label: "8/31 월",
      summary: "영월 숙소 퇴실 후 문경으로 이동해 ATV를 타고 귀가.",
      items: [
        {
          time: "아침~11:00",
          type: "빈 시간",
          title: "짐 정리 및 퇴실 준비",
          location: "숙소",
          status: "미정",
          note: "문경 이동 전 준비",
        },
        {
          time: "12:00 이전",
          type: "숙소",
          title: "숙소 체크아웃",
          location: "강원도 영월군 주천면 금용강변로 474-4",
          status: "확정",
          note: "",
        },
        {
          time: "11:00~13:00",
          type: "이동",
          title: "영월 숙소에서 문경산악바이크로 이동",
          location: "영월 -> 경북 문경시 마성면 문경대로 1325",
          status: "이동 필요",
          note: "13시 예약이라 11시대 출발 권장",
        },
        {
          time: "13:00~15:00",
          type: "액티비티",
          title: "문경 ATV",
          location: "경북 문경시 마성면 문경대로 1325 문경산악바이크",
          status: "여행대장 예약 완료",
          note: "현장 바코드 제시, 실제 체험 약 30~40분",
        },
        {
          time: "15:00 이후",
          type: "빈 시간",
          title: "ATV 정리 후 귀가 대기",
          location: "문경 / 점촌 일대",
          status: "미정",
          note: "터미널 이동 및 귀가 버스 대기",
        },
        {
          time: "16:00 이후 후보",
          type: "귀가",
          title: "문경/점촌에서 인천행 버스 탑승",
          location: "문경/점촌 -> 인천",
          status: "미예매",
          note: "ATV 후 바로 가려면 16시 이후, 여유 있게는 18시대 후보",
        },
      ],
    },
  ],
  openItems: [
    {
      title: "8/29 영월 도착시간",
      priority: "높음",
      note: "인천 07:20 출발 버스의 정확한 영월 도착시간",
    },
    {
      title: "8/29 별 보기",
      priority: "중간",
      note: "별마로천문대 예약 여부 또는 대체 별 보기 장소",
    },
    {
      title: "숙소 이동",
      priority: "높음",
      note: "영월 터미널/정류장에서 숙소까지 이동 방법",
    },
    {
      title: "8/30 래프팅 위치",
      priority: "높음",
      note: "네이버 동강래프팅 정확한 집결지 주소",
    },
    {
      title: "8/31 문경 이동",
      priority: "높음",
      note: "숙소에서 문경산악바이크까지 실제 이동시간과 이동수단",
    },
    {
      title: "8/31 귀가 버스",
      priority: "높음",
      note: "문경/점촌에서 인천행 버스 시간 및 예매",
    },
  ],
};

let activeDate = itinerary.days[0].date;

const $ = (selector) => document.querySelector(selector);

function statusClass(status = "") {
  if (status.includes("미정") || status.includes("미예매")) return "draft";
  if (status.includes("추정") || status.includes("필요")) return "pending";
  return "";
}

function priorityClass(priority = "") {
  return priority === "높음" ? "high" : "";
}

function renderHeader() {
  $("#trip-title").textContent = itinerary.trip.title;
  $("#trip-period").textContent = itinerary.trip.period;
  $("#base-label").textContent = `숙소 ${itinerary.trip.base}`;
  $("#route-strip").innerHTML = itinerary.trip.route
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
  $("#day-tabs").innerHTML = itinerary.days
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

function renderTimeline() {
  const day = itinerary.days.find((entry) => entry.date === activeDate);
  $("#timeline").innerHTML = renderDay(day);
}

function renderSidePanel() {
  $("#day-count").textContent = `${itinerary.days.length}일`;
  $("#reservation-count").textContent = `${itinerary.reservations.length}건`;
  $("#todo-count").textContent = `${itinerary.openItems.length}건`;

  $("#reservations").innerHTML = itinerary.reservations
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

  $("#open-items").innerHTML = itinerary.openItems
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

function render() {
  renderHeader();
  renderTabs();
  renderTimeline();
  renderSidePanel();
}

render();
