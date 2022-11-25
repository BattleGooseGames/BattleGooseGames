gdjs.winCode = {};
gdjs.winCode.GDNewTextObjects1= [];
gdjs.winCode.GDNewTextObjects2= [];
gdjs.winCode.GDNewText2Objects1= [];
gdjs.winCode.GDNewText2Objects2= [];
gdjs.winCode.GDNewTiledSpriteObjects1= [];
gdjs.winCode.GDNewTiledSpriteObjects2= [];

gdjs.winCode.conditionTrue_0 = {val:false};
gdjs.winCode.condition0IsTrue_0 = {val:false};
gdjs.winCode.condition1IsTrue_0 = {val:false};
gdjs.winCode.condition2IsTrue_0 = {val:false};


gdjs.winCode.mapOfGDgdjs_46winCode_46GDNewText2Objects1Objects = Hashtable.newFrom({"NewText2": gdjs.winCode.GDNewText2Objects1});
gdjs.winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.winCode.GDNewText2Objects1);

gdjs.winCode.condition0IsTrue_0.val = false;
gdjs.winCode.condition1IsTrue_0.val = false;
{
gdjs.winCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.winCode.condition0IsTrue_0.val ) {
{
gdjs.winCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_46winCode_46GDNewText2Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.winCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDNewText2Objects1.length = 0;
gdjs.winCode.GDNewText2Objects2.length = 0;
gdjs.winCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.winCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
return;

}

gdjs['winCode'] = gdjs.winCode;
