/**
 * 休眠指定时间
 * @param ms 休眠毫秒数
 */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default sleep;
