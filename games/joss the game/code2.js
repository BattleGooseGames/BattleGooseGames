gdjs.game_32overCode = {};
gdjs.game_32overCode.GDJossObjects1= [];
gdjs.game_32overCode.GDJossObjects2= [];
gdjs.game_32overCode.GDCarrotObjects1= [];
gdjs.game_32overCode.GDCarrotObjects2= [];
gdjs.game_32overCode.GDdirtObjects1= [];
gdjs.game_32overCode.GDdirtObjects2= [];
gdjs.game_32overCode.GDgrassObjects1= [];
gdjs.game_32overCode.GDgrassObjects2= [];
gdjs.game_32overCode.GDForestBackground2Objects1= [];
gdjs.game_32overCode.GDForestBackground2Objects2= [];
gdjs.game_32overCode.GDLeftArrowButtonObjects1= [];
gdjs.game_32overCode.GDLeftArrowButtonObjects2= [];
gdjs.game_32overCode.GDRightArrowButtonObjects1= [];
gdjs.game_32overCode.GDRightArrowButtonObjects2= [];
gdjs.game_32overCode.GDTopArrowButtonObjects1= [];
gdjs.game_32overCode.GDTopArrowButtonObjects2= [];
gdjs.game_32overCode.GDMowerObjects1= [];
gdjs.game_32overCode.GDMowerObjects2= [];
gdjs.game_32overCode.GDLeafguyObjects1= [];
gdjs.game_32overCode.GDLeafguyObjects2= [];
gdjs.game_32overCode.GDcarrotbarObjects1= [];
gdjs.game_32overCode.GDcarrotbarObjects2= [];
gdjs.game_32overCode.GDdecorObjects1= [];
gdjs.game_32overCode.GDdecorObjects2= [];
gdjs.game_32overCode.GDhidingbooshObjects1= [];
gdjs.game_32overCode.GDhidingbooshObjects2= [];
gdjs.game_32overCode.GDhouseObjects1= [];
gdjs.game_32overCode.GDhouseObjects2= [];
gdjs.game_32overCode.GDNewTextObjects1= [];
gdjs.game_32overCode.GDNewTextObjects2= [];

gdjs.game_32overCode.conditionTrue_0 = {val:false};
gdjs.game_32overCode.condition0IsTrue_0 = {val:false};
gdjs.game_32overCode.condition1IsTrue_0 = {val:false};
gdjs.game_32overCode.condition2IsTrue_0 = {val:false};


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.game_32overCode.GDJossObjects1);

gdjs.game_32overCode.condition0IsTrue_0.val = false;
gdjs.game_32overCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_32overCode.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDJossObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.game_32overCode.condition0IsTrue_0.val = true;
        gdjs.game_32overCode.GDJossObjects1[k] = gdjs.game_32overCode.GDJossObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDJossObjects1.length = k;}if ( gdjs.game_32overCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.game_32overCode.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDJossObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.game_32overCode.condition1IsTrue_0.val = true;
        gdjs.game_32overCode.GDJossObjects1[k] = gdjs.game_32overCode.GDJossObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDJossObjects1.length = k;}}
if (gdjs.game_32overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_32overCode.GDJossObjects1 */
{for(var i = 0, len = gdjs.game_32overCode.GDJossObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDJossObjects1[i].setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.game_32overCode.GDJossObjects1);

gdjs.game_32overCode.condition0IsTrue_0.val = false;
gdjs.game_32overCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_32overCode.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDJossObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.game_32overCode.condition0IsTrue_0.val = true;
        gdjs.game_32overCode.GDJossObjects1[k] = gdjs.game_32overCode.GDJossObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDJossObjects1.length = k;}if ( gdjs.game_32overCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.game_32overCode.GDJossObjects1.length;i<l;++i) {
    if ( !(gdjs.game_32overCode.GDJossObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.game_32overCode.condition1IsTrue_0.val = true;
        gdjs.game_32overCode.GDJossObjects1[k] = gdjs.game_32overCode.GDJossObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDJossObjects1.length = k;}}
if (gdjs.game_32overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_32overCode.GDJossObjects1 */
{for(var i = 0, len = gdjs.game_32overCode.GDJossObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDJossObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.game_32overCode.GDJossObjects1);

gdjs.game_32overCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_32overCode.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDJossObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.game_32overCode.condition0IsTrue_0.val = true;
        gdjs.game_32overCode.GDJossObjects1[k] = gdjs.game_32overCode.GDJossObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDJossObjects1.length = k;}if (gdjs.game_32overCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32overCode.GDJossObjects1 */
{for(var i = 0, len = gdjs.game_32overCode.GDJossObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDJossObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.game_32overCode.GDJossObjects1);

gdjs.game_32overCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_32overCode.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDJossObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.game_32overCode.condition0IsTrue_0.val = true;
        gdjs.game_32overCode.GDJossObjects1[k] = gdjs.game_32overCode.GDJossObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDJossObjects1.length = k;}if (gdjs.game_32overCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32overCode.GDJossObjects1 */
{for(var i = 0, len = gdjs.game_32overCode.GDJossObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDJossObjects1[i].flipX(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.game_32overCode.GDJossObjects1);
gdjs.copyArray(runtimeScene.getObjects("house"), gdjs.game_32overCode.GDhouseObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.game_32overCode.GDhouseObjects1.length === 0 ) ? 0 :gdjs.game_32overCode.GDhouseObjects1[0].getPointX("")), "", 0);
}{for(var i = 0, len = gdjs.game_32overCode.GDJossObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDJossObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.game_32overCode.GDJossObjects1);

gdjs.game_32overCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_32overCode.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDJossObjects1[i].getX() <= 233 ) {
        gdjs.game_32overCode.condition0IsTrue_0.val = true;
        gdjs.game_32overCode.GDJossObjects1[k] = gdjs.game_32overCode.GDJossObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDJossObjects1.length = k;}if (gdjs.game_32overCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDJossObjects1.length = 0;
gdjs.game_32overCode.GDJossObjects2.length = 0;
gdjs.game_32overCode.GDCarrotObjects1.length = 0;
gdjs.game_32overCode.GDCarrotObjects2.length = 0;
gdjs.game_32overCode.GDdirtObjects1.length = 0;
gdjs.game_32overCode.GDdirtObjects2.length = 0;
gdjs.game_32overCode.GDgrassObjects1.length = 0;
gdjs.game_32overCode.GDgrassObjects2.length = 0;
gdjs.game_32overCode.GDForestBackground2Objects1.length = 0;
gdjs.game_32overCode.GDForestBackground2Objects2.length = 0;
gdjs.game_32overCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.game_32overCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.game_32overCode.GDRightArrowButtonObjects1.length = 0;
gdjs.game_32overCode.GDRightArrowButtonObjects2.length = 0;
gdjs.game_32overCode.GDTopArrowButtonObjects1.length = 0;
gdjs.game_32overCode.GDTopArrowButtonObjects2.length = 0;
gdjs.game_32overCode.GDMowerObjects1.length = 0;
gdjs.game_32overCode.GDMowerObjects2.length = 0;
gdjs.game_32overCode.GDLeafguyObjects1.length = 0;
gdjs.game_32overCode.GDLeafguyObjects2.length = 0;
gdjs.game_32overCode.GDcarrotbarObjects1.length = 0;
gdjs.game_32overCode.GDcarrotbarObjects2.length = 0;
gdjs.game_32overCode.GDdecorObjects1.length = 0;
gdjs.game_32overCode.GDdecorObjects2.length = 0;
gdjs.game_32overCode.GDhidingbooshObjects1.length = 0;
gdjs.game_32overCode.GDhidingbooshObjects2.length = 0;
gdjs.game_32overCode.GDhouseObjects1.length = 0;
gdjs.game_32overCode.GDhouseObjects2.length = 0;
gdjs.game_32overCode.GDNewTextObjects1.length = 0;
gdjs.game_32overCode.GDNewTextObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
