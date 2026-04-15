# Misty Village Frontend

안개 마을 연대기 프론트엔드 프로젝트입니다.  
사용자는 마을을 생성하고, 주민과 자원을 확인하며, 탐험을 보내고, 주차를 진행하면서 발생한 이벤트를 해결할 수 있습니다.

## 주요 기능

- 마을 생성
- 마을 상세 정보 조회
- 주민 상태 및 역할 확인
- 주민 탐험 보내기
- 주차 진행
- 미해결 이벤트 조회 및 해결

## 기술 스택

- Next.js 16
- React 19
- Tailwind CSS 4
- ESLint

## 실행 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 됩니다.

## 백엔드 연동

이 프로젝트는 기본적으로 `http://localhost:8080/api`를 백엔드 API 주소로 사용합니다.

백엔드가 함께 실행되고 있어야 정상적으로 동작합니다.

## 프로젝트 구조

- `app/page.js`: 마을 생성 화면
- `app/village/[id]/page.js`: 마을 상세 화면
- `components/`: 자원, 주민, 이벤트, 주차 버튼 UI 컴포넌트
- `lib/api.js`: 백엔드 API 호출 함수

## 확인 가능한 스크립트

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 개발 메모

- 프론트엔드는 `3000` 포트를 사용합니다.
- 백엔드는 `8080` 포트를 사용합니다.
- API 주소를 변경하려면 `lib/api.js`의 `BASE_URL` 값을 수정하면 됩니다.
