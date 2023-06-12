 export interface Photo {
  id: string;
  description: string;
  likes: number;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  user:{
    username:string
  }
  }