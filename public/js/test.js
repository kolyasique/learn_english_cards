const btns = document.querySelectorAll('.testBtn');
const divs = document.querySelectorAll('.testDiv');
const tests = document.querySelectorAll('.test');

let count = 0;
tests.forEach((el) => { el.innerHTML = `${count + 1} из ${divs.length}`; });

btns.forEach((btn) => {
  btn.addEventListener('click', async (event) => {
    try {
      event.preventDefault();
      const { data } = event.target.firstChild;
      const id = event.target.name;
      const obj = { id, answer: data };
      const div = document.getElementById(`w${id}`);
      const response = await fetch(`/test/${obj.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
      });
      const result = await response.json();
      if (result.answerCorrect) {
        div.style.color = 'rgb(24, 177, 24)';
        divs[count].style.border = '2px solid rgb(24, 177, 24)';
        setTimeout(() => {
          divs[count].setAttribute('style', 'display: none !important');
          divs[count + 1].style.display = 'block';
          count += 1;
          tests.forEach((el) => { el.innerHTML = `${count + 1} из ${divs.length}`; });
        }, 1200);
      }
      if (result.answerNotCorrect) {
        div.style.color = 'red';
        divs[count].style.border = '2px solid red';
        setTimeout(() => {
          divs[count].setAttribute('style', 'display: none !important');
          divs[count + 1].style.display = 'block';
          count += 1;
          tests.forEach((el) => { el.innerHTML = `${count + 1} из ${divs.length}`; });
        }, 1200);
      }
    } catch (error) {
      console.log(error);
    }
  });
});
