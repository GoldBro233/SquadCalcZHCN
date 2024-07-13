import tippy, {followCursor} from "tippy.js";
import "tippy.js/dist/tippy.css";


export var tooltip_save;
export var tooltip_copied;
export var tooltip_mlrs;
export var tooltip_newUI;
export var tooltip_coordPreview;

tippy("#settings", {
    allowHTML: true,
    animation: "fade",
    content: "<i class=\"fa fa-check\"></i> 复制了 !",
    placement: "bottom",
    theme: "new",
    trigger: "manual",
    onShow(instance) {
        setTimeout(() => {
            instance.hide();
            instance.disable();
        }, 1500);
    }
});
tooltip_copied = document.querySelector("#settings")._tippy;
tooltip_copied.disable();

tippy("#bearingNum", {
    animation: "fade",
    placement: "bottom",
    allowHTML: true,
    touch: false,
    content: "方位角 </br> <span class=\"tooltipsubtext\">(向哪里瞄准)</span>",
    theme: "results",
});

tippy(".btn-delete", {
    animation: "fade",
    placement: "top",
    touch: false,
    content: "删除所有目标",
});

tippy(".btn-basemap", {
    animation: "fade",
    placement: "left",
    touch: false,
    content: "基础地图",
});

tippy(".btn-terrainmap", {
    animation: "fade",
    placement: "left",
    touch: false,
    content: "地形地图",
});

tippy(".btn-topomap", {
    animation: "fade",
    placement: "left",
    touch: false,
    content: "等高线地图",
});


tippy("#elevationNum", {
    animation: "fade",
    placement: "bottom",
    allowHTML: true,
    touch: false,
    content: "仰角 </br> <span class=\"tooltipsubtext\">(这将会射多远)</span>",
    theme: "results",
});

tippy("#savebutton i", {
    animation: "fade",
    allowHTML: true,
    content: "保存 </br> <span class=\"tooltipsubtext\"> (待会儿再用)</span>",
    interactiveDebounce: 75,
    placement: "bottom",
    theme: "results",
    touch: false,
});
tooltip_save = document.querySelector("#savebutton i")._tippy;

tippy("#preview", {
    animation: false,
    content: "B03-4-5",
    followCursor: true,
    plugins: [followCursor],
    touch: false,
    placement: "bottom",
    appendTo: document.querySelector("#preview"),
    theme: "preview",
    hideOnClick: false,
});
tooltip_coordPreview = document.querySelector("#preview")._tippy;

const targetDialog = document.getElementById("calcInformation");
tippy(".infSpreadTooltip", {
    animation: "fade",
    placement: "top",
    touch: false,
    appendTo: targetDialog,
    theme: "infTooltips",
    delay: [500, 0],
    content: "由于武器的角分（MOA）不精确和弹丸的长度，射击可能会呈椭圆形分布。",
});

const weaponDialog = document.getElementById("weaponInformation");
tippy(".infMOATooltip", {
    animation: "fade",
    placement: "top",
    touch: false,
    appendTo: weaponDialog,
    theme: "infTooltips",
    delay: [500, 0],

    content: "角分（MOA）在炮兵中用于衡量武器的不精确度，表示射击的散布范围。一个角分等于1度的1/60。",
});
tippy(".infVelocityTooltip", {
    animation: "fade",
    placement: "top",
    touch: false,
    appendTo: weaponDialog,
    theme: "infTooltips",
    delay: [500, 0],

    content: "初速是指弹丸离开枪管时的速度，在刚离开时进行测量。初速会影响射击的射程和准确性。",
});
tippy(".infHeightPaddingTooltip", {
    animation: "fade",
    placement: "top",
    touch: false,
    appendTo: weaponDialog,
    theme: "infTooltips",
    delay: [500, 0],

    content: "当将武器放置在地面以上（例如建筑物或桥梁上）时，请使用此字段来指定额外的高度。",
});
