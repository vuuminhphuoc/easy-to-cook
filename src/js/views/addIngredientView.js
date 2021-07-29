import View from './View.js';
import { state } from '../model.js';
class addIngredientView extends View {
  _parentElement = document.querySelector('.add_ingredient');

  addHandlerClickAddIngredients(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      if (state.addIngredient === 0) {
        document.querySelector('.column1').style.display = '';
        document.querySelector('.remove_ingredient').style.display = '';
      }
      if (state.addIngredient === 1) {
        document.querySelector('.column2').style.display = '';
        document.querySelector('.add_ingredient').style.display = 'none';
      }
      handler();
    });
  }
  addHandlerClickDeleteIngredients(handler) {
    document
      .querySelector('.remove_ingredient')
      .addEventListener('click', function (e) {
        e.preventDefault();
        if (state.addIngredient === 1) {
          document.querySelector('.column1').style.display = 'none';
          document.querySelector('.remove_ingredient').style.display = 'none';
        }
        if (state.addIngredient === 2) {
          document.querySelector('.column2').style.display = 'none';
          document.querySelector('.add_ingredient').style.display = '';
        }
        handler();
      });
  }
  _generateMarkup() {}
}
export default new addIngredientView();
