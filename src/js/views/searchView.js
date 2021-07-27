class SearchView {
  _parentEl = document.querySelector('.search');
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementsByClassName('btn--sort')[0].innerHTML =
        ' &#8597; SORT';
      document.getElementsByClassName('btn--sort')[0].style.padding =
        '1rem 1.5rem';
      handler();
    });
  }

  // addHandlerTap(handler) {
  //   this._parentEl.addEventListener('keydown', function (e) {
  //     e.preventDefault();
  //     handler();
  //   });
  // }
}
export default new SearchView();
