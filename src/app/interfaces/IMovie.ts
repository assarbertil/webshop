interface IMovieCategory {
  categoryId: number;
  category: any;
}

export interface IMovie {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: string;
  added: Date;
  productCategory: IMovieCategory[];
}
