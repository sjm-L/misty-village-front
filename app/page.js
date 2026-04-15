'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createVillage } from '@/lib/api';

export default function HomePage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    try {
      const village = await createVillage(name);
      // 생성 후 마을 화면으로 이동
      router.push(`/village/${village.id}`);
    } catch {
      alert('마을 생성에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">안개 마을 연대기</h1>
        <p className="text-gray-500 mb-8">마을을 만들고 탐험을 시작하세요</p>

        <form onSubmit={handleCreate} className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="마을 이름을 입력하세요"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border rounded px-4 py-2 w-64 text-center"
            maxLength={20}
          />
          <button
            type="submit"
            disabled={loading || !name.trim()}
            className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '생성 중...' : '마을 만들기'}
          </button>
        </form>
      </div>
    </div>
  );
}
