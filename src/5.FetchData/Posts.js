import "./style.css";
import useFetch from "./useFetch";
function Posts() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div id="container">
      <ul>
        {data && data.map((data) => <li key={data.title}>{data.title}</li>)}
      </ul>
    </div>
  );
}

export default Posts;
