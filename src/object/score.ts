import { gameConfig } from '../gameConfig';
import { GameScene } from '../gameScene';

export class Score {
  public score: Phaser.GameObjects.Text;

  public create (scene: GameScene): void {
    this.score = scene.add
      .text(Number(gameConfig.width) / 2, 100, '')
      .setFontFamily('flappyBirdFont')
      .setFontSize(64)
      .setOrigin(0.5, 0.5);

    this.score.setText('0');
  }

  public setScore (score: number) {
    this.score.setText(score.toString());
  }
}
