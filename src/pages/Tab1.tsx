import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import GetPhotos from '../components/PhotoCard';
import { useGetPhotosQuery } from '../app/service/photoGalleryApi';
import { Photo } from '../app/types/photo';
import PhotoCard from '../components/PhotoCard';

const Tab1: React.FC = () => {
  const { data : photos} = useGetPhotosQuery('photos')
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Photos</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="gallery">
        <IonGrid className="photo-list">
          <IonRow>
            {photos?.map((photo: Photo) => (
              <IonCol
                sizeXs="12"
                sizeMd="6"
                sizeXl="4"
                className="photo-list-item"
                key={photo.id}
              >
                <PhotoCard photo={photo} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
