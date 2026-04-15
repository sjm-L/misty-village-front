import { resolveEvent } from '@/lib/api';

const EVENT_ICON = {
  DISASTER: '⚠️',
  FESTIVAL: '🎉',
  RAID: '⚔️',
};

const EVENT_COLOR = {
  DISASTER: 'border-red-400 bg-red-50',
  FESTIVAL: 'border-yellow-400 bg-yellow-50',
  RAID: 'border-orange-400 bg-orange-50',
};

// onResolved: 이벤트 해결 후 화면 갱신을 위해 부모에서 넘겨주는 콜백
export default function EventPanel({ events, onResolved }) {
  const unresolvedEvents = events?.filter(e => !e.resolved) ?? [];

  if (unresolvedEvents.length === 0) return null;

  const handleResolve = async (eventId) => {
    try {
      await resolveEvent(eventId);
      onResolved(); // 부모에서 마을 데이터 다시 불러오기
    } catch {
      alert('이벤트 해결 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="my-4">
      <h2 className="font-bold text-lg mb-2">⚡ 이벤트 발생!</h2>
      {unresolvedEvents.map(event => (
        <div
          key={event.id}
          className={`border-2 rounded p-3 mb-2 flex justify-between items-center ${EVENT_COLOR[event.type]}`}
        >
          <div>
            <span className="mr-2">{EVENT_ICON[event.type]}</span>
            <span>{event.description}</span>
            <span className="ml-2 text-sm text-gray-500">
              (식량 {event.foodChange > 0 ? '+' : ''}{event.foodChange}
              {' '}나무 {event.woodChange > 0 ? '+' : ''}{event.woodChange}
              {' '}골드 {event.goldChange > 0 ? '+' : ''}{event.goldChange})
            </span>
          </div>
          <button
            onClick={() => handleResolve(event.id)}
            className="bg-gray-700 text-white px-3 py-1 rounded text-sm ml-4 hover:bg-gray-800"
          >
            해결하기
          </button>
        </div>
      ))}
    </div>
  );
}
