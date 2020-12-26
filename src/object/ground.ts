import { gameConfig } from '../gameConfig';

export class Ground {
  private ground: Phaser.GameObjects.TileSprite[] = [];

  public create (scene: Phaser.Scene): void {
    const Y = Number(gameConfig.height) - Math.ceil(37 / 2);

    for (let X = 0; X <= Math.ceil(Number(gameConfig.width) / 37); X++) {
      this.ground.push(scene.add.tileSprite(X * 37, Y, 0, 0, 'ground'));
    }
  }

  public update (): void {
    this.ground.forEach((ground) => {
      ground.tilePositionX += 2;
    });
  }
}
