
import './App.css';
// import Menu from './components/menu/Menu.jsx'

function App() {

  const name = "라이캣1호";

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes()
  const second = new Date().getSeconds()
  // console.log(year);

  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <div>
      {/* <Menu /> */}
      <h1 hello="hi"> 안녕 {name}  </h1>
      <h1 style={{}}> 안녕 라이캣2호 </h1>

      <div className="date-wrap">
        <p className="year"> {year}년 </p>
        <p className="today">  {month}월 {date}일  </p>
        <p className="time"> {hour}시 {minute}분 {second}초 </p>
      </div>

      <div className="list-wrap">
        <List list={list[0]} />
        <List list={list[1]} />
        <List list={list[2]} />
        <List list={list[3]} />
      </div>
    </div>
  );
}

function List({list}){
  return(
    <p className={list.visited  ? "list active" : "list"} > 
      {list.area}
    </p>
  )
}

export default App;
