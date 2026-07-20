const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
text.textContent = `カラーコード：${color.value}`;
};

// カラーピッカーが変更されたら　colorBgを発動させる
color.addEventListener('input', colorBg);