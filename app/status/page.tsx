export default function Status() {
  return (
    <div>
      <h1>Status Check</h1>
      <p>Server is running</p>
      <p>Time: {new Date().toISOString()}</p>
    </div>
  )
} 