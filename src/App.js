import './App.css';
import Search from './component/search/search';

function App() {
  const hanldeOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <Search onSearchChange={hanldeOnSearchChange} />
    </div>
  );
}

export default App;
