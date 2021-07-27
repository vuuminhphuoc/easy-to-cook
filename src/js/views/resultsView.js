import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');

  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  addHandlerClick(handler) {
    document
      .querySelector('.search-results')
      .querySelector('.btn--sort')
      .addEventListener('click', function (e) {
        e.preventDefault();

        handler();
      });
  }
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ResultsView();
