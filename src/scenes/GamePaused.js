import Phaser from 'phaser';

export default class GamePaused extends Phaser.Scene {
  constructor() {
    super('game-paused');
  }

  preload() {
    this.load.audio('gamePaused', './assets/sfx/spaceTrash1.ogg');
  }

  create() {
    const { width } = this.scale;
    const { height } = this.scale;

    this.add.text(width * 0.5, height * 0.5, 'GAME PAUSED', { fontSize: 48 }).setOrigin(0.5);

    this.scene.setActive(true);
    this.scene.setVisible(true);

    this.input.keyboard.once('keydown_SPACE', () => {
      this.scene.setActive(false);
      this.scene.setVisible(false);
      this.scene.resume('game');
    });

    this.sound.play('gamePaused');
  }
}
