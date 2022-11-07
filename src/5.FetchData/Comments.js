import "./style.css";
import useFetch from "./useFetch";
function Comments() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/comments");
  return (
    <div id="container">
      <ul>
        {data && data.map((data) => <li key={data.name}>{data.body}</li>)}
      </ul>
    </div>
  );
}

export default Comments;
