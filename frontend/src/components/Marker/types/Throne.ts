import { FetchThronesResponse } from './typesThrone';

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type Throne = ArrayElement<FetchThronesResponse['thrones']>;
