import { Vector2 } from "../Math/Vectors.js";
import { Context2D } from "./Context2D.js";
import { CanvasStyle } from "./Style/CanvasStyle.js";

class CanvasTextPainter {
 ctx: CanvasRenderingContext2D;
 constructor(public painter: CanvasPainter) {
  this.ctx = painter.contex.getContext();
 }
 fill(text: string) {
  this.painter.style.font.setFont(this.painter.contex);
  this.ctx.fillText(text, this.painter.position.x, this.painter.position.y);
  this.painter.contex.setDirty(true);
  return this.painter;
 }
 stroke(text: string) {
  this.painter.style.font.setFont(this.painter.contex);
  this.ctx.fillText(text, this.painter.position.x, this.painter.position.y);
  this.painter.contex.setDirty(true);
  return this.painter;
 }
}

class CanvasRectPainter {
 ctx: CanvasRenderingContext2D;
 constructor(public painter: CanvasPainter) {
  this.ctx = painter.contex.getContext();
 }
 dimensions = new Vector2();
 setDimensionn(width: number, height: number) {
  this.dimensions.set(width, height);
  return this;
 }
 fillAndStroke() {
  this.fill();
  this.stroke();
 }
 fill() {
  this.ctx.fillRect(
   this.painter.position.x,
   this.painter.position.y,
   this.dimensions.x,
   this.dimensions.y
  );
  this.painter.contex.setDirty(true);
  return this.painter;
 }
 stroke() {
  this.ctx.strokeRect(
   this.painter.position.x,
   this.painter.position.y,
   this.dimensions.x,
   this.dimensions.y
  );
  this.painter.contex.setDirty(true);
  return this.painter;
 }
 clear() {
  this.ctx.clearRect(
   this.painter.position.x,
   this.painter.position.y,
   this.dimensions.x,
   this.dimensions.y
  );
  this.painter.contex.setDirty(true);
  return this.painter;
 }
}

export class CanvasPainter {
 position = new Vector2();
 defaultStyle = new CanvasStyle();
 style = this.defaultStyle;

 rect: CanvasRectPainter;
 text: CanvasTextPainter;

 constructor(public contex: Context2D) {
  this.rect = new CanvasRectPainter(this);
  this.text = new CanvasTextPainter(this);
 }

 setPosition(x: number, y: number) {
  this.position.set(x, y);
  return this;
 }

 setAlpha(value: number) {
  this.contex.getContext().globalAlpha = value;
  return this;
 }

 setStyle(style: CanvasStyle = this.defaultStyle) {
  const ctx = this.contex.getContext();
  this.style = style;
  ctx.fillStyle = style.fill.get();
  ctx.strokeStyle = style.stroke.get();
  return this;
 }
 clearLine(fontSize: number, width: number) {
  const ctx = this.contex.getContext();
  ctx.fillStyle = this.style.bgColor.get();
  ctx.fillStyle = this.style.bgColor.get();
  ctx.fillRect(
   this.position.x,
   this.position.y - fontSize,
   width,
   fontSize + 5
  );
  this.contex.setDirty(true);
  return this;
 }
}
