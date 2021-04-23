var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 50 },
                { "type": "sawblade", "x": 700, "y": groundY - 30 },
                { "type": "sawblade", "x": 1000, "y": groundY - 40 },
                { "type": "reward", "x": 1500, "y": groundY - 60},
                { "type": "customObstacle", "x": 850, "y": groundY - 20},
                { "type": "Enemy", "x": 1200, "y": groundY - 50},
            ]
        };
        for (var i = 0; i < levelData.gameItems.length;i++) {
            obj = levelData.gameItems[i];
            objX = obj.x;
            objY = obj.y;
            objType = obj.type;
            if (objType === "sawblade"){
                createSawBlade(objX, objY);
            }
            else if (objType === "Enemy"){
                createEnemy(objX, objY);
            }
            else if (objType === "reward"){
                createHealth(objX, objY);
            }
            else if (objType === "customObstacle"){
                createMyObstacle(objX, objY);
            }
        }
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);
        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x,y){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;    

        
    }
    
    //add arguments to these above!!
    
     function createMyObstacle(x,y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap('img/angrydog.png');
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.scaleX = .05
        obstacleImage.scaleY = .05
        obstacleImage.x = -25;
        obstacleImage.y = -25;    
};
    
         
  
//////customize the enemy tonight!!!!!

    function createEnemy(x,y){
       var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.bitmap('img/dogenemy.png');
        redSquare.x = -25;
        redSquare.y = -25;
        redSquare.scaleX = 0.2;
        redSquare.scaleY = 0.2;
        enemy.addChild(redSquare);
        
        enemy.x = x;
        enemy.y = y;
            
        game.addGameItem(enemy);
        enemy.velocityX = -3;
        enemy.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        game.changeIntegrity(-10)
        game.increaseScore(100);
        enemy.fadeOut();
    };
     enemy.onProjectileCollision = function() {
        console.log('Halle has hit the enemy');
        game.changeIntegrity(-10)
        enemy.fadeOut();
    };
};
     
    
    function createHealth(x,y){
       var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.bitmap('img/health.png');
        redSquare.x = -25;
        redSquare.y = -25;
        redSquare.scaleX = 0.08;
        redSquare.scaleY = 0.08;
        enemy.addChild(redSquare);
        
        enemy.x = x;
        enemy.y = y;
            
        game.addGameItem(enemy);
        enemy.velocityX = -3;
        enemy.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        game.changeIntegrity(50)
        game.increaseScore(100);
        enemy.fadeOut();
        };
       
    };

   
}
         
    //enemy.onPlayerCollision = function() {
    //console.log('The enemy has hit Halle');
    
     
         
         
     // DO NOT EDIT CODE BELOW HERE
    

   
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
