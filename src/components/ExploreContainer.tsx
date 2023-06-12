import { useGetPhotosQuery } from '../app/service/photoGalleryApi';
import './ExploreContainer.css';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const { data: albums } = useGetPhotosQuery('photos')
  return (
    <div className="container">
    <ul>
      {albums?.map((album:any) => (
        <li key={album.id}>
          {album.id} - {album.title}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ExploreContainer;
