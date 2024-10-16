export default function UserInterface({ score }) {
  return (
    <div className="bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold">Score: {score}</h2>
    </div>
  )
}