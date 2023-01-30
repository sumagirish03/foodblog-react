import React from "react";
import malleshwaram from "../assets/malleshwaram.jpg";
import jayanagar from "../assets/jayanagar.jpeg";
import vvpuram from "../assets/vvpuram.jpeg";
import vijaynagar from "../assets/vijaynagar.jpg";

function Articles() {
  return (
    <div class="section-center">
      <article class="blog-item">
        <img src={malleshwaram} alt="Malleshwaram" class="blog-thumbnail" />
        <div class="blog-info">
          <header>
            <h4>Malleshwaram</h4>
          </header>
          <p>
            <time datetime="2022/12/23">December 13th, 2012 at 11.22</time>
          </p>
          <p class="blog-text">Where to get best food in Malleshwaram </p>
          <a href="#" class="read-more">
            Continue Reading...
          </a>
        </div>
      </article>

      <article class="blog-item">
        <img src={jayanagar} alt="Jayanagar" class="blog-thumbnail" />
        <div class="blog-info">
          <header>
            <h4>Jayanagar</h4>
          </header>
          <p>
            <time datetime="2022/12/26">December 23rd, 2012 at 10.10</time>
          </p>
          <p class="blog-text">Top breakfast and Lunch spots in Jayanagar</p>
          <a href="#" class="read-more">
            Continue Reading...
          </a>
        </div>
      </article>

      <article class="blog-item">
        <img src={vvpuram} alt="VVPuram" class="blog-thumbnail" />
        <div class="blog-info">
          <header>
            <h4>VV Puram</h4>
          </header>
          <p>
            <time datetime="2022/12/29">December 26th, 2012 at 12.22</time>
          </p>
          <p class="blog-text">The 10 best chat items to have in V V Puram</p>
          <a href="#" class="read-more">
            Continue Reading...
          </a>
        </div>
      </article>

      <article class="blog-item">
        <img src={vijaynagar} alt="Vijaynagar" class="blog-thumbnail" />
        <div class="blog-info">
          <header>
            <h4>Vijaynagar</h4>
          </header>
          <p>
            <time datetime="2022/12/29">December 29th, 2012 at 01.10</time>
          </p>
          <p class="blog-text">10 of the best stalls to eat in Vijayanagar</p>
          <a href="#" class="read-more">
            Continue Reading...
          </a>
        </div>
      </article>


      <div class="underline"></div>



    </div>
  );
}

export default Articles;
