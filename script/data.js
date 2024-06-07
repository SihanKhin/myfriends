const friImgObject = [
    "image/94745055_130131491961394_4673305720949571584_n.jpg",
    "image/240665810_533703011195051_3192011331904583219_n.jpg",
    "image/262116726_1070152977070174_6901871806750228563_n.jpg",
    "image/308439503_1129228894374993_8495506636540087956_n.jpg",
    "image/348855769_1203774616951800_8602052301936367287_n.jpg",
    "image/391530637_1744377019337717_9110189756245872552_n.jpg",
    "image/photo_2024-06-06_13-55-02.jpg",
    "image/447196717_431002346385699_7292344898374047271_n.jpg",
    "image/photo_2024-06-06_08-12-17.jpg",
    "image/photo_2024-06-06_08-18-03.jpg"
];
const friTextObject = [
    "ប្រូវ័នបែកម៉ា",
    "ប៉ូវប្លោកធំ",
    "ប្រូវ៉ាន់មែនFakeតែក្បត់ស្នេហ៏និងក្តតូច",
    "ប្រូឆវ័នកាកបត",
    "ប្រូខេនបែកម៉ា",
    "ប្រូវីរាក់សុីច្រើន",
    "ប្រូហាវក្តធំ",
    "ប្រូម៉េងមនុស្សជរ",
    "ប្រូឈុនពូកែងរ",
    "ប្រូរិទ្ធស្ទាវតាកែវ"
];

const render = ()=>{
    let currentTextIndex = 0;
    let currentImgIndex = 0;
    document.querySelector(".next-btn").addEventListener("click",()=>{
        document.querySelector(".js-text").innerHTML = friTextObject[currentTextIndex];
        currentTextIndex = (currentTextIndex + 1) % friTextObject.length;
        document.querySelector("img").src = friImgObject[currentImgIndex];
        currentImgIndex = (currentImgIndex+1) % friImgObject.length;
    });
    document.querySelector(".pre-btn").addEventListener("click",()=>{
        document.querySelector(".js-text").innerHTML = friTextObject[currentTextIndex];
        currentTextIndex = (currentTextIndex - 1 + friTextObject.length) % friTextObject.length;
    
         document.querySelector("img").src = friImgObject[currentImgIndex];
        currentImgIndex = (currentImgIndex - 1 + friImgObject.length) % friImgObject.length;
    });
}
render();
