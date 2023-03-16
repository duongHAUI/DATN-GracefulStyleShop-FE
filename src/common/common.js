import msEnum from "./enum";

msEnum
const common = {
    formatPrice(price){
        if(!price) return '';
        return  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    },
    getColor(enumColor){
        switch(enumColor){
            case msEnum.enumColor.red : return 'red';
            case msEnum.enumColor.blue : return 'blue';
            case msEnum.enumColor.white : return 'white';
        }
    }
}

export default common;
