import React, { Fragment } from 'react';

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];


function MyComponent() {
  return (
    list.map((item) => {
      return (<>
        <h1> {item.area} </h1>
        <h1> {item.visited ? "방문함" : "아직안함"} </h1>
      </>)
    })
  );
}

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function Fruit() {

  const itemList = items.map(({ id, name, desc }) => {
    return (<>
      <dt> {name} </dt>
      <dl> {desc} </dl>
    </>);
  })
  return (
    <dl>
      {itemList}
    </dl>
  )


}

function ListItem({ item }) {
  return (
    <div>
      <Fragment>
        <dt>{item.term}</dt>
        <dd>{item.description}</dd>
      </Fragment>
    </div>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

function App() {
  return (
    <div>
      <h1> 안녕 라이캣 1호 </h1>
      <h1> 안녕 라이캣 2호 </h1>
      {/* <MyComponent /> */}
      <dl>
        <Fruit />
      </dl>

    </div>
  );
}

export default App;
