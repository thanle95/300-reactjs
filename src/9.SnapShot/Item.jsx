const Item = ({ url, title }) => {
  return (
    <li>
      <img src={url} alt={title} />
    </li>
  );
};
export default Item;
