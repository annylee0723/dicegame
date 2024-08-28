import ReactDOM from "react-dom/client";

const product = 'MacBook';
const model = 'Air';
const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png'
const root = ReactDOM.createRoot(document.getElementById('root'));

function handleClick(e) {
  alert('곧 도착합니다!');
}

root.render(
  (
    <>
      <h1>{product} {model} 구매하기 </h1>
      <img src={url} alt='product image'/>
      <button onClick={handleClick}>확인</button>
    </>
  )
);