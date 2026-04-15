import { useState } from 'react';
import { nextWeek } from '@/lib/api';

// onWeekEnd: 주차 진행 후 결과(WeekResponse)를 부모에 전달
export default function NextWeekButton({ villageId, onWeekEnd }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const result = await nextWeek(villageId);
      onWeekEnd(result);
    } catch {
      alert('주차 진행 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? '진행 중...' : '다음 주차 →'}
    </button>
  );
}
