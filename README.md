# 영월-문경 여행 일정 관리

DB 없이 동작하는 정적 여행 일정 대시보드입니다.

## 실행

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## 데이터 구조

기본 데이터는 `data/itinerary.json`에 있습니다. 화면에서 일정을 수정한 뒤 `JSON 내보내기`로 저장하고, 저장한 JSON 파일은 `JSON 불러오기`로 다시 불러올 수 있습니다.

## 구성

- `index.html`: 앱 화면
- `styles.css`: 대시보드 스타일
- `app.js`: 일정 렌더링, 편집, JSON 가져오기/내보내기
- `data/itinerary.json`: 기본 여행 일정 데이터
