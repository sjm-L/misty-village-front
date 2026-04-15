const ROLE_LABEL = {
  WARRIOR: '전사',
  FARMER: '농부',
  EXPLORER: '탐험가',
};

const STATUS_LABEL = {
  IDLE: '대기중',
  ON_EXPEDITION: '탐험중',
  INJURED: '부상',
  DEAD: '사망',
};

const STATUS_COLOR = {
  IDLE: 'text-green-600',
  ON_EXPEDITION: 'text-blue-600',
  INJURED: 'text-yellow-600',
  DEAD: 'text-red-600',
};

// onSend: 탐험 보내기 버튼 클릭 시 호출 (villagerId, destination 전달)
export default function VillagerList({ villagers, onSend }) {
  if (!villagers || villagers.length === 0) {
    return <div className="border rounded p-4 my-4 text-gray-400">주민이 없습니다.</div>;
  }

  return (
    <div className="border rounded p-4 my-4">
      <h2 className="font-bold text-lg mb-2">주민 목록</h2>
      {villagers.map(v => (
        <div key={v.id} className="flex gap-4 py-2 border-b items-center">
          <span className="font-medium w-16">{v.name}</span>
          <span className="text-blue-500 w-16">{ROLE_LABEL[v.role]}</span>
          <span className={`w-16 ${STATUS_COLOR[v.status]}`}>
            {STATUS_LABEL[v.status]}
          </span>
          <span className="text-gray-500 w-12">Lv.{v.level}</span>

          {/* IDLE 상태인 주민만 탐험 보내기 버튼 표시 */}
          {v.status === 'IDLE' && onSend && (
            <div className="flex gap-2 ml-auto">
              <button
                onClick={() => onSend(v.id, 'FOREST')}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200"
              >
                숲
              </button>
              <button
                onClick={() => onSend(v.id, 'MOUNTAIN')}
                className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded hover:bg-yellow-200"
              >
                산
              </button>
              <button
                onClick={() => onSend(v.id, 'RUINS')}
                className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
              >
                폐허
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
