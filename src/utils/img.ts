import { randomIntegerInRange, randomRgbColor } from '.';

interface IImageVerifyOptions {
  /**
   * canvas dom 对象
   */
  dom: HTMLCanvasElement;
  /**
   * canvas宽度
   */
  width: number;
  /**
   * canvas高度
   */
  height: number;
}

/**
 * 绘制图形验证码
 * @returns 随机验证码
 */
export function drawImageVerify({ dom, width = 152, height = 40 }: IImageVerifyOptions) {
  let imgCode = '';

  const NUMBER_STRING = '0123456789';

  const ctx = dom.getContext('2d');
  if (!ctx) return imgCode;

  ctx.fillStyle = randomRgbColor(180, 230);
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 4; i += 1) {
    const text = NUMBER_STRING[randomIntegerInRange(0, NUMBER_STRING.length)];
    imgCode += text;
    const fontSize = randomIntegerInRange(18, 41);
    const deg = randomIntegerInRange(-30, 30);
    ctx.font = `${fontSize}px Simhei`;
    ctx.textBaseline = 'top';
    ctx.fillStyle = randomRgbColor(80, 150);
    ctx.save();
    ctx.translate(30 * i + 23, 15);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(text, -15 + 5, -15);
    ctx.restore();
  }
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(randomIntegerInRange(0, width), randomIntegerInRange(0, height));
    ctx.lineTo(randomIntegerInRange(0, width), randomIntegerInRange(0, height));
    ctx.strokeStyle = randomRgbColor(180, 230);
    ctx.closePath();
    ctx.stroke();
  }
  for (let i = 0; i < 41; i += 1) {
    ctx.beginPath();
    ctx.arc(randomIntegerInRange(0, width), randomIntegerInRange(0, height), 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = randomRgbColor(150, 200);
    ctx.fill();
  }

  return imgCode;
}
