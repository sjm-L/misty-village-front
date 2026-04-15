'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { getVillage, getEvents, sendExpedition } from '@/lib/api';
import ResourcePanel from '@/components/ResourcePanel';
import VillagerList from '@/components/VillagerList';
import EventPanel from '@/components/EventPanel';
import NextWeekButton from '@/components/NextWeekButton';

async function loadVillageData(id) {
  return Promise.all([
    getVillage(id),
    getEvents(id),
  ]);
}

export default function VillagePage({ params }) {
  const { id } = use(params);
  const [village, setVillage] = useState(null);
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const [villageData, eventData] = await loadVillageData(id);
      setVillage(villageData);
      setEvents(eventData);
    } catch (e) {
      console.error('데이터 로딩 실패:', e);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const [villageData, eventData] = await loadVillageData(id);
        setVillage(villageData);
        setEvents(eventData);
      } catch (e) {
        console.error('데이터 로딩 실패:', e);
      }
    };

    loadData();
  }, [id]);

  const handleSendExpedition = async (villagerId, destination) => {
    try {
      await sendExpedition(id, villagerId, destination);
      setMessage(`탐험을 보냈습니다! (${destination})`);
      await fetchData();
    } catch (e) {
      alert(e.message);
    }
  };

  const handleWeekEnd = async (result) => {
    setMessage(`${result.week}주차 시작!`);
    await fetchData();
  };

  if (!village) {
    return <div className="p-6 text-gray-400">로딩 중...</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">{village.name}</h1>
          <p className="text-gray-500">현재 {village.week}주차 · 주민 {village.population}명</p>
        </div>
        <NextWeekButton villageId={id} onWeekEnd={handleWeekEnd} />
      </div>
      {message && (
        <div className="bg-blue-50 border border-blue-200 rounded p-2 mb-4 text-sm text-blue-700">
          {message}
        </div>
      )}
      <EventPanel events={events} onResolved={fetchData} />
      <ResourcePanel resource={village.resource} />
      <VillagerList villagers={village.villagers} onSend={handleSendExpedition} />
    </div>
  );
}
