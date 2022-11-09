import { useContext } from "react";
import { ImageContext } from "./ImageContext";
import Item from "./Item";
import NoImagesFound from "./NoImagesFound";

const Gallery = () => {
  const [data] = useContext(ImageContext);
  console.log(data);
  let images;
  let noImages;
    if (data?.photo?.length > 0)
      images = data.photo.map((item) => {
        let { farm, server, id, secret } = item;
        return (
          <Item
            url={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
            title={item.title}
            key={item.id}
          />
        );
      });
    else noImages = <NoImagesFound />;
  return (
    <>
      <div >
        <h2>Title</h2>
        {images && <ul className="gallery">{images}</ul>}
        {noImages}
      </div>
    </>
  );
};
export default Gallery;
