gdjs.Level_321Code = {};
gdjs.Level_321Code.GDJossObjects1_1final = [];

gdjs.Level_321Code.GDLeafguyObjects1_1final = [];

gdjs.Level_321Code.GDMowerObjects1_1final = [];

gdjs.Level_321Code.GDJossObjects1= [];
gdjs.Level_321Code.GDJossObjects2= [];
gdjs.Level_321Code.GDJossObjects3= [];
gdjs.Level_321Code.GDCarrotObjects1= [];
gdjs.Level_321Code.GDCarrotObjects2= [];
gdjs.Level_321Code.GDCarrotObjects3= [];
gdjs.Level_321Code.GDdirtObjects1= [];
gdjs.Level_321Code.GDdirtObjects2= [];
gdjs.Level_321Code.GDdirtObjects3= [];
gdjs.Level_321Code.GDgrassObjects1= [];
gdjs.Level_321Code.GDgrassObjects2= [];
gdjs.Level_321Code.GDgrassObjects3= [];
gdjs.Level_321Code.GDForestBackground2Objects1= [];
gdjs.Level_321Code.GDForestBackground2Objects2= [];
gdjs.Level_321Code.GDForestBackground2Objects3= [];
gdjs.Level_321Code.GDLeftArrowButtonObjects1= [];
gdjs.Level_321Code.GDLeftArrowButtonObjects2= [];
gdjs.Level_321Code.GDLeftArrowButtonObjects3= [];
gdjs.Level_321Code.GDRightArrowButtonObjects1= [];
gdjs.Level_321Code.GDRightArrowButtonObjects2= [];
gdjs.Level_321Code.GDRightArrowButtonObjects3= [];
gdjs.Level_321Code.GDTopArrowButtonObjects1= [];
gdjs.Level_321Code.GDTopArrowButtonObjects2= [];
gdjs.Level_321Code.GDTopArrowButtonObjects3= [];
gdjs.Level_321Code.GDMowerObjects1= [];
gdjs.Level_321Code.GDMowerObjects2= [];
gdjs.Level_321Code.GDMowerObjects3= [];
gdjs.Level_321Code.GDLeafguyObjects1= [];
gdjs.Level_321Code.GDLeafguyObjects2= [];
gdjs.Level_321Code.GDLeafguyObjects3= [];
gdjs.Level_321Code.GDcarrotbarObjects1= [];
gdjs.Level_321Code.GDcarrotbarObjects2= [];
gdjs.Level_321Code.GDcarrotbarObjects3= [];
gdjs.Level_321Code.GDdecorObjects1= [];
gdjs.Level_321Code.GDdecorObjects2= [];
gdjs.Level_321Code.GDdecorObjects3= [];
gdjs.Level_321Code.GDhidingbooshObjects1= [];
gdjs.Level_321Code.GDhidingbooshObjects2= [];
gdjs.Level_321Code.GDhidingbooshObjects3= [];
gdjs.Level_321Code.GDhouseObjects1= [];
gdjs.Level_321Code.GDhouseObjects2= [];
gdjs.Level_321Code.GDhouseObjects3= [];
gdjs.Level_321Code.GDstarbucksObjects1= [];
gdjs.Level_321Code.GDstarbucksObjects2= [];
gdjs.Level_321Code.GDstarbucksObjects3= [];
gdjs.Level_321Code.GDNewParticlesEmitterObjects1= [];
gdjs.Level_321Code.GDNewParticlesEmitterObjects2= [];
gdjs.Level_321Code.GDNewParticlesEmitterObjects3= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeftArrowButtonObjects2Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.Level_321Code.GDLeftArrowButtonObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRightArrowButtonObjects2Objects = Hashtable.newFrom({"RightArrowButton": gdjs.Level_321Code.GDRightArrowButtonObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTopArrowButtonObjects1Objects = Hashtable.newFrom({"TopArrowButton": gdjs.Level_321Code.GDTopArrowButtonObjects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.Level_321Code.GDLeftArrowButtonObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeftArrowButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.Level_321Code.GDRightArrowButtonObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRightArrowButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects2[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.Level_321Code.GDTopArrowButtonObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTopArrowButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects1Objects = Hashtable.newFrom({"Joss": gdjs.Level_321Code.GDJossObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDhidingbooshObjects1Objects = Hashtable.newFrom({"hidingboosh": gdjs.Level_321Code.GDhidingbooshObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects1Objects = Hashtable.newFrom({"Joss": gdjs.Level_321Code.GDJossObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDhidingbooshObjects1Objects = Hashtable.newFrom({"hidingboosh": gdjs.Level_321Code.GDhidingbooshObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects2Objects = Hashtable.newFrom({"Joss": gdjs.Level_321Code.GDJossObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMowerObjects2Objects = Hashtable.newFrom({"Mower": gdjs.Level_321Code.GDMowerObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects2Objects = Hashtable.newFrom({"Joss": gdjs.Level_321Code.GDJossObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeafguyObjects2Objects = Hashtable.newFrom({"Leafguy": gdjs.Level_321Code.GDLeafguyObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects1Objects = Hashtable.newFrom({"Joss": gdjs.Level_321Code.GDJossObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDhidingbooshObjects1Objects = Hashtable.newFrom({"hidingboosh": gdjs.Level_321Code.GDhidingbooshObjects1});
gdjs.Level_321Code.mapOfEmptyGDJossObjects = Hashtable.newFrom({"Joss": []});
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);
gdjs.copyArray(runtimeScene.getObjects("carrotbar"), gdjs.Level_321Code.GDcarrotbarObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level_321Code.GDJossObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDJossObjects1[0].getCenterXInScene()), "", 0);
}{for(var i = 0, len = gdjs.Level_321Code.GDcarrotbarObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDcarrotbarObjects1[i].setWidth((( gdjs.Level_321Code.GDJossObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDJossObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJossObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJossObjects1[k] = gdjs.Level_321Code.GDJossObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJossObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJossObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDJossObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDJossObjects1[k] = gdjs.Level_321Code.GDJossObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJossObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJossObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJossObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJossObjects1[k] = gdjs.Level_321Code.GDJossObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJossObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJossObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDJossObjects1[k] = gdjs.Level_321Code.GDJossObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJossObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJossObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJossObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDJossObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJossObjects1[k] = gdjs.Level_321Code.GDJossObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJossObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJossObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].setAnimationName("air");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJossObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJossObjects1[k] = gdjs.Level_321Code.GDJossObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJossObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJossObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJossObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJossObjects1[k] = gdjs.Level_321Code.GDJossObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJossObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJossObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].flipX(false);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.Level_321Code.GDLeftArrowButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.Level_321Code.GDRightArrowButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.Level_321Code.GDTopArrowButtonObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDLeftArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLeftArrowButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRightArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRightArrowButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDTopArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTopArrowButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);
gdjs.copyArray(runtimeScene.getObjects("hidingboosh"), gdjs.Level_321Code.GDhidingbooshObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDhidingbooshObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJossObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].setOpacity(50);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);
gdjs.copyArray(runtimeScene.getObjects("hidingboosh"), gdjs.Level_321Code.GDhidingbooshObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDhidingbooshObjects1Objects, true, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJossObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].setOpacity(500);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hidingboosh"), gdjs.Level_321Code.GDhidingbooshObjects1);
gdjs.Level_321Code.GDJossObjects1.length = 0;

gdjs.Level_321Code.GDLeafguyObjects1.length = 0;

gdjs.Level_321Code.GDMowerObjects1.length = 0;


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.GDJossObjects1_1final.length = 0;gdjs.Level_321Code.GDLeafguyObjects1_1final.length = 0;gdjs.Level_321Code.GDMowerObjects1_1final.length = 0;gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects2);
gdjs.copyArray(runtimeScene.getObjects("Mower"), gdjs.Level_321Code.GDMowerObjects2);
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMowerObjects2Objects, false, runtimeScene, false);
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDJossObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDJossObjects1_1final.indexOf(gdjs.Level_321Code.GDJossObjects2[j]) === -1 )
            gdjs.Level_321Code.GDJossObjects1_1final.push(gdjs.Level_321Code.GDJossObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDMowerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDMowerObjects1_1final.indexOf(gdjs.Level_321Code.GDMowerObjects2[j]) === -1 )
            gdjs.Level_321Code.GDMowerObjects1_1final.push(gdjs.Level_321Code.GDMowerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects2);
gdjs.copyArray(runtimeScene.getObjects("Leafguy"), gdjs.Level_321Code.GDLeafguyObjects2);
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeafguyObjects2Objects, false, runtimeScene, false);
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDJossObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDJossObjects1_1final.indexOf(gdjs.Level_321Code.GDJossObjects2[j]) === -1 )
            gdjs.Level_321Code.GDJossObjects1_1final.push(gdjs.Level_321Code.GDJossObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level_321Code.GDLeafguyObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDLeafguyObjects1_1final.indexOf(gdjs.Level_321Code.GDLeafguyObjects2[j]) === -1 )
            gdjs.Level_321Code.GDLeafguyObjects1_1final.push(gdjs.Level_321Code.GDLeafguyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDJossObjects1_1final, gdjs.Level_321Code.GDJossObjects1);
gdjs.copyArray(gdjs.Level_321Code.GDLeafguyObjects1_1final, gdjs.Level_321Code.GDLeafguyObjects1);
gdjs.copyArray(gdjs.Level_321Code.GDMowerObjects1_1final, gdjs.Level_321Code.GDMowerObjects1);
}
}
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDJossObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDhidingbooshObjects1Objects, true, runtimeScene, false);
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJossObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].getBehavior("Health").Hit(8, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("carrotbar"), gdjs.Level_321Code.GDcarrotbarObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDcarrotbarObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDcarrotbarObjects1[i].getWidth() == 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDcarrotbarObjects1[k] = gdjs.Level_321Code.GDcarrotbarObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDcarrotbarObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfEmptyGDJossObjects) == 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJossObjects1[i].getX() >= 4630 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJossObjects1[k] = gdjs.Level_321Code.GDJossObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJossObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win", false);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "background");
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leafguy"), gdjs.Level_321Code.GDLeafguyObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDLeafguyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDLeafguyObjects1[i].isFlippedX()) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDLeafguyObjects1[k] = gdjs.Level_321Code.GDLeafguyObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDLeafguyObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDLeafguyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewParticlesEmitter"), gdjs.Level_321Code.GDNewParticlesEmitterObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDNewParticlesEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDNewParticlesEmitterObjects1[i].rotateTowardAngle(175, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDNewParticlesEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDNewParticlesEmitterObjects1[i].putAround((( gdjs.Level_321Code.GDLeafguyObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDLeafguyObjects1[0].getCenterXInScene()), (( gdjs.Level_321Code.GDLeafguyObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDLeafguyObjects1[0].getCenterYInScene()), 6, 175);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leafguy"), gdjs.Level_321Code.GDLeafguyObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDLeafguyObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDLeafguyObjects1[i].isFlippedX() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDLeafguyObjects1[k] = gdjs.Level_321Code.GDLeafguyObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDLeafguyObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDLeafguyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewParticlesEmitter"), gdjs.Level_321Code.GDNewParticlesEmitterObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDNewParticlesEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDNewParticlesEmitterObjects1[i].rotateTowardAngle(2, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDNewParticlesEmitterObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDNewParticlesEmitterObjects1[i].putAround((( gdjs.Level_321Code.GDLeafguyObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDLeafguyObjects1[0].getCenterXInScene()), (( gdjs.Level_321Code.GDLeafguyObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDLeafguyObjects1[0].getCenterYInScene()), 6, 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joss"), gdjs.Level_321Code.GDJossObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDJossObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJossObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDJossObjects1[k] = gdjs.Level_321Code.GDJossObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJossObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDJossObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDJossObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJossObjects1[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDJossObjects1.length = 0;
gdjs.Level_321Code.GDJossObjects2.length = 0;
gdjs.Level_321Code.GDJossObjects3.length = 0;
gdjs.Level_321Code.GDCarrotObjects1.length = 0;
gdjs.Level_321Code.GDCarrotObjects2.length = 0;
gdjs.Level_321Code.GDCarrotObjects3.length = 0;
gdjs.Level_321Code.GDdirtObjects1.length = 0;
gdjs.Level_321Code.GDdirtObjects2.length = 0;
gdjs.Level_321Code.GDdirtObjects3.length = 0;
gdjs.Level_321Code.GDgrassObjects1.length = 0;
gdjs.Level_321Code.GDgrassObjects2.length = 0;
gdjs.Level_321Code.GDgrassObjects3.length = 0;
gdjs.Level_321Code.GDForestBackground2Objects1.length = 0;
gdjs.Level_321Code.GDForestBackground2Objects2.length = 0;
gdjs.Level_321Code.GDForestBackground2Objects3.length = 0;
gdjs.Level_321Code.GDLeftArrowButtonObjects1.length = 0;
gdjs.Level_321Code.GDLeftArrowButtonObjects2.length = 0;
gdjs.Level_321Code.GDLeftArrowButtonObjects3.length = 0;
gdjs.Level_321Code.GDRightArrowButtonObjects1.length = 0;
gdjs.Level_321Code.GDRightArrowButtonObjects2.length = 0;
gdjs.Level_321Code.GDRightArrowButtonObjects3.length = 0;
gdjs.Level_321Code.GDTopArrowButtonObjects1.length = 0;
gdjs.Level_321Code.GDTopArrowButtonObjects2.length = 0;
gdjs.Level_321Code.GDTopArrowButtonObjects3.length = 0;
gdjs.Level_321Code.GDMowerObjects1.length = 0;
gdjs.Level_321Code.GDMowerObjects2.length = 0;
gdjs.Level_321Code.GDMowerObjects3.length = 0;
gdjs.Level_321Code.GDLeafguyObjects1.length = 0;
gdjs.Level_321Code.GDLeafguyObjects2.length = 0;
gdjs.Level_321Code.GDLeafguyObjects3.length = 0;
gdjs.Level_321Code.GDcarrotbarObjects1.length = 0;
gdjs.Level_321Code.GDcarrotbarObjects2.length = 0;
gdjs.Level_321Code.GDcarrotbarObjects3.length = 0;
gdjs.Level_321Code.GDdecorObjects1.length = 0;
gdjs.Level_321Code.GDdecorObjects2.length = 0;
gdjs.Level_321Code.GDdecorObjects3.length = 0;
gdjs.Level_321Code.GDhidingbooshObjects1.length = 0;
gdjs.Level_321Code.GDhidingbooshObjects2.length = 0;
gdjs.Level_321Code.GDhidingbooshObjects3.length = 0;
gdjs.Level_321Code.GDhouseObjects1.length = 0;
gdjs.Level_321Code.GDhouseObjects2.length = 0;
gdjs.Level_321Code.GDhouseObjects3.length = 0;
gdjs.Level_321Code.GDstarbucksObjects1.length = 0;
gdjs.Level_321Code.GDstarbucksObjects2.length = 0;
gdjs.Level_321Code.GDstarbucksObjects3.length = 0;
gdjs.Level_321Code.GDNewParticlesEmitterObjects1.length = 0;
gdjs.Level_321Code.GDNewParticlesEmitterObjects2.length = 0;
gdjs.Level_321Code.GDNewParticlesEmitterObjects3.length = 0;

gdjs.Level_321Code.eventsList1(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
