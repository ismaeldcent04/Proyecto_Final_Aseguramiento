import React , { Component } from "react";
import "./SearchBarStyle.css"

export default class SearchBar extends Component {
    render() {

        return(

            <div class="s013">
            <form>
              <fieldset>
                <legend>FIND RESTAURANTS</legend>
              </fieldset>
              <div class="inner-form">
                <div class="left">
                  <div class="input-wrap first">
                    <div class="input-field first">
                      <label>WHAT</label>
                      <input type="text" placeholder="ex: burgers, pizza, sushi, pasta" />
                    </div>
                  </div>
                  <div class="input-wrap second">
                    <div class="input-field second">
                      <label>RATING</label>
                      <div class="input-select">
                        <select>
                          <option placeholder="">5 estrellas</option>
                          <option>4 estrellas</option>
                          <option>3 estrellas</option>
                          <option>2 estrellas</option>
                          <option>1 estrella</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn-search" type="button">SEARCH</button>
              </div>
            </form>
          </div>

  )
 }
}