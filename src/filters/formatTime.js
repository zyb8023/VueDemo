import createZero from './createZero';
export const formatTime = (time) => {
    let d = new Date();
    d.setTime(time);
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    return ` ${createZero(year)} 年 ${createZero(month)} 月 ${createZero(day)} 日`
}