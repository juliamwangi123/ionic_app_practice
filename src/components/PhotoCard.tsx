import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCol,
  IonIcon,
  IonRow,
  useIonToast,
} from "@ionic/react";
import { Photo } from "../app/types/photo";
import { useGetPhotosQuery } from "../app/service/photoGalleryApi"
import { heartOutline } from "ionicons/icons";

const PhotoCard = ({ photo }: { photo: Photo }) =>{
    const {data : albums} = useGetPhotosQuery('photos');
    console.log(albums)
    return(
      <IonCard>
      <img
        src={photo.urls.regular}
        alt={photo.description}
        style={{
          height: "24rem",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <IonCardContent>
        <IonRow>
          <IonCol style={{ display: "flex", flexDirection: "column" }}>
            <IonCardSubtitle>@{photo.user.username}</IonCardSubtitle>
            <IonCardSubtitle>
              {photo.likes} like{photo.likes > 1 && "s"}
            </IonCardSubtitle>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonButton>
              <IonIcon icon={heartOutline} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonCardContent>
    </IonCard>
  
    )
}

export default PhotoCard