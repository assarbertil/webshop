interface MovieCategory {
  categoryId: number;
  category: any;
}

export interface Movie {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  added: Date;
  productCategory: MovieCategory[];
}
