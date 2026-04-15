const BASE_URL = 'http://localhost:8080/api';

// 마을 조회
export async function getVillage(id) {
  const res = await fetch(`${BASE_URL}/village/${id}`);
  if (!res.ok) throw new Error('마을 조회 실패');
  return res.json();
}

// 마을 생성
export async function createVillage(name) {
  const res = await fetch(`${BASE_URL}/village`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error('마을 생성 실패');
  return res.json();
}

// 탐험 보내기
export async function sendExpedition(villageId, villagerId, destination) {
  const res = await fetch(`${BASE_URL}/expedition`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ villageId, villagerId, destination }),
  });
  if (!res.ok) throw new Error('탐험 보내기 실패');
  return res.json();
}

// 다음 주차 진행
export async function nextWeek(villageId) {
  const res = await fetch(`${BASE_URL}/week/next/${villageId}`, {
    method: 'POST',
  });
  if (!res.ok) throw new Error('주차 진행 실패');
  return res.json();
}

// 미해결 이벤트 목록
export async function getEvents(villageId) {
  const res = await fetch(`${BASE_URL}/game-event/${villageId}`);
  if (!res.ok) throw new Error('이벤트 조회 실패');
  return res.json();
}

// 이벤트 해결
export async function resolveEvent(eventId) {
  const res = await fetch(`${BASE_URL}/game-event/${eventId}/resolve`, {
    method: 'POST',
  });
  if (!res.ok) throw new Error('이벤트 해결 실패');
}
