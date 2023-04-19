$('#fourth-continue-button').on('click', function () {
  showExitIntent = true;
});

const CookieService = {
  setCookie(name, value, days) {
    let expires = '';

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + (value || '') + expires + ';';
  },

  getCookie(name) {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
      if (cookie.indexOf(name + '=') > -1) {
        return cookie.split('=')[1];
      }
    }

    return null;
  },
};

const exit = (e) => {
  const shouldExit = e.target.className === 'close'; // user clicks on the close icon

  if (shouldExit) {
    exitIntentElement.style.display = 'none';
    showExitIntent = false;
  }
};

const mouseEvent = (e) => {
  const shouldShowExitIntent = !e.toElement && !e.relatedTarget && e.clientY < 10;

  if (shouldShowExitIntent && showExitIntent) {
    console.log('mouse is out of range');
    document.removeEventListener('mouseout', mouseEvent);
    exitIntentElement.style.display = 'flex';
    $('.business-body').css('overflow', 'hidden');

    CookieService.setCookie('exitIntentShown', true, 2);
  }
};

if (!CookieService.getCookie('exitIntentShown')) {
  setTimeout(() => {
    document.addEventListener('mouseout', mouseEvent);
    document.addEventListener('click', exit);
    // document
    //   .querySelector(".exit-intent-popup")
    //   .addEventListener("click", exit);
  }, 2000);
}

var showExitIntent = false;
var exitIntentElement = document.querySelector('.exit-intent');
