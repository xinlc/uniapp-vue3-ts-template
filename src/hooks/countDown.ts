/**
 * 倒计时
 */
const INTERVAL_TIME = 1000;
export function useCountDown(timeCount = 60) {
  const countShow = ref(false);
  const countDown = ref(timeCount);
  let timer: number | undefined;

  const resetCountDown = () => {
    clearInterval(timer);
    countShow.value = false;
    countDown.value = timeCount;
    timer = undefined;
  };

  const startCountDown = () => {
    if (timer != undefined) {
      return;
    }

    countShow.value = true;
    timer = setInterval(() => {
      if (countDown.value > 0 && countDown.value <= timeCount) {
        countDown.value--;
      } else {
        resetCountDown();
      }
    }, INTERVAL_TIME);
  };

  return {
    countShow,
    countDown,
    startCountDown,
    resetCountDown,
  };
}
