import { CanvasFont } from "./Style/CanvasFont.js";

export class Context2D {
 canvas = document.createElement("canvas");
 private ctx: CanvasRenderingContext2D;

 constructor() {
  const context = this.canvas.getContext("2d", {
   willReadFrequently: true,
  });
  if (!context) return;
  this.ctx = context;
 }

 getContext() {
  return this.ctx;
 }

 _resize() {}

 setSize(width: number, height: number) {
  this.canvas.width = width;
  this.canvas.height = height;
  this._resize();
 }

 _dirty = false;
 setDirty(dirty: boolean) {
  this._dirty = dirty;
 }
 isDirty() {
  return this._dirty;
 }

 get width() {
  return this.canvas.width;
 }
 set width(width: number) {
  this.canvas.width = width;
  this._resize();
 }
 get height() {
  return this.canvas.height;
 }
 set height(height: number) {
  this.canvas.height = height;
  this._resize();
 }

 getData() {
  return this.ctx.getImageData(0, 0, this.width, this.height);
 }
 clear() {
  this.ctx.clearRect(0, 0, this.width, this.height);
 }
 measureText(text: string, font: CanvasFont) {
  font.setFont(this);
  return this.ctx.measureText(text);
 }
}
