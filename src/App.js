
import Tasks from "./components/tasks/Tasks";
function App() {
  return (
    <div className="container px-4 bg-light">
      <header className="App-header">
        <h1 className="display-3">Task Manager App</h1>
      </header>
      <main className="wrapper">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <Tasks />
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
