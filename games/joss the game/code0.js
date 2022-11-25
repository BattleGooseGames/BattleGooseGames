gdjs.TitleCode = {};
gdjs.TitleCode.GDNewTextObjects1= [];
gdjs.TitleCode.GDNewTextObjects2= [];
gdjs.TitleCode.GDNewTextObjects3= [];
gdjs.TitleCode.GDNewText2Objects1= [];
gdjs.TitleCode.GDNewText2Objects2= [];
gdjs.TitleCode.GDNewText2Objects3= [];
gdjs.TitleCode.GDNewSpriteObjects1= [];
gdjs.TitleCode.GDNewSpriteObjects2= [];
gdjs.TitleCode.GDNewSpriteObjects3= [];
gdjs.TitleCode.GDlevel1Objects1= [];
gdjs.TitleCode.GDlevel1Objects2= [];
gdjs.TitleCode.GDlevel1Objects3= [];
gdjs.TitleCode.GDlevel2Objects1= [];
gdjs.TitleCode.GDlevel2Objects2= [];
gdjs.TitleCode.GDlevel2Objects3= [];
gdjs.TitleCode.GDlevel3Objects1= [];
gdjs.TitleCode.GDlevel3Objects2= [];
gdjs.TitleCode.GDlevel3Objects3= [];
gdjs.TitleCode.GDGrassObjects1= [];
gdjs.TitleCode.GDGrassObjects2= [];
gdjs.TitleCode.GDGrassObjects3= [];
gdjs.TitleCode.GDdirtObjects1= [];
gdjs.TitleCode.GDdirtObjects2= [];
gdjs.TitleCode.GDdirtObjects3= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};


gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDlevel1Objects2Objects = Hashtable.newFrom({"level1": gdjs.TitleCode.GDlevel1Objects2});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDlevel2Objects2Objects = Hashtable.newFrom({"level2": gdjs.TitleCode.GDlevel2Objects2});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDlevel3Objects1Objects = Hashtable.newFrom({"level3": gdjs.TitleCode.GDlevel3Objects1});
gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("level1"), gdjs.TitleCode.GDlevel1Objects2);

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDlevel1Objects2Objects, runtimeScene, true, false);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("level2"), gdjs.TitleCode.GDlevel2Objects2);

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDlevel2Objects2Objects, runtimeScene, true, false);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("level3"), gdjs.TitleCode.GDlevel3Objects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDlevel3Objects1Objects, runtimeScene, true, false);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


};gdjs.TitleCode.eventsList1 = function(runtimeScene) {

{


{
{gdjs.evtTools.camera.setCameraX(runtimeScene, 396, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 253, "", 0);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.TitleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TitleCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDNewTextObjects1.length = 0;
gdjs.TitleCode.GDNewTextObjects2.length = 0;
gdjs.TitleCode.GDNewTextObjects3.length = 0;
gdjs.TitleCode.GDNewText2Objects1.length = 0;
gdjs.TitleCode.GDNewText2Objects2.length = 0;
gdjs.TitleCode.GDNewText2Objects3.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects3.length = 0;
gdjs.TitleCode.GDlevel1Objects1.length = 0;
gdjs.TitleCode.GDlevel1Objects2.length = 0;
gdjs.TitleCode.GDlevel1Objects3.length = 0;
gdjs.TitleCode.GDlevel2Objects1.length = 0;
gdjs.TitleCode.GDlevel2Objects2.length = 0;
gdjs.TitleCode.GDlevel2Objects3.length = 0;
gdjs.TitleCode.GDlevel3Objects1.length = 0;
gdjs.TitleCode.GDlevel3Objects2.length = 0;
gdjs.TitleCode.GDlevel3Objects3.length = 0;
gdjs.TitleCode.GDGrassObjects1.length = 0;
gdjs.TitleCode.GDGrassObjects2.length = 0;
gdjs.TitleCode.GDGrassObjects3.length = 0;
gdjs.TitleCode.GDdirtObjects1.length = 0;
gdjs.TitleCode.GDdirtObjects2.length = 0;
gdjs.TitleCode.GDdirtObjects3.length = 0;

gdjs.TitleCode.eventsList1(runtimeScene);
return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
