const btns = document.querySelectorAll('.testBtn');
const divs = document.querySelectorAll('.testDiv');
const tests = document.querySelectorAll('.test');

let count = 0;
divs[count].setAttribute('style', 'display: block !important');
tests.forEach((el) => {
  el.innerHTML = `${count + 1} из ${divs.length}`;
});

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
        btns.forEach((el) => {
          el.disabled = 'true';
        });
        setTimeout(() => {
          divs[count].setAttribute('style', 'display: none !important');
          divs[count + 1].style.display = 'block';
          count += 1;
          tests.forEach((el) => {
            el.innerHTML = `${count + 1} из ${divs.length}`;
          });
          btns.forEach((el) => {
            el.removeAttribute('disabled');
          });
        }, 1200);
      }
      if (result.answerNotCorrect) {
        div.style.color = 'red';
        divs[count].style.border = '2px solid red';
        btns.forEach((el) => {
          el.disabled = 'true';
        });
        setTimeout(() => {
          divs[count].setAttribute('style', 'display: none !important');
          divs[count + 1].style.display = 'block';
          count += 1;
          tests.forEach((el) => {
            el.innerHTML = `${count + 1} из ${divs.length}`;
          });
          btns.forEach((el) => {
            el.removeAttribute('disabled');
          });
        }, 1200);
      }
      if (count === divs.length - 1) {
        const response = await fetch(`/test/${obj.id}/result`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        console.log('hellooo');
        const resultWrap = document.createElement('div');
        resultWrap.innerHTML = result.html;
        document.body.appendChild(resultWrap);
      }
    } catch (error) {
      console.log(error);
    }
  });
});
