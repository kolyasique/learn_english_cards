const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    console.log(card.className);
    if (card.className !== 'card-done') {
      if (!card.style.transform) {
        card.style.transform = 'rotateY(180deg)';
      } else if (card.style.transform === 'rotateY(180deg)') {
        card.style.transform = 'none';
      } else {
        card.style.transform = 'rotateY(180deg)';
      }
    } else { card.style.transform = 'none'; }
  });
});

const wordsToRemember = document.querySelector('.wordsPage');
wordsToRemember.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.id === 'buttonDone') {
    const { wordId } = event.target.dataset;
    const { engId } = event.target.dataset;
    const { rusId } = event.target.dataset;
    const { themeId } = event.target.dataset;
    console.log(wordId, engId, rusId);
    const thisCard = document.getElementById(`card-${wordId}`);
    console.log(thisCard);

    const response = await fetch(`/words/remember/${themeId}/${wordId}`, {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        status: true,
      }),
    });
    console.log(response);

    if (response.status === 200) {

      document.getElementById(`card-${wordId}`).classList.remove('card')
      document.getElementById(`card-${wordId}`).classList.add('card-done')
      document.getElementById(`card-${wordId}`).innerHTML = ` 
      <div >${engId} </div>
      <hr/>
      <div className='half'>${rusId}</div>
      </>`
    }
  
  }
});
