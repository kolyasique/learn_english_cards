const btns = document.querySelectorAll('.testBtn');

btns.forEach((btn) => {
  btn.addEventListener('click', async (event) => {
    try {
      event.preventDefault();
      const { data } = event.target.firstChild;
      const id = event.target.name;
      const obj = { id, answer: data };
      const response = await fetch(`/test/${obj.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
      });
      const result = await response.json();

      const div = document.getElementById(`w${id}`);
      const mDiv = document.getElementById(`a${id}`);
      const nDiv = document.getElementById(`a${Number(id) + 1}`);

      if (result.answerCorrect) {
        console.log('YES');
        div.style.color = 'rgb(24, 177, 24)';
        mDiv.style.border = '2px solid rgb(24, 177, 24)';
        setTimeout(() => {
          mDiv.setAttribute('style', 'display: none !important');
          nDiv.style.display = 'block';
        }, 1200);
      }
      if (result.answerNotCorrect) {
        console.log('NO');
        div.style.color = 'red';
        mDiv.style.border = '2px solid red';
        setTimeout(() => {
          mDiv.setAttribute('style', 'display: none !important');
          nDiv.style.display = 'block';
        }, 1200);
      }
    } catch (error) {
      console.log(error);
    }
  });
});
