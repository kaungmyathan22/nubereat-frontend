/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: category
// ====================================================

export interface category_category_category_restaurants_category {
  __typename: "Category";
  name: string;
}

export interface category_category_category_restaurants {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImage: string;
  category: category_category_category_restaurants_category | null;
  address: string;
  isPromoted: boolean;
}

export interface category_category_category {
  __typename: "Category";
  restaurants: category_category_category_restaurants[] | null;
  id: number;
  name: string;
  coverImage: string | null;
  slug: string;
  restaurantCount: number;
}

export interface category_category {
  __typename: "CategoryOutput";
  error: string | null;
  ok: boolean;
  totalPages: number | null;
  totalResults: number | null;
  category: category_category_category;
}

export interface category {
  category: category_category;
}

export interface categoryVariables {
  input: CategoryInput;
}
