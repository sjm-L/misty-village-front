export default function ResourcePanel({ resource }) {
  if (!resource) return null;

  return (
    <div className="border rounded p-4 my-4">
      <h2 className="font-bold text-lg mb-2">마을 자원</h2>
      <div className="flex gap-6">
        <span>🌾 식량: {resource.food}</span>
        <span>🪵 나무: {resource.wood}</span>
        <span>💰 골드: {resource.gold}</span>
      </div>
    </div>
  );
}
