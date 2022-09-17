/* TypeScript file generated from Vertical.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as Curry__Es6Import from 'rescript/lib/es6/curry.js';
const Curry: any = Curry__Es6Import;

// @ts-ignore: Implicit any on import
import * as VerticalBS__Es6Import from './Vertical.bs';
const VerticalBS: any = VerticalBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type orientation = "upright" | "rotated";

// tslint:disable-next-line:interface-over-type-literal
export type chunk = {
  readonly text: string; 
  readonly vo: orientation; 
  readonly len: number
};

// tslint:disable-next-line:interface-over-type-literal
export type tateChuYokoLimit = 2 | 3 | 4;

export const vo: (c:number) => orientation = VerticalBS.vo;

export const splitByVO: (line:string) => chunk[] = VerticalBS.splitByVO;

export const tateChuYoko: (line:string, max:tateChuYokoLimit, openTag:string, closeTag:string) => string = function (Arg1: any, Arg2: any, Arg3: any, Arg4: any) {
  const result = Curry._4(VerticalBS.tateChuYoko, Arg1, Arg2, Arg3, Arg4);
  return result
};
