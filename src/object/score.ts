import { gameConfig } from '../gameConfig';
import { GameScene } from '../gameScene';

export class Score {
  score: Phaser.GameObjects.Text;

  public create (scene: GameScene): void {
    this.score = scene.add
      .text(Number(gameConfig.width) / 2, 100, '')
      .setFontFamily('flappyBirdFont')
      .setFontSize(64)
      .setOrigin(0.5, 0.5);

    this.score.setText('0');
  }
}
